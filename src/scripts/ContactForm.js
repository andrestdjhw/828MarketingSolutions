import React, { useState } from "react"

/* ═══════════════════════════════════════════════════════════════════════════
   828 CONTACT FORM v2-Final — per brief Section 7.5
   ─────────────────────────────────────────────────────────────────────────
   Fields (per brief):
     - Business name
     - Your name
     - Phone
     - Email
     - "What's your biggest growth challenge right now?" (4 radio options)
       Every answer funnels toward Phase 1 as the diagnostic.
     - Terms & Privacy acknowledgment (legal best-practice, GDPR)

   Submit endpoint:
     POST /wp-admin/admin-ajax.php?action=828_contact_submit
     (Stub for now. Will be wired to HubSpot via WP AJAX handler once
      Manuel provides HubSpot portal credentials. Brief 13.4.)

   On success: inline success message, no redirect (better UX per Daniel's call).
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── Constants ─────────────────────────────────────────────────────────────
const GROWTH_CHALLENGES = [
  { value: "not_enough_leads",   label: "Not enough leads" },
  { value: "not_standing_out",   label: "Not standing out" },
  { value: "cant_compete",       label: "Can't compete" },
  { value: "dont_know_whats_working", label: "Don't know what's working" },
]

// Endpoint stub. When HubSpot info lands, either:
//   (a) repoint this to the HubSpot Forms API URL, or
//   (b) implement the admin-ajax handler in functions.php to relay to HubSpot.
const SUBMIT_ENDPOINT = "/wp-admin/admin-ajax.php?action=828_contact_submit"

// ─── Validation helpers ────────────────────────────────────────────────────
const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
const validatePhone = (v) => {
  // Strip non-digit chars; require at least 7 digits (loose US-friendly check)
  const digits = v.replace(/\D/g, "")
  return digits.length >= 7 && digits.length <= 15
}

// ─── Reusable UI bits ──────────────────────────────────────────────────────
function Field({ label, required, children, error }) {
  return (
    <div>
      <label className="block text-[10px] font-body font-medium uppercase tracking-[0.12em] text-[var(--color-midnight-logic)]/75 mb-1.5">
        {label}
        {required && <span className="text-[var(--color-growth-signal)] ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>
      )}
    </div>
  )
}

const inputClass =
  "w-full px-3 py-2 text-sm font-body text-[var(--color-midnight-logic)] bg-white border border-[rgba(26,28,41,0.2)] rounded-sm placeholder-[rgba(26,28,41,0.35)] focus:outline-none focus:border-[var(--color-midnight-logic)] focus:ring-2 focus:ring-[var(--color-growth-signal)]/30 transition-all duration-150"

// ─── Component ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    business_name: "",
    your_name: "",
    phone: "",
    email: "",
    growth_challenge: "",
    consent: false,
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("")

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    // Clear error for that field as the user fixes it
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.business_name.trim()) e.business_name = "Business name is required"
    if (!form.your_name.trim())     e.your_name = "Your name is required"

    if (!form.phone.trim()) {
      e.phone = "Phone is required"
    } else if (!validatePhone(form.phone)) {
      e.phone = "Please enter a valid phone number"
    }

    if (!form.email.trim()) {
      e.email = "Email is required"
    } else if (!validateEmail(form.email)) {
      e.email = "Please enter a valid email address"
    }

    if (!form.growth_challenge) {
      e.growth_challenge = "Please select your biggest growth challenge"
    }

    if (!form.consent) {
      e.consent = "Please acknowledge our Terms and Privacy Policy"
    }

    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === "submitting") return

    const validation = validate()
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    setStatus("submitting")
    setErrorMsg("")

    try {
      const payload = new FormData()
      Object.entries(form).forEach(([k, v]) => {
        payload.append(k, typeof v === "boolean" ? (v ? "1" : "0") : v)
      })
      payload.append("source", "contact_page")
      payload.append("submitted_at", new Date().toISOString())

      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        body: payload,
      })

      if (!res.ok) {
        // Endpoint not implemented yet (404) — still show success UX during build phase.
        // Remove this fallback once the WP handler exists.
        if (res.status === 400 || res.status === 404) {
          console.warn(
            "[ContactForm] WP endpoint not yet implemented. Showing success UI for staging review. " +
            "Wire up admin-ajax handler in functions.php before launch."
          )
          setStatus("success")
          return
        }
        throw new Error(`Submit failed with status ${res.status}`)
      }

      setStatus("success")
    } catch (err) {
      console.error("[ContactForm] Submit error:", err)
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again or email us directly.")
    }
  }

  // ─── Success state ─────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="bg-white border border-[var(--color-growth-signal)] rounded-sm p-10 lg:p-12">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-growth-signal)]/15 mb-6">
          <svg className="w-7 h-7 text-[var(--color-growth-signal)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-3">
          We received your message.
        </h3>
        <p className="text-base text-[var(--color-metric-steel)] leading-relaxed max-w-md">
          One of us will reach out within one business day to walk you through what the market is actually seeing about your business — and what to do about it.
        </p>
        <div className="mt-8 pt-6 border-t border-[rgba(26,28,41,0.1)] text-sm text-[var(--color-metric-steel)]">
          Want to talk sooner? Call{" "}
          <a href="tel:+19497755940" className="text-[var(--color-midnight-logic)] font-medium hover:text-[var(--color-growth-signal)] transition-colors">
            +1 (949) 775-5940
          </a>
        </div>
      </div>
    )
  }

  // ─── Form ──────────────────────────────────────────────────────────────
  const isSubmitting = status === "submitting"

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[rgba(26,28,41,0.1)] rounded-sm p-5 sm:p-6 shadow-sm" noValidate>

      <div className="mb-5">
        <h3 className="font-display font-bold text-xl text-[var(--color-midnight-logic)] mb-1">
          Tell us about your business.
        </h3>
        <p className="text-xs text-[var(--color-metric-steel)] leading-relaxed">
          Four questions. One business day. No pitch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        <Field label="Business Name" required error={errors.business_name}>
          <input
            type="text"
            value={form.business_name}
            onChange={(e) => update("business_name", e.target.value)}
            className={inputClass}
            placeholder="Your company"
            disabled={isSubmitting}
            autoComplete="organization"
          />
        </Field>

        <Field label="Your Name" required error={errors.your_name}>
          <input
            type="text"
            value={form.your_name}
            onChange={(e) => update("your_name", e.target.value)}
            className={inputClass}
            placeholder="First and last"
            disabled={isSubmitting}
            autoComplete="name"
          />
        </Field>

        <Field label="Phone" required error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            placeholder="(555) 123-4567"
            disabled={isSubmitting}
            autoComplete="tel"
          />
        </Field>

        <Field label="Email" required error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="you@business.com"
            disabled={isSubmitting}
            autoComplete="email"
          />
        </Field>
      </div>

      {/* Growth Challenge — radio buttons, full width below the grid */}
      <div className="mt-5">
        <label className="block text-[10px] font-body font-medium uppercase tracking-[0.12em] text-[var(--color-midnight-logic)]/75 mb-2">
          What's your biggest growth challenge right now?
          <span className="text-[var(--color-growth-signal)] ml-1">*</span>
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {GROWTH_CHALLENGES.map(({ value, label }) => {
            const selected = form.growth_challenge === value
            return (
              <label
                key={value}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-sm border cursor-pointer transition-all duration-150 ${
                  selected
                    ? "border-[var(--color-midnight-logic)] bg-[var(--color-midnight-logic)]/[0.03]"
                    : "border-[rgba(26,28,41,0.15)] hover:border-[rgba(26,28,41,0.4)]"
                }`}
              >
                <input
                  type="radio"
                  name="growth_challenge"
                  value={value}
                  checked={selected}
                  onChange={(e) => update("growth_challenge", e.target.value)}
                  disabled={isSubmitting}
                  className="sr-only"
                />
                <span
                  className={`flex items-center justify-center w-3.5 h-3.5 rounded-full border-2 shrink-0 transition-colors duration-150 ${
                    selected
                      ? "border-[var(--color-growth-signal)]"
                      : "border-[rgba(26,28,41,0.3)]"
                  }`}
                  aria-hidden="true"
                >
                  {selected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-growth-signal)]"></span>
                  )}
                </span>
                <span className="text-xs font-medium text-[var(--color-midnight-logic)]">
                  {label}
                </span>
              </label>
            )
          })}
        </div>

        {errors.growth_challenge && (
          <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.growth_challenge}</p>
        )}
      </div>

      {/* Consent */}
      <div className="mt-4 flex items-start gap-2.5">
        <input
          id="consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          disabled={isSubmitting}
          className="mt-0.5 w-3.5 h-3.5 rounded-sm border-[rgba(26,28,41,0.3)] text-[var(--color-midnight-logic)] focus:ring-2 focus:ring-[var(--color-growth-signal)]/30 cursor-pointer"
        />
        <label htmlFor="consent" className="text-[11px] text-[var(--color-metric-steel)] leading-relaxed cursor-pointer">
          I agree to 828 Marketing Solutions'{" "}
          <a
            href="/terms-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)] transition-colors"
          >
            Terms &amp; Conditions
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)] transition-colors"
          >
            Privacy Policy
          </a>
          .
        </label>
      </div>

      {errors.consent && (
        <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.consent}</p>
      )}

      {/* Error banner */}
      {status === "error" && errorMsg && (
        <div className="mt-4 px-3 py-2 bg-red-50 border border-red-200 rounded-sm text-xs text-red-800">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <div className="mt-5">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full inline-flex items-center justify-center gap-2 bg-[var(--color-midnight-logic)] text-white px-5 py-3 rounded-sm font-body font-medium text-[12px] uppercase tracking-[0.05em] hover:bg-[var(--color-deep-insight)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  )
}

export default ContactForm