import React, { useState } from "react"

// ─── Constants ─────────────────────────────────────────────────────────────
const SERVICES = [
  "Industry Report",
  "Brand Identity & Positioning",
  "Website Development & SEO",
  "Social Media Management",
  "Paid Advertisement",
  "Pitch Deck & Capabilities Development",
]

const REVENUE_RANGES = [
  "$0 – $250K",
  "$250K – $500K",
  "$500K – $1M",
  "$1M+",
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
function Field({ label, required, children, full = false }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1A1C29]/70 mb-1.5">
        {label}
        {required && <span className="text-[#A3CB37] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  "w-full px-3.5 py-2.5 text-sm text-[#1A1C29] bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:border-[#1A1C29] focus:ring-2 focus:ring-[#1A1C29]/10 transition-all duration-150"

const selectClass = inputClass + " appearance-none pr-9 cursor-pointer"

// ─── Component ─────────────────────────────────────────────────────────────
function ContactForm({ variant = "section" }) {
  // variant: "hero" (compact, on white card over hero) | "section" (full-width section)
  const [agreed, setAgreed] = useState(false)

  const isHero = variant === "hero"

  return (
    <form
      action="/thank-you"
      method="POST"
      className={`bg-white rounded-2xl ${
        isHero
          ? "p-6 sm:p-7 shadow-2xl ring-1 ring-black/5"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" required>
          <input
            type="text"
            name="name"
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </Field>

        <Field label="Business Name" required>
          <input
            type="text"
            name="business_name"
            required
            className={inputClass}
            placeholder="Company name"
          />
        </Field>

        <Field label="Phone Number" required>
          <input
            type="tel"
            name="phone"
            required
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </Field>

        <Field label="Email" required>
          <input
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="you@business.com"
          />
        </Field>

        <Field label="Website" full>
          <input
            type="url"
            name="website"
            className={inputClass}
            placeholder="https://yourbusiness.com"
          />
        </Field>

        <Field label="Service Required" required>
          <div className="relative">
            <select name="service" required defaultValue="" className={selectClass}>
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

        <Field label="Annual Revenue" required>
          <div className="relative">
            <select name="revenue" required defaultValue="" className={selectClass}>
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

        <Field label="City" required>
          <input
            type="text"
            name="city"
            required
            className={inputClass}
            placeholder="Your city"
          />
        </Field>

        <Field label="State" required>
          <div className="relative">
            <select name="state" required defaultValue="" className={selectClass}>
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

        <Field label="Message" full>
          <textarea
            name="message"
            rows={isHero ? 3 : 4}
            className={inputClass + " resize-none"}
            placeholder="Tell us about your goals, challenges, or what you're looking to achieve."
          />
        </Field>

        {/* Terms checkbox */}
        <div className="sm:col-span-2 flex items-start gap-2.5 mt-1">
          <input
            id={`agree-${variant}`}
            type="checkbox"
            name="agree"
            required
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

        {/* Submit */}
        <div className="sm:col-span-2 mt-2">
          <button
            type="submit"
            disabled={!agreed}
            className="group w-full inline-flex items-center justify-center gap-2 bg-[#1A1C29] text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-[#093D62] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#1A1C29] disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
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
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm