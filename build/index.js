/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ContactForm.js"
/*!************************************!*\
  !*** ./src/scripts/ContactForm.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


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

const GROWTH_CHALLENGES = [{
  value: "not_enough_leads",
  label: "Not enough leads"
}, {
  value: "not_standing_out",
  label: "Not standing out"
}, {
  value: "cant_compete",
  label: "Can't compete"
}, {
  value: "dont_know_whats_working",
  label: "Don't know what's working"
}];

// Endpoint stub. When HubSpot info lands, either:
//   (a) repoint this to the HubSpot Forms API URL, or
//   (b) implement the admin-ajax handler in functions.php to relay to HubSpot.
const SUBMIT_ENDPOINT = "/wp-admin/admin-ajax.php?action=828_contact_submit";

// ─── Validation helpers ────────────────────────────────────────────────────
const validateEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const validatePhone = v => {
  // Strip non-digit chars; require at least 7 digits (loose US-friendly check)
  const digits = v.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
};

// ─── Reusable UI bits ──────────────────────────────────────────────────────
function Field({
  label,
  required,
  children,
  error
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
      className: "block text-[10px] font-body font-medium uppercase tracking-[0.12em] text-[var(--color-midnight-logic)]/75 mb-1.5",
      children: [label, required && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-[var(--color-growth-signal)] ml-1",
        children: "*"
      })]
    }), children, error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "mt-1 text-xs text-red-600 font-medium",
      children: error
    })]
  });
}
const inputClass = "w-full px-3 py-2 text-sm font-body text-[var(--color-midnight-logic)] bg-white border border-[rgba(26,28,41,0.2)] rounded-sm placeholder-[rgba(26,28,41,0.35)] focus:outline-none focus:border-[var(--color-midnight-logic)] focus:ring-2 focus:ring-[var(--color-growth-signal)]/30 transition-all duration-150";

// ─── Component ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    business_name: "",
    your_name: "",
    phone: "",
    email: "",
    growth_challenge: "",
    consent: false
  });
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const update = (key, value) => {
    setForm(f => ({
      ...f,
      [key]: value
    }));
    // Clear error for that field as the user fixes it
    if (errors[key]) setErrors(e => ({
      ...e,
      [key]: undefined
    }));
  };
  const validate = () => {
    const e = {};
    if (!form.business_name.trim()) e.business_name = "Business name is required";
    if (!form.your_name.trim()) e.your_name = "Your name is required";
    if (!form.phone.trim()) {
      e.phone = "Phone is required";
    } else if (!validatePhone(form.phone)) {
      e.phone = "Please enter a valid phone number";
    }
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      e.email = "Please enter a valid email address";
    }
    if (!form.growth_challenge) {
      e.growth_challenge = "Please select your biggest growth challenge";
    }
    if (!form.consent) {
      e.consent = "Please acknowledge our Terms and Privacy Policy";
    }
    return e;
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (status === "submitting") return;
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
      const payload = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        payload.append(k, typeof v === "boolean" ? v ? "1" : "0" : v);
      });
      payload.append("source", "contact_page");
      payload.append("submitted_at", new Date().toISOString());
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        body: payload
      });
      if (!res.ok) {
        // Endpoint not implemented yet (404) — still show success UX during build phase.
        // Remove this fallback once the WP handler exists.
        if (res.status === 400 || res.status === 404) {
          console.warn("[ContactForm] WP endpoint not yet implemented. Showing success UI for staging review. " + "Wire up admin-ajax handler in functions.php before launch.");
          setStatus("success");
          return;
        }
        throw new Error(`Submit failed with status ${res.status}`);
      }
      setStatus("success");
    } catch (err) {
      console.error("[ContactForm] Submit error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  // ─── Success state ─────────────────────────────────────────────────────
  if (status === "success") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "bg-white border border-[var(--color-growth-signal)] rounded-sm p-10 lg:p-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-growth-signal)]/15 mb-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          className: "w-7 h-7 text-[var(--color-growth-signal)]",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
            points: "20 6 9 17 4 12"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        className: "font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-3",
        children: "We received your message."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-base text-[var(--color-metric-steel)] leading-relaxed max-w-md",
        children: "One of us will reach out within one business day to walk you through what the market is actually seeing about your business \u2014 and what to do about it."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mt-8 pt-6 border-t border-[rgba(26,28,41,0.1)] text-sm text-[var(--color-metric-steel)]",
        children: ["Want to talk sooner? Call", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "tel:+19497755940",
          className: "text-[var(--color-midnight-logic)] font-medium hover:text-[var(--color-growth-signal)] transition-colors",
          children: "+1 (949) 775-5940"
        })]
      })]
    });
  }

  // ─── Form ──────────────────────────────────────────────────────────────
  const isSubmitting = status === "submitting";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    onSubmit: handleSubmit,
    className: "bg-white border border-[rgba(26,28,41,0.1)] rounded-sm p-5 sm:p-6 shadow-sm",
    noValidate: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        className: "font-display font-bold text-xl text-[var(--color-midnight-logic)] mb-1",
        children: "Tell us about your business."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-xs text-[var(--color-metric-steel)] leading-relaxed",
        children: "Four questions. One business day. No pitch."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "Business Name",
        required: true,
        error: errors.business_name,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          value: form.business_name,
          onChange: e => update("business_name", e.target.value),
          className: inputClass,
          placeholder: "Your company",
          disabled: isSubmitting,
          autoComplete: "organization"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "Your Name",
        required: true,
        error: errors.your_name,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          value: form.your_name,
          onChange: e => update("your_name", e.target.value),
          className: inputClass,
          placeholder: "First and last",
          disabled: isSubmitting,
          autoComplete: "name"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "Phone",
        required: true,
        error: errors.phone,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "tel",
          value: form.phone,
          onChange: e => update("phone", e.target.value),
          className: inputClass,
          placeholder: "(555) 123-4567",
          disabled: isSubmitting,
          autoComplete: "tel"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "Email",
        required: true,
        error: errors.email,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "email",
          value: form.email,
          onChange: e => update("email", e.target.value),
          className: inputClass,
          placeholder: "you@business.com",
          disabled: isSubmitting,
          autoComplete: "email"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        className: "block text-[10px] font-body font-medium uppercase tracking-[0.12em] text-[var(--color-midnight-logic)]/75 mb-2",
        children: ["What's your biggest growth challenge right now?", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "text-[var(--color-growth-signal)] ml-1",
          children: "*"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-1.5",
        children: GROWTH_CHALLENGES.map(({
          value,
          label
        }) => {
          const selected = form.growth_challenge === value;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
            className: `flex items-center gap-2.5 px-3 py-2 rounded-sm border cursor-pointer transition-all duration-150 ${selected ? "border-[var(--color-midnight-logic)] bg-[var(--color-midnight-logic)]/[0.03]" : "border-[rgba(26,28,41,0.15)] hover:border-[rgba(26,28,41,0.4)]"}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              type: "radio",
              name: "growth_challenge",
              value: value,
              checked: selected,
              onChange: e => update("growth_challenge", e.target.value),
              disabled: isSubmitting,
              className: "sr-only"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: `flex items-center justify-center w-3.5 h-3.5 rounded-full border-2 shrink-0 transition-colors duration-150 ${selected ? "border-[var(--color-growth-signal)]" : "border-[rgba(26,28,41,0.3)]"}`,
              "aria-hidden": "true",
              children: selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "w-1.5 h-1.5 rounded-full bg-[var(--color-growth-signal)]"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-xs font-medium text-[var(--color-midnight-logic)]",
              children: label
            })]
          }, value);
        })
      }), errors.growth_challenge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "mt-1.5 text-xs text-red-600 font-medium",
        children: errors.growth_challenge
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-4 flex items-start gap-2.5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        id: "consent",
        type: "checkbox",
        checked: form.consent,
        onChange: e => update("consent", e.target.checked),
        disabled: isSubmitting,
        className: "mt-0.5 w-3.5 h-3.5 rounded-sm border-[rgba(26,28,41,0.3)] text-[var(--color-midnight-logic)] focus:ring-2 focus:ring-[var(--color-growth-signal)]/30 cursor-pointer"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        htmlFor: "consent",
        className: "text-[11px] text-[var(--color-metric-steel)] leading-relaxed cursor-pointer",
        children: ["I agree to 828 Marketing Solutions'", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/terms-conditions",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)] transition-colors",
          children: "Terms & Conditions"
        }), " ", "and", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/privacy-policy",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)] transition-colors",
          children: "Privacy Policy"
        }), "."]
      })]
    }), errors.consent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "mt-1.5 text-xs text-red-600 font-medium",
      children: errors.consent
    }), status === "error" && errorMsg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-4 px-3 py-2 bg-red-50 border border-red-200 rounded-sm text-xs text-red-800",
      children: errorMsg
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        type: "submit",
        disabled: isSubmitting,
        className: "group w-full inline-flex items-center justify-center gap-2 bg-[var(--color-midnight-logic)] text-white px-5 py-3 rounded-sm font-body font-medium text-[12px] uppercase tracking-[0.05em] hover:bg-[var(--color-deep-insight)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed",
        children: isSubmitting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            className: "animate-spin w-4 h-4",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "3",
              opacity: "0.25"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M12 2a10 10 0 0110 10",
              stroke: "currentColor",
              strokeWidth: "3",
              strokeLinecap: "round"
            })]
          }), "Sending\u2026"]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: ["Send Message", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            className: "w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": "true",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
              x1: "5",
              y1: "12",
              x2: "19",
              y2: "12"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
              points: "12 5 19 12 12 19"
            })]
          })]
        })
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ },

/***/ "./src/scripts/Footer.js"
/*!*******************************!*\
  !*** ./src/scripts/Footer.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/* ═══════════════════════════════════════════════════════════════════════════
   828 FOOTER v2-Final — per brief Section 5.3
   ─────────────────────────────────────────────────────────────────────────
   4 columns: brand+tagline · pages · contact · social
   Bottom rule: Growth Signal accent + copyright line
   ═══════════════════════════════════════════════════════════════════════════ */

const FacebookIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
  })
});
const InstagramIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 00-2.13 1.38A5.88 5.88 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.88 5.88 0 002.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 002.13-1.38 5.88 5.88 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 00-1.38-2.13A5.88 5.88 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
  })
});
const LinkedInIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  })
});
const YouTubeIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
  })
});
const NAV_ITEMS = [{
  label: "Case Studies",
  href: "/case-studies"
}, {
  label: "How We Work",
  href: "/how-we-work"
}, {
  label: "Industries",
  href: "/industries"
}, {
  label: "About",
  href: "/about"
}, {
  label: "Contact",
  href: "/contact"
}];
const SOCIALS = [{
  label: "Instagram",
  href: "https://www.instagram.com/828marketingsolutions/",
  Icon: InstagramIcon
}, {
  label: "LinkedIn",
  href: "https://www.linkedin.com/company/828marketingsolutions/",
  Icon: LinkedInIcon
}, {
  label: "Facebook",
  href: "https://www.facebook.com/828MarketingSolutions",
  Icon: FacebookIcon
}, {
  label: "YouTube",
  href: "https://www.youtube.com/@828marketingsolutions",
  Icon: YouTubeIcon
}];
function Footer({
  logoUrl,
  bgUrl
}) {
  const year = new Date().getFullYear();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("footer", {
    className: "bg-[var(--color-midnight-logic)] text-white relative overflow-hidden",
    children: [bgUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: bgUrl,
        alt: "",
        "aria-hidden": "true",
        className: "absolute inset-0 w-full h-full object-cover object-center"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "absolute inset-0 bg-[var(--color-midnight-logic)]/75"
      })]
    }) :
    /*#__PURE__*/
    /* Fallback: CSS circuit pattern when no image is set */
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "circuit-overlay",
      "aria-hidden": "true"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "md:col-span-4",
          children: [logoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: logoUrl,
            alt: "828 Marketing Solutions",
            className: "h-12 w-auto mb-5"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "block font-display text-3xl text-white font-bold tracking-tight mb-5",
            children: "828"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "font-display text-lg lg:text-xl text-white leading-snug max-w-xs",
            children: "Connecting Intelligence with Intention."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "md:col-span-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            className: "eyebrow eyebrow-lime mb-5",
            children: "Pages"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "space-y-3",
            children: NAV_ITEMS.map(({
              label,
              href
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                href: href,
                className: "text-sm text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150",
                children: label
              })
            }, label))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "md:col-span-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            className: "eyebrow eyebrow-lime mb-5",
            children: "Contact"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("address", {
            className: "not-italic space-y-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              className: "text-sm text-white/85 leading-relaxed",
              children: ["4 Venture, Suite 240", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "Irvine, CA 92656"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "tel:+19497755940",
              className: "block text-sm text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150",
              children: "+1 (949) 775-5940"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "mailto:manuel@828marketingsolutions.com",
              className: "block text-sm text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150 break-all",
              children: "manuel@828marketingsolutions.com"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "md:col-span-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            className: "eyebrow eyebrow-lime mb-5",
            children: "Follow"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "flex flex-wrap items-center gap-2",
            children: SOCIALS.map(({
              label,
              href,
              Icon
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: href,
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": label,
              className: "flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white hover:border-[var(--color-growth-signal)] hover:text-[var(--color-growth-signal)] transition-colors duration-200",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {})
            }, label))
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mt-12 lg:mt-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "gs-divider mb-6"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex flex-col sm:flex-row items-center justify-between gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
            className: "text-xs text-white/55",
            children: ["\xA9 ", year, " 828 Marketing Solutions, LLC. Built on Data. Designed to Win."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-5 text-xs",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/privacy-policy",
              className: "text-white/55 hover:text-white transition-colors duration-150",
              children: "Privacy Policy"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/terms-conditions",
              className: "text-white/55 hover:text-white transition-colors duration-150",
              children: "Terms & Conditions"
            })]
          })]
        })]
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ },

/***/ "./src/scripts/Navbar.js"
/*!*******************************!*\
  !*** ./src/scripts/Navbar.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/* ═══════════════════════════════════════════════════════════════════════════
   828 NAVBAR v2-Final — per brief Section 5.2
   ─────────────────────────────────────────────────────────────────────────
   Nav items: Case Studies · How We Work · Industries · About · Contact
   Style: Nebulica Medium, ALL CAPS, 14px, letter-spacing 0.05em
   Right cluster: EN|ES language toggle + persistent "Book a Strategy Call"
                  button (Growth Signal lime fill, Midnight Logic text)
   ═══════════════════════════════════════════════════════════════════════════ */

const NAV_ITEMS = [{
  label: "Case Studies",
  href: "/case-studies"
}, {
  label: "How We Work",
  href: "/how-we-work"
}, {
  label: "Industries",
  href: "/industries"
}, {
  label: "About",
  href: "/about"
}, {
  label: "Contact",
  href: "/contact"
}];
const ArrowRight = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
    points: "12 5 19 12 12 19"
  })]
});
function Navbar({
  logoUrl,
  homeUrl = "/"
}) {
  const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("EN");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onKey = e => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // When Polylang is wired up, swap to: window.location.href = newLangUrl
  const setLanguage = next => setLang(next);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("header", {
    className: `sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_0_0_rgba(26,28,41,0.08)]" : ""}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "max-w-7xl mx-auto px-5 sm:px-8 lg:px-12",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex items-center justify-between h-20 lg:h-24",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: homeUrl,
          className: "shrink-0",
          children: logoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: logoUrl,
            alt: "828 Marketing Solutions",
            className: "h-10 lg:h-12 w-auto"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "font-display text-2xl lg:text-3xl text-[var(--color-midnight-logic)] font-bold tracking-tight",
            children: "828"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
          className: "hidden lg:flex items-center gap-9",
          children: NAV_ITEMS.map(({
            label,
            href
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: href,
            className: "text-[13px] font-body font-medium uppercase tracking-[0.05em] text-[var(--color-midnight-logic)] hover:text-[var(--color-growth-signal)] transition-colors duration-200",
            children: label
          }, label))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "hidden lg:flex items-center gap-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center text-[13px] font-medium select-none uppercase tracking-[0.05em]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
              type: "button",
              onClick: () => setLanguage("EN"),
              className: `transition-colors duration-150 ${lang === "EN" ? "text-[var(--color-midnight-logic)]" : "text-[rgba(26,28,41,0.4)] hover:text-[var(--color-midnight-logic)]"}`,
              "aria-label": "Switch to English",
              children: "EN"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-[rgba(26,28,41,0.2)] mx-1.5",
              children: "/"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
              type: "button",
              onClick: () => setLanguage("ES"),
              className: `transition-colors duration-150 ${lang === "ES" ? "text-[var(--color-midnight-logic)]" : "text-[rgba(26,28,41,0.4)] hover:text-[var(--color-midnight-logic)]"}`,
              "aria-label": "Switch to Spanish",
              children: "ES"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "/contact",
            className: "group inline-flex items-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-5 py-2.5 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200",
            children: ["Book a Strategy Call", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "transform transition-transform duration-200 group-hover:translate-x-0.5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ArrowRight, {})
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "lg:hidden p-2 text-[var(--color-midnight-logic)]",
          onClick: () => setMobileOpen(o => !o),
          "aria-label": "Toggle menu",
          "aria-expanded": mobileOpen,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "w-6 h-6",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: mobileOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                x1: "3",
                y1: "6",
                x2: "21",
                y2: "6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                x1: "3",
                y1: "12",
                x2: "21",
                y2: "12"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                x1: "3",
                y1: "18",
                x2: "21",
                y2: "18"
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: `lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[600px] pb-6" : "max-h-0"}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
          className: "flex flex-col pt-3 border-t border-[rgba(26,28,41,0.1)]",
          children: [NAV_ITEMS.map(({
            label,
            href
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: href,
            className: "px-2 py-3 text-[13px] uppercase tracking-[0.05em] text-[var(--color-midnight-logic)] font-body font-medium hover:text-[var(--color-growth-signal)] transition-colors duration-150",
            children: label
          }, label)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-3 mt-4 px-2 text-[13px] font-medium uppercase tracking-[0.05em]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
              onClick: () => setLanguage("EN"),
              className: lang === "EN" ? "text-[var(--color-midnight-logic)]" : "text-[rgba(26,28,41,0.4)]",
              children: "EN"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-[rgba(26,28,41,0.2)]",
              children: "/"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
              onClick: () => setLanguage("ES"),
              className: lang === "ES" ? "text-[var(--color-midnight-logic)]" : "text-[rgba(26,28,41,0.4)]",
              children: "ES"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "/contact",
            className: "mt-4 mx-2 inline-flex items-center justify-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-5 py-3 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em]",
            children: ["Book a Strategy Call", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ArrowRight, {})]
          })]
        })
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Navbar */ "./src/scripts/Navbar.js");
/* harmony import */ var _scripts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/Footer */ "./src/scripts/Footer.js");
/* harmony import */ var _scripts_ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/ContactForm */ "./src/scripts/ContactForm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






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

const navbarEl = document.querySelector("#render-navbar-here");
if (navbarEl) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_4___default().createRoot(navbarEl);
  const logoUrl = navbarEl.dataset.logoUrl || "";
  const homeUrl = navbarEl.dataset.homeUrl || "/";
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    logoUrl: logoUrl,
    homeUrl: homeUrl
  }));
}

// ─── Footer mount ───────────────────────────────────────────────────────────
const footerEl = document.querySelector("#render-footer-here");
if (footerEl) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_4___default().createRoot(footerEl);
  const logoUrl = footerEl.dataset.logoUrl || "";
  const bgUrl = footerEl.dataset.bgUrl || "";
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    logoUrl: logoUrl,
    bgUrl: bgUrl
  }));
}

// ─── ContactForm mounts (any number per page) ───────────────────────────────
document.querySelectorAll(".render-contact-form").forEach(el => {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_4___default().createRoot(el);
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_scripts_ContactForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map