import Person from "./scripts/Person"
import ExampleReactComponent from "./scripts/ExampleReactComponent"
import Navbar from "./scripts/Navbar"
import Footer from "./scripts/Footer"
import ContactForm from "./scripts/ContactForm"
import React from "react"
import ReactDOM from "react-dom/client"

const person1 = new Person("Brad")

// Navbar mount
const navbarEl = document.querySelector("#render-navbar-here")
if (navbarEl) {
  const root = ReactDOM.createRoot(navbarEl)
  // Pull props from data attributes set in header.php
  const logoUrl = navbarEl.dataset.logoUrl || ""
  const homeUrl = navbarEl.dataset.homeUrl || "/"
  root.render(<Navbar logoUrl={logoUrl} homeUrl={homeUrl} />)
}

// Footer mount
const footerEl = document.querySelector("#render-footer-here")
if (footerEl) {
  const root = ReactDOM.createRoot(footerEl)
  const logoUrl = footerEl.dataset.logoUrl || ""
  root.render(<Footer logoUrl={logoUrl} />)
}

// ContactForm mounts — may have multiple instances on a single page (hero + section)
document.querySelectorAll(".render-contact-form").forEach((el) => {
  const root = ReactDOM.createRoot(el)
  const variant = el.dataset.variant || "section"
  root.render(<ContactForm variant={variant} />)
})

// Example React component mount (existing)
if (document.querySelector("#render-react-example-here")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-react-example-here"))
  root.render(<ExampleReactComponent />)
}