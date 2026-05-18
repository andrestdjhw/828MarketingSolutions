import React, { useState, useEffect } from "react"

/* ═══════════════════════════════════════════════════════════════════════════
   828 NAVBAR v2-Final — per brief Section 5.2
   ─────────────────────────────────────────────────────────────────────────
   Nav items: Case Studies · How We Work · Industries · About · Contact
   Style: Nebulica Medium, ALL CAPS, 14px, letter-spacing 0.05em
   Right cluster: EN|ES language toggle + persistent "Book a Strategy Call"
                  button (Growth Signal lime fill, Midnight Logic text)
   ═══════════════════════════════════════════════════════════════════════════ */

const NAV_ITEMS = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Industries",  href: "/industries" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
]

const ArrowRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

function Navbar({ logoUrl, homeUrl = "/" }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState("EN")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false) }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  // When Polylang is wired up, swap to: window.location.href = newLangUrl
  const setLanguage = (next) => setLang(next)

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(26,28,41,0.08)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* ── Logo ────────────────────────────────────────────────────── */}
          <a href={homeUrl} className="shrink-0">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="828 Marketing Solutions"
                className="h-10 lg:h-12 w-auto"
              />
            ) : (
              <span className="font-display text-2xl lg:text-3xl text-[var(--color-midnight-logic)] font-bold tracking-tight">
                828
              </span>
            )}
          </a>

          {/* ── Desktop nav ─────────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[13px] font-body font-medium uppercase tracking-[0.05em] text-[var(--color-midnight-logic)] hover:text-[var(--color-growth-signal)] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── Right cluster: lang toggle + CTA ────────────────────────── */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Language toggle */}
            <div className="flex items-center text-[13px] font-medium select-none uppercase tracking-[0.05em]">
              <button
                type="button"
                onClick={() => setLanguage("EN")}
                className={`transition-colors duration-150 ${
                  lang === "EN"
                    ? "text-[var(--color-midnight-logic)]"
                    : "text-[rgba(26,28,41,0.4)] hover:text-[var(--color-midnight-logic)]"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-[rgba(26,28,41,0.2)] mx-1.5">/</span>
              <button
                type="button"
                onClick={() => setLanguage("ES")}
                className={`transition-colors duration-150 ${
                  lang === "ES"
                    ? "text-[var(--color-midnight-logic)]"
                    : "text-[rgba(26,28,41,0.4)] hover:text-[var(--color-midnight-logic)]"
                }`}
                aria-label="Switch to Spanish"
              >
                ES
              </button>
            </div>

            {/* Persistent CTA — Growth Signal lime fill, Midnight Logic text */}
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-5 py-2.5 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200"
            >
              Book a Strategy Call
              <span className="transform transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </a>
          </div>

          {/* ── Mobile hamburger ────────────────────────────────────────── */}
          <button
            className="lg:hidden p-2 text-[var(--color-midnight-logic)]"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile menu ────────────────────────────────────────────────── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[600px] pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col pt-3 border-t border-[rgba(26,28,41,0.1)]">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-2 py-3 text-[13px] uppercase tracking-[0.05em] text-[var(--color-midnight-logic)] font-body font-medium hover:text-[var(--color-growth-signal)] transition-colors duration-150"
              >
                {label}
              </a>
            ))}

            {/* Mobile lang toggle */}
            <div className="flex items-center gap-3 mt-4 px-2 text-[13px] font-medium uppercase tracking-[0.05em]">
              <button onClick={() => setLanguage("EN")} className={lang === "EN" ? "text-[var(--color-midnight-logic)]" : "text-[rgba(26,28,41,0.4)]"}>EN</button>
              <span className="text-[rgba(26,28,41,0.2)]">/</span>
              <button onClick={() => setLanguage("ES")} className={lang === "ES" ? "text-[var(--color-midnight-logic)]" : "text-[rgba(26,28,41,0.4)]"}>ES</button>
            </div>

            <a
              href="/contact"
              className="mt-4 mx-2 inline-flex items-center justify-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-5 py-3 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em]"
            >
              Book a Strategy Call
              <ArrowRight />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar