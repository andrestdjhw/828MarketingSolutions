import React, { useState } from "react"

// ─── HubSpot Forms API config ──────────────────────────────────────────────
// Public Forms Submissions API — does NOT require an API key.
// Authenticates via portalId + formId in the URL path.
const HUBSPOT_PORTAL_ID = "245142821"
const HUBSPOT_FORM_ID = "f5c11a5a-02e9-4c74-a026-186c2ca036ee"
const HUBSPOT_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`

// ─── Constants ─────────────────────────────────────────────────────────────
// IMPORTANT: These values MUST match the HubSpot dropdown options character-by-character.
// HubSpot is case-sensitive and rejects values that don't match exactly.
const SERVICES = [
  "Industry Report",
  "Brand Identity & Positioning",
  "Website Development & SEO",
  "Social Media Management",
  "Paid Advertisement",
  "Pitch Deck & Capabilities Development",
]

// Revenue ranges — confirmed with HubSpot admin. Must use:
// - No $ symbol
// - Short hyphen "-" (not long dash "–")
// - Spaces around the hyphen
const REVENUE_RANGES = [
  "0 - 250K",
  "250K - 500K",
  "500K - 1M",
  "1M+",
]

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
]

// ─── Chevron icon for selects ─────────────────────────────────────────────
const ChevronDown = () => (
  <svg
    className="w-4 h-4 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1A1C29]/60"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

// ─── Reusable form field components ───────────────────────────────────────
function Field({ label, required, children, full = false, compact = false }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className={`block text-[10px] font-semibold tracking-[0.08em] uppercase text-[#1A1C29]/70 ${compact ? "mb-1" : "mb-1.5"}`}>
        {label}
        {required && <span className="text-[#A3CB37] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  "w-full px-3.5 py-2.5 text-sm text-[#1A1C29] bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-[#1A1C29] focus:ring-2 focus:ring-[#1A1C29]/10 transition-all duration-150"

const inputClassCompact =
  "w-full px-3 py-2 text-sm text-[#1A1C29] bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-[#1A1C29] focus:ring-2 focus:ring-[#1A1C29]/10 transition-all duration-150"

const selectClass = inputClass + " appearance-none pr-9 cursor-pointer"
const selectClassCompact = inputClassCompact + " appearance-none pr-9 cursor-pointer"

// ─── Initial form state ───────────────────────────────────────────────────
const initialFormState = {
  name: "",
  business_name: "",
  phone: "",
  email: "",
  website: "",
  service: "",
  revenue: "",
  city: "",
  state: "",
  message: "",
  // Honeypot — bots will fill this; real users won't see it
  website_url_confirm: "",
}

// ─── Component ─────────────────────────────────────────────────────────────
function ContactForm({ variant = "section" }) {
  // variant: "hero" (compact) | "section" (full-width)
  const [formData, setFormData] = useState(initialFormState)
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("")

  const isHero = variant === "hero"
  const inputCls = isHero ? inputClassCompact : inputClass
  const selectCls = isHero ? selectClassCompact : selectClass

  // Single change handler for all fields
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // ─── Submit handler — POST to HubSpot Forms API ─────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot check — silent fail for bots
    if (formData.website_url_confirm) {
      setStatus("success") // pretend it worked
      return
    }

    if (!agreed) return

    setStatus("submitting")
    setErrorMsg("")

    // Split full name into first + last for HubSpot's standard properties
    const nameParts = formData.name.trim().split(/\s+/)
    const firstname = nameParts[0] || ""
    const lastname = nameParts.slice(1).join(" ") || ""

    // Build the HubSpot payload
    // Each field has { name: <hubspot_internal_name>, value: <user_value> }
    //
    // Internal names confirmed with HubSpot admin:
    //   - service_interest        (enumeration dropdown)
    //   - annual_revenue_range    (enumeration dropdown)
    //
    // All other fields use HubSpot's default contact property internal names.
    const payload = {
      fields: [
        { name: "firstname", value: firstname },
        { name: "lastname", value: lastname },
        { name: "email", value: formData.email },
        { name: "phone", value: formData.phone },
        { name: "website", value: formData.website },
        { name: "city", value: formData.city },
        { name: "state", value: formData.state },
        { name: "service_interest", value: formData.service },
        { name: "annual_revenue_range", value: formData.revenue },
        // Message field — HubSpot internal name is "lead_message", not "message"
        { name: "lead_message", value: formData.message },
        // Terms & Privacy consent — HubSpot stores this as a boolean property on the contact
        { name: "agreed_to_privacy_policy_and_terms", value: agreed ? "true" : "false" },
        // Company name — HubSpot expects this scoped to the Company object (0-2 is the Company object type)
        { objectTypeId: "0-2", name: "name", value: formData.business_name },
      ],
      context: {
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName: typeof document !== "undefined" ? document.title : "",
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow 828 Marketing Solutions to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from 828 Marketing Solutions.",
            },
          ],
        },
      },
    }

    try {
      const response = await fetch(HUBSPOT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("HubSpot submission error:", errorData)
        throw new Error(
          errorData.message || `Submission failed (${response.status})`
        )
      }

      // Success — reset form and show confirmation
      setStatus("success")
      setFormData(initialFormState)
      setAgreed(false)

      // Optional: redirect to thank-you page after a delay
      // setTimeout(() => { window.location.href = "/thank-you" }, 2000)
    } catch (err) {
      console.error(err)
      setStatus("error")
      setErrorMsg(
        "We couldn't send your message. Please try again or email us directly at info@828marketingsolutions.com."
      )
    }
  }

  // ─── Success state ──────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div
        className={`bg-white rounded-2xl text-center ${
          isHero
            ? "p-6 sm:p-8 shadow-2xl ring-1 ring-black/5"
            : "p-10 sm:p-12 shadow-xl border border-gray-200"
        }`}
      >
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#A3CB37]/15 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[#A3CB37]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1C29] tracking-tight mb-3">
          Message received.
        </h3>
        <p className="text-sm sm:text-base text-[#1A1C29]/70 leading-relaxed max-w-md mx-auto mb-6">
          Thanks for reaching out. Someone from our team will get back to you within one business day to schedule your strategy session.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#093D62] hover:text-[#1A1C29] transition-colors duration-150"
        >
          Send another message
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    )
  }

  // ─── Form state ─────────────────────────────────────────────────────────
  const isSubmitting = status === "submitting"

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-2xl ${
        isHero
          ? "p-5 sm:p-6 shadow-2xl ring-1 ring-black/5"
          : "p-8 sm:p-10 shadow-xl border border-gray-200"
      }`}
    >
      {!isHero && (
        <div className="mb-7">
          <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-2">
            Let's Talk
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1C29] tracking-tight">
            Tell us about your business
          </h3>
          <p className="text-sm text-[#1A1C29]/65 mt-2">
            Share a few details and we'll get back to you within one business day.
          </p>
        </div>
      )}

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${isHero ? "gap-3" : "gap-4"}`}>
        <Field label="Name" required compact={isHero}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={inputCls}
            placeholder="Your full name"
            autoComplete="name"
          />
        </Field>

        <Field label="Business Name" required compact={isHero}>
          <input
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={inputCls}
            placeholder="Company name"
            autoComplete="organization"
          />
        </Field>

        <Field label="Phone Number" required compact={isHero}>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={inputCls}
            placeholder="(555) 123-4567"
            autoComplete="tel"
          />
        </Field>

        <Field label="Email" required compact={isHero}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={inputCls}
            placeholder="you@business.com"
            autoComplete="email"
          />
        </Field>

        <Field label="Website" full compact={isHero}>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputCls}
            placeholder="https://yourbusiness.com"
            autoComplete="url"
          />
        </Field>

        <Field label="Service Required" required compact={isHero}>
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={selectCls}
            >
              <option value="" disabled>
                Select a service
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown />
          </div>
        </Field>

        <Field label="Annual Revenue" required compact={isHero}>
          <div className="relative">
            <select
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={selectCls}
            >
              <option value="" disabled>
                Select range
              </option>
              {REVENUE_RANGES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <ChevronDown />
          </div>
        </Field>

        <Field label="City" required compact={isHero}>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={inputCls}
            placeholder="Your city"
            autoComplete="address-level2"
          />
        </Field>

        <Field label="State" required compact={isHero}>
          <div className="relative">
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={selectCls}
            >
              <option value="" disabled>
                Select state
              </option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown />
          </div>
        </Field>

        <Field label="Message" full compact={isHero}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows={isHero ? 2 : 4}
            className={inputCls + " resize-none"}
            placeholder="Tell us about your goals, challenges, or what you're looking to achieve."
          />
        </Field>

        {/* Honeypot field — hidden from real users, bots will fill it */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          <label htmlFor={`website-url-confirm-${variant}`}>
            Please leave this field empty
          </label>
          <input
            id={`website-url-confirm-${variant}`}
            type="text"
            name="website_url_confirm"
            value={formData.website_url_confirm}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        {/* Terms checkbox */}
        <div className="sm:col-span-2 flex items-start gap-2.5 mt-1">
          <input
            id={`agree-${variant}`}
            type="checkbox"
            name="agree"
            required
            disabled={isSubmitting}
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#1A1C29] focus:ring-2 focus:ring-[#1A1C29]/20 cursor-pointer"
          />
          <label
            htmlFor={`agree-${variant}`}
            className="text-xs text-[#1A1C29]/70 leading-relaxed cursor-pointer"
          >
            I agree to the{" "}
            <a
              href="/terms-conditions"
              className="text-[#1A1C29] font-semibold underline hover:text-[#093D62] transition-colors"
            >
              Terms &amp; Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="text-[#1A1C29] font-semibold underline hover:text-[#093D62] transition-colors"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Error message */}
        {status === "error" && (
          <div className="sm:col-span-2 bg-red-50 border border-red-200 rounded-md px-4 py-3 text-sm text-red-800">
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <div className={`sm:col-span-2 ${isHero ? "mt-1" : "mt-2"}`}>
          <button
            type="submit"
            disabled={!agreed || isSubmitting}
            className={`group w-full inline-flex items-center justify-center gap-2 bg-[#1A1C29] text-white ${isHero ? "px-5 py-3" : "px-6 py-3.5"} rounded-full font-semibold text-sm hover:bg-[#093D62] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#1A1C29] disabled:hover:translate-y-0 disabled:hover:shadow-none`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    opacity="0.25"
                  />
                  <path
                    d="M12 2a10 10 0 0 1 10 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Submit Request
                <svg
                  className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm