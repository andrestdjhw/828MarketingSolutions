import React from "react"

/* ═══════════════════════════════════════════════════════════════════════════
   828 FOOTER v2-Final — per brief Section 5.3
   ─────────────────────────────────────────────────────────────────────────
   4 columns: brand+tagline · pages · contact · social
   Bottom rule: Growth Signal accent + copyright line
   ═══════════════════════════════════════════════════════════════════════════ */

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 00-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.88 5.88 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const NAV_ITEMS = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Industries",  href: "/industries" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
]

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/828marketingsolutions/", Icon: InstagramIcon },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/828marketingsolutions/", Icon: LinkedInIcon },
  { label: "Facebook",  href: "https://www.facebook.com/828MarketingSolutions",   Icon: FacebookIcon },
  { label: "YouTube",   href: "https://www.youtube.com/@828marketingsolutions",   Icon: YouTubeIcon },
]

function Footer({ logoUrl, bgUrl }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-midnight-logic)] text-white relative overflow-hidden">
      {bgUrl ? (
        <>
          {/* Background estampado image */}
          <img
            src={bgUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark tint so text stays legible over any estampado */}
          <div className="absolute inset-0 bg-[var(--color-midnight-logic)]/75"></div>
        </>
      ) : (
        /* Fallback: CSS circuit pattern when no image is set */
        <div className="circuit-overlay" aria-hidden="true"></div>
      )}

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">

        {/* ─── 4 columns ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">

          {/* Col 1: Logo + tagline */}
          <div className="md:col-span-4">
            {logoUrl ? (
              <img src={logoUrl} alt="828 Marketing Solutions" className="h-12 w-auto mb-5" />
            ) : (
              <span className="block font-display text-3xl text-white font-bold tracking-tight mb-5">828</span>
            )}
            <p className="font-display text-lg lg:text-xl text-white leading-snug max-w-xs">
              Connecting Intelligence with Intention.
            </p>
          </div>

          {/* Col 2: Pages */}
          <div className="md:col-span-3">
            <h3 className="eyebrow eyebrow-lime mb-5">Pages</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="md:col-span-3">
            <h3 className="eyebrow eyebrow-lime mb-5">Contact</h3>

            <address className="not-italic space-y-3">
              <p className="text-sm text-white/85 leading-relaxed">
                4 Venture, Suite 240<br />
                Irvine, CA 92656
              </p>

              <a
                href="tel:+19497755940"
                className="block text-sm text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150"
              >
                +1 (949) 775-5940
              </a>

              <a
                href="mailto:manuel@828marketingsolutions.com"
                className="block text-sm text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150 break-all"
              >
                manuel@828marketingsolutions.com
              </a>
            </address>
          </div>

          {/* Col 4: Social */}
          <div className="md:col-span-2">
            <h3 className="eyebrow eyebrow-lime mb-5">Follow</h3>
            <div className="flex flex-wrap items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white hover:border-[var(--color-growth-signal)] hover:text-[var(--color-growth-signal)] transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Growth Signal bottom rule ─────────────────────────────────── */}
        <div className="mt-12 lg:mt-16">
          <div className="gs-divider mb-6"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/55">
              © {year} 828 Marketing Solutions, LLC. Built on Data. Designed to Win.
            </p>
            <div className="flex items-center gap-5 text-xs">
              <a
                href="/privacy-policy"
                className="text-white/55 hover:text-white transition-colors duration-150"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-conditions"
                className="text-white/55 hover:text-white transition-colors duration-150"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer