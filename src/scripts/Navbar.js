import React, { useState, useEffect } from "react"

/* ═══════════════════════════════════════════════════════════════════════════
   828 NAVBAR v2-Final — per brief Section 5.2 + Daniel's topbar override
   ─────────────────────────────────────────────────────────────────────────
   Structure:
     - Topbar (above navbar): Midnight Logic bg, white text.
       Left: email + phone (clickable). Right: social icons.
       Hidden on mobile. Disappears on scroll down (only the navbar stays sticky).
     - Navbar (below topbar): white bg, sticky.
       5 nav items + EN/ES toggle + Growth Signal CTA.
   ═══════════════════════════════════════════════════════════════════════════ */

const NAV_ITEMS = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Industries",  href: "/industries" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
]

const SOCIALS = [
  { label: "Facebook",  href: "https://www.facebook.com/828MarketingSolutions" },
  { label: "Instagram", href: "https://www.instagram.com/828marketingsolutions/" },
  { label: "TikTok",    href: "https://www.tiktok.com/@828marketingsolutions" }, // TODO: replace with real TikTok URL
  { label: "BBB",       href: "https://www.google.com/search?sca_esv=eb783835d62ec6f7&kgmid=/g/11whx4fjg4&q=828+MARKETING+SOLUTIONS&shem=bdsle,ptotplc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=c3675c43ba2b071a&utm_source=bdsle,ptotplc,shrtsdl,sh/x/loc/uni/m1/1" }, // TODO: replace with real Better Business Bureau URL
  { label: "GMB",       href: "https://www.bbb.org/us/ca/irvine/profile/marketing-consultant/828-marketing-solutions-llc-1126-1000164367" }, // TODO: replace with real Google My Business URL
]

// ─── Icon components ───────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 00-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.88 5.88 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
)

// TikTok — official simplified mark (musical note silhouette)
const TikTokIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.36a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.4z" />
  </svg>
)

// Better Business Bureau — simplified torch/flame shield mark (Daniel's SVG, currentColor)
const BBBIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true">
    <path d="M 9.2832031 4 C 7.488935 4 5.9052102 5.2051958 5.4277344 6.9355469 L 2 19.365234 L 2 19.5 C 2 23.078268 4.9217323 26 8.5 26 C 10.813035 26 12.845511 24.77516 13.998047 22.945312 C 15.146939 24.778014 17.180833 26 19.5 26 C 21.819167 26 23.853061 24.778014 25.001953 22.945312 C 26.154489 24.77516 28.186965 26 30.5 26 C 32.813993 26 34.847721 24.77447 36 22.943359 C 37.152279 24.77447 39.186007 26 41.5 26 C 45.078268 26 48 23.078268 48 19.5 L 48 19.365234 L 44.570312 6.9355469 C 44.092963 5.2056548 42.509782 4 40.714844 4 L 9.2832031 4 z M 9.2832031 6 L 14.851562 6 L 13.197266 18 L 4.4511719 18 L 7.3554688 7.46875 C 7.5959929 6.597101 8.3794712 6 9.2832031 6 z M 26 6 L 33.128906 6 L 34.783203 18 L 26 18 L 26 6 z M 15 18 L 24 18 L 24 19.5 C 24 19.668891 24.012611 19.834272 24.025391 20 L 15 20 L 15 19.5 L 15 18 z M 36.802734 18 L 45.548828 18 L 45.984375 19.580078 C 45.981749 19.724009 45.951091 19.859765 45.935547 20 L 37.050781 20 C 37.032383 19.833631 37 19.67153 37 19.5 L 37 19.431641 L 36.802734 18 z M 4.0644531 20 L 12.949219 20 C 12.699714 22.256206 10.826202 24 8.5 24 C 6.175282 24 4.3143567 22.254621 4.0644531 20 z M 26.099609 20 L 34.900391 20 C 34.642986 22.247621 32.820142 24 30.5 24 C 28.179858 24 26.357014 22.247621 26.099609 20 z M 14 25.974609 C 12.517 27.235609 10.599 28 8.5 28 C 6.845 28 5.306 27.519172 4 26.701172 L 4 43 C 4 44.654 5.346 46 7 46 L 43 46 C 44.654 46 46 44.654 46 43 L 46 26.701172 C 44.694 27.519172 43.155 28 41.5 28 C 39.401 28 37.483 27.235609 36 25.974609 C 34.517 27.235609 32.599 28 30.5 28 C 28.401 28 26.483 27.235609 25 25.974609 C 23.517 27.235609 21.599 28 19.5 28 C 17.401 28 15.483 27.235609 14 25.974609 z M 35.5 29 C 37.546 29 39.372453 29.952547 40.564453 31.435547 L 39.132812 32.867188 C 38.314813 31.740187 36.996 31 35.5 31 C 33.019 31 31 33.019 31 35.5 C 31 37.981 33.019 40 35.5 40 C 37.453 40 39.102609 38.742 39.724609 37 L 36 37 L 36 35 L 41.974609 35 C 41.986609 35.166 42 35.331 42 35.5 C 42 39.084 39.084 42 35.5 42 C 31.916 42 29 39.084 29 35.5 C 29 31.916 31.916 29 35.5 29 z" />
  </svg>
)

