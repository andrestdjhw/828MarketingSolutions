import Navbar from "./scripts/Navbar"
import Footer from "./scripts/Footer"
import ContactForm from "./scripts/ContactForm"
import React from "react"
import ReactDOM from "react-dom/client"

/* ═══════════════════════════════════════════════════════════════════════════
   828 entrypoint v2-Final
   ─────────────────────────────────────────────────────────────────────────
   React mounts:
     - Navbar (every page, via #render-navbar-here)
     - Footer (every page, via #render-footer-here)
     - ContactForm (instance per .render-contact-form element)
       Used on /contact page (right column) AND on home hero.
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── Navbar mount ───────────────────────────────────────────────────────────
const navbarEl = document.querySelector("#render-navbar-here")
if (navbarEl) {
  const root = ReactDOM.createRoot(navbarEl)
  const logoUrl = navbarEl.dataset.logoUrl || ""
  const homeUrl = navbarEl.dataset.homeUrl || "/"
  root.render(<Navbar logoUrl={logoUrl} homeUrl={homeUrl} />)
}

// ─── Footer mount ───────────────────────────────────────────────────────────
const footerEl = document.querySelector("#render-footer-here")
if (footerEl) {
  const root = ReactDOM.createRoot(footerEl)
  const logoUrl = footerEl.dataset.logoUrl || ""
  const bgUrl   = footerEl.dataset.bgUrl   || ""
  root.render(<Footer logoUrl={logoUrl} bgUrl={bgUrl} />)
}

// ─── ContactForm mounts (any number per page) ───────────────────────────────
document.querySelectorAll(".render-contact-form").forEach((el) => {
  const root = ReactDOM.createRoot(el)
  root.render(<ContactForm />)
})