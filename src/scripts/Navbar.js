import React, { useState, useEffect, useRef } from "react"

// Inline SVG icons — keeps bundle small and avoids icon library dependency
const PinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
  </svg>
)

const ChevronDown = ({ open }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 00-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.88 5.88 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
)

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z" />
  </svg>
)

const BBBIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M11.166 20.194c.806.577 2.809 1.923 3.222 2.358.412.435.023 1.099.023 1.099l.618.252c.137-.298.962-1.397 1.511-2.084.496-.62.926-1.706.941-2.503.047-2.572-3.367-3.794-4.949-5.237-.778-.71-.16-1.122-.16-1.122l-.527-.343C9.808 14.926 7.662 17.686 11.166 20.194zM12.922 11.605c1.969 1.74 5.435 3.548 5.679 4.717.318 1.523-.412 2.382-.412 2.382l.394.321c.213-.304.451-.591.67-.891.892-1.222 1.752-2.463 2.629-3.695 2.004-2.818 1.254-5.49-1.765-7.648-1.537-1.098-3.032-2.26-4.584-3.339-.871-.733-.275-2.107-.275-2.107l-.367-.32c0 0-3.286 3.984-3.573 5.588C11.045 8.148 10.953 9.865 12.922 11.605zM23 27L22.341 25 7.659 25 7 27 11.19 27 11.822 29 18.217 29 18.816 27z" />
  </svg>
)

const GoogleBusinessIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 50 50" fill="currentColor" aria-hidden="true">
    <path d="M 9.2832031 4 C 7.488935 4 5.9052102 5.2051958 5.4277344 6.9355469 L 2 19.365234 L 2 19.5 C 2 23.078268 4.9217323 26 8.5 26 C 10.813035 26 12.845511 24.77516 13.998047 22.945312 C 15.146939 24.778014 17.180833 26 19.5 26 C 21.819167 26 23.853061 24.778014 25.001953 22.945312 C 26.154489 24.77516 28.186965 26 30.5 26 C 32.813993 26 34.847721 24.77447 36 22.943359 C 37.152279 24.77447 39.186007 26 41.5 26 C 45.078268 26 48 23.078268 48 19.5 L 48 19.365234 L 44.570312 6.9355469 C 44.092963 5.2056548 42.509782 4 40.714844 4 L 9.2832031 4 z M 9.2832031 6 L 14.851562 6 L 13.197266 18 L 4.4511719 18 L 7.3554688 7.46875 C 7.5959929 6.597101 8.3794712 6 9.2832031 6 z M 26 6 L 33.128906 6 L 34.783203 18 L 26 18 L 26 6 z M 15 18 L 24 18 L 24 19.5 C 24 19.668891 24.012611 19.834272 24.025391 20 L 15 20 L 15 19.5 L 15 18 z M 36.802734 18 L 45.548828 18 L 45.984375 19.580078 C 45.981749 19.724009 45.951091 19.859765 45.935547 20 L 37.050781 20 C 37.032383 19.833631 37 19.67153 37 19.5 L 37 19.431641 L 36.802734 18 z M 4.0644531 20 L 12.949219 20 C 12.699714 22.256206 10.826202 24 8.5 24 C 6.175282 24 4.3143567 22.254621 4.0644531 20 z M 26.099609 20 L 34.900391 20 C 34.642986 22.247621 32.820142 24 30.5 24 C 28.179858 24 26.357014 22.247621 26.099609 20 z M 14 25.974609 C 12.517 27.235609 10.599 28 8.5 28 C 6.845 28 5.306 27.519172 4 26.701172 L 4 43 C 4 44.654 5.346 46 7 46 L 43 46 C 44.654 46 46 44.654 46 43 L 46 26.701172 C 44.694 27.519172 43.155 28 41.5 28 C 39.401 28 37.483 27.235609 36 25.974609 C 34.517 27.235609 32.599 28 30.5 28 C 28.401 28 26.483 27.235609 25 25.974609 C 23.517 27.235609 21.599 28 19.5 28 C 17.401 28 15.483 27.235609 14 25.974609 z M 35.5 29 C 37.546 29 39.372453 29.952547 40.564453 31.435547 L 39.132812 32.867188 C 38.314813 31.740187 36.996 31 35.5 31 C 33.019 31 31 33.019 31 35.5 C 31 37.981 33.019 40 35.5 40 C 37.453 40 39.102609 38.742 39.724609 37 L 36 37 L 36 35 L 41.974609 35 C 41.986609 35.166 42 35.331 42 35.5 C 42 39.084 39.084 42 35.5 42 C 31.916 42 29 39.084 29 35.5 C 29 31.916 31.916 29 35.5 29 z" />
  </svg>
)

// Service dropdown items — each with an inline icon
const ServiceIcon01 = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)
const ServiceIcon02 = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
  </svg>
)
const ServiceIcon03 = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
)
const ServiceIcon04 = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="16" cy="12" r="2" />
  </svg>
)
const ServiceIcon05 = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3v18h18" />
    <path d="M7 14l3-3 4 4 5-6" />
  </svg>
)
const ServiceIcon06 = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="4" x2="8" y2="18" />
  </svg>
)

const ArrowRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const SERVICES = [
  { label: "Industry Report",                       href: "/services/industry-report/",                       Icon: ServiceIcon01 },
  { label: "Brand Identity & Positioning",          href: "/services/brand-identity-and-positioning/",        Icon: ServiceIcon02 },
  { label: "Website Development & SEO",             href: "/services/website-development-and-seo/",           Icon: ServiceIcon03 },
  { label: "Social Media Management",               href: "/services/social-media-management/",               Icon: ServiceIcon04 },
  { label: "Paid Advertisement",                    href: "/services/paid-advertisement/",                    Icon: ServiceIcon05 },
  { label: "Pitch Deck & Capabilities Development", href: "/services/pitch-deck-and-capabilities-development/", Icon: ServiceIcon06 },
]

// Social links from user
const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/828MarketingSolutions",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/828marketingsolutions/",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@828marketingsolutions",
    Icon: TikTokIcon,
  },
  {
    label: "BBB",
    href: "https://www.bbb.org/us/ca/irvine/profile/marketing-consultant/828-marketing-solutions-llc-1126-1000164367",
    Icon: BBBIcon,
  },
  {
    label: "Google Business",
    href: "https://www.google.com/search?sca_esv=eb783835d62ec6f7&kgmid=/g/11whx4fjg4&q=828+MARKETING+SOLUTIONS&shem=bdsle,ptotplc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=c3675c43ba2b071a&utm_source=bdsle,ptotplc,shrtsdl,sh/x/loc/uni/m1/1",
    Icon: GoogleBusinessIcon,
  },
]

function Navbar({ logoUrl, homeUrl = "/" }) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const servicesRef = useRef(null)
  const megamenuRef = useRef(null)

  // Sticky shadow effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target) &&
        megamenuRef.current &&
        !megamenuRef.current.contains(e.target)
      ) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  // Close dropdown on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-[#1A1C29] via-[#252836] to-[#1A1C29] text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-2 text-sm">
            <PinIcon />
            <span className="font-medium tracking-wide whitespace-nowrap">
              Serving Orange County, CA and more!
            </span>
          </div>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/90 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div
        className={`bg-white sticky top-0 z-50 relative transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href={homeUrl} className="flex items-center shrink-0 group">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="828 Marketing Solutions"
                  className="h-12 lg:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="text-[#1A1C29] font-bold text-3xl tracking-tight">
                    828
                  </div>
                  <div className="text-[#1A1C29] text-sm leading-tight font-semibold">
                    Marketing
                    <br />
                    Solutions
                  </div>
                </div>
              )}
            </a>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>

              {/* Services dropdown trigger (megamenu opens below the navbar, full width) */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setServicesOpen((o) => !o)}
                  className="flex items-center gap-1 text-[#1A1C29] font-semibold text-base hover:text-[#093D62] transition-colors duration-200 relative group"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown open={servicesOpen} />
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-[#A3CB37] transition-all duration-300 w-0 group-hover:w-full" />
                </button>
              </div>

              <NavLink href="/contact">Contact Us</NavLink>
            </nav>

            {/* CTA buttons (desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+19497755940"
                className="inline-flex items-center gap-2 bg-[#1A1C29] text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-[#093D62] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <PhoneIcon />
                (949) 775-5940
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-[#1A1C29] text-white px-6 py-3 rounded-full font-semibold text-sm border-2 border-[#1A1C29] hover:bg-white hover:text-[#1A1C29] transition-all duration-200"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-[#1A1C29]"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
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
              mobileMenuOpen ? "max-h-[600px] pb-4" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col gap-1 pt-2 border-t border-gray-200">
              <MobileLink href="/">Home</MobileLink>
              <MobileLink href="/about">About Us</MobileLink>

              <details className="group">
                <summary className="flex items-center justify-between px-4 py-3 text-[#1A1C29] font-semibold cursor-pointer list-none hover:bg-gray-50 rounded-md">
                  Services
                  <ChevronDown />
                </summary>
                <div className="pl-6 py-1">
                  {SERVICES.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-[#1A1C29] hover:text-[#093D62]"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </details>

              <MobileLink href="/contact">Contact Us</MobileLink>

              <div className="flex flex-col gap-2 mt-3 px-2">
                <a
                  href="tel:+19497755940"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A1C29] text-white px-5 py-3 rounded-full font-semibold text-sm"
                >
                  <PhoneIcon />
                  (949) 775-5940
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#1A1C29] px-6 py-3 rounded-full font-semibold text-sm border-2 border-[#1A1C29]"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* MEGAMENU PANEL — contained width, opens below the navbar */}
        <div
          ref={megamenuRef}
          className={`hidden lg:block absolute left-0 right-0 top-full transition-all duration-200 origin-top ${
            servicesOpen
              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
          }`}
          role="menu"
          aria-hidden={!servicesOpen}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 pt-2">
            <div className="bg-white border border-gray-200 rounded-xl shadow-xl px-6 py-6">
              {/* Header row: eyebrow + view all */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500">
                  Our Services
                </span>
                <a
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1C29] hover:text-[#093D62] transition-colors duration-150 group"
                >
                  View All Services
                  <span className="transform transition-transform duration-150 group-hover:translate-x-0.5">
                    <ArrowRight />
                  </span>
                </a>
              </div>

              {/* Services grid: 3 cols × 2 rows */}
              <div className="grid grid-cols-3 gap-x-2 gap-y-1">
                {SERVICES.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    role="menuitem"
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-[#F8F9FB] transition-colors duration-150"
                  >
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-[#F8F9FB] text-[#093D62] group-hover:bg-white transition-colors duration-150">
                      <Icon />
                    </span>
                    <span className="brand-gradient-text text-sm font-semibold leading-snug">
                      {label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Footer row: tagline + CTA (placeholder copy) */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-6">
                <p className="text-xs text-gray-500">
                  {/* PLACEHOLDER: replace with real tagline */}
                  Tagline placeholder — full-service marketing built around your growth.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 bg-[#1A1C29] text-white px-4 py-2 rounded-full font-semibold text-xs hover:bg-[#093D62] transition-colors duration-200 whitespace-nowrap"
                >
                  {/* PLACEHOLDER: replace with real CTA copy */}
                  CTA Placeholder
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Desktop nav link with animated underline
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative text-[#1A1C29] font-semibold text-base hover:text-[#093D62] transition-colors duration-200 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 bg-[#A3CB37] transition-all duration-300 w-0 group-hover:w-full" />
    </a>
  )
}

function MobileLink({ href, children }) {
  return (
    <a
      href={href}
      className="px-4 py-3 text-[#1A1C29] font-semibold hover:bg-gray-50 rounded-md"
    >
      {children}
    </a>
  )
}

export default Navbar