// Google My Business — map pin marker (Daniel's SVG, currentColor)
const GMBIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 30 30" fill="currentColor" aria-hidden="true">
    <path d="M11.166 20.194c.806.577 2.809 1.923 3.222 2.358.412.435.023 1.099.023 1.099l.618.252c.137-.298.962-1.397 1.511-2.084.496-.62.926-1.706.941-2.503.047-2.572-3.367-3.794-4.949-5.237-.778-.71-.16-1.122-.16-1.122l-.527-.343C9.808 14.926 7.662 17.686 11.166 20.194zM12.922 11.605c1.969 1.74 5.435 3.548 5.679 4.717.318 1.523-.412 2.382-.412 2.382l.394.321c.213-.304.451-.591.67-.891.892-1.222 1.752-2.463 2.629-3.695 2.004-2.818 1.254-5.49-1.765-7.648-1.537-1.098-3.032-2.26-4.584-3.339-.871-.733-.275-2.107-.275-2.107l-.367-.32c0 0-3.286 3.984-3.573 5.588C11.045 8.148 10.953 9.865 12.922 11.605zM23 27L22.341 25 7.659 25 7 27 11.19 27 11.822 29 18.217 29 18.816 27z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
)

const SOCIAL_ICONS = {
  Facebook:  FacebookIcon,
  Instagram: InstagramIcon,
  TikTok:    TikTokIcon,
  BBB:       BBBIcon,
  GMB:       GMBIcon,
}

// ─── Component ─────────────────────────────────────────────────────────────
function Navbar({ logoUrl, homeUrl = "/" }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState("EN")

  // Topbar disappears when user scrolls past its height (~40px).
  // We use 8px as the trigger to give it a slight bit of resilience.
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

  const setLanguage = (next) => setLang(next)

  return (
    <>
      {/* ═══ TOPBAR — Midnight Logic, hidden on mobile, disappears on scroll
            Lives outside the sticky element so it scrolls away naturally. ═══ */}
      <div
        className={`hidden lg:block bg-[var(--color-midnight-logic)] text-white overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
        aria-hidden={scrolled}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-10 text-[12px]">

            {/* LEFT: email + phone */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:manuel@828marketingsolutions.com"
                className="flex items-center gap-2 text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150"
              >
                <MailIcon />
                <span>manuel@828marketingsolutions.com</span>
              </a>

              <a
                href="tel:+19497755940"
                className="flex items-center gap-2 text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150"
              >
                <PhoneIcon />
                <span>+1 (949) 775-5940</span>
              </a>
            </div>

            {/* RIGHT: social icons */}
            <div className="flex items-center gap-4">
              {SOCIALS.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label]
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/70 hover:text-[var(--color-growth-signal)] transition-colors duration-150"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>


      {/* ═══ NAVBAR — white, sticky always ═══ */}
      <div
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_0_rgba(26,28,41,0.08)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
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

            {/* Desktop nav */}
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

            {/* Right cluster: lang toggle + CTA */}
            <div className="hidden lg:flex items-center gap-6">
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

            {/* Mobile hamburger */}
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

          {/* Mobile menu */}
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

              {/* Mobile contact links (visible only when menu is open) */}
              <div className="mt-4 pt-4 px-2 border-t border-[rgba(26,28,41,0.1)] space-y-3">
                <a href="mailto:manuel@828marketingsolutions.com" className="flex items-center gap-2 text-sm text-[var(--color-midnight-logic)] hover:text-[var(--color-growth-signal)]">
                  <MailIcon /> manuel@828marketingsolutions.com
                </a>
                <a href="tel:+19497755940" className="flex items-center gap-2 text-sm text-[var(--color-midnight-logic)] hover:text-[var(--color-growth-signal)]">
                  <PhoneIcon /> +1 (949) 775-5940
                </a>
              </div>

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
      </div>
    </>
  )
}

export default Navbar