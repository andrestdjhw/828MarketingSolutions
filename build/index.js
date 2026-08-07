/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Chatbot828.js"
/*!***********************************!*\
  !*** ./src/scripts/Chatbot828.js ***!
  \***********************************/
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
   828 CHATBOT — Hardcoded responses, no API
   ─────────────────────────────────────────────────────────────────────────
   - Adapted from Imvera Group reference component
   - Brand: Midnight Logic + Growth Signal lime, Helvetica + Nebulica
   - Bilingual EN/ES via simple language detection on user input
   - Responses cover: 5-Phase Ecosystem, case studies, industries, contact
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Config ────────────────────────────────────────────────────

const PHONE_DISPLAY = "+1 (949) 775-5940";
const PHONE_LINK = "tel:+19497755940";
const EMAIL_DISPLAY = "info@828marketingsolutions.com";
const EMAIL_LINK = "mailto:info@828marketingsolutions.com";
const CONTACT_LINK = "/contact";
const CASES_LINK = "/case-studies";
const HOW_LINK = "/how-we-work";
const ABOUT_LINK = "/about";
const INDUSTRIES_LINK = "/industries";

// ── Icons ─────────────────────────────────────────────────────
function BotIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 3C8.134 3 5 6.134 5 10v2.2c0 .53-.21 1.04-.586 1.414L3 15h18l-1.414-1.386A2 2 0 0 1 19 12.2V10c0-3.866-3.134-7-7-7Z",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M9 18c.4 1.2 1.5 2 3 2s2.6-.8 3-2",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "9.25",
      cy: "10.25",
      r: "1",
      fill: "currentColor"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "14.75",
      cy: "10.25",
      r: "1",
      fill: "currentColor"
    })]
  });
}
function CloseIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 6L18 18",
      stroke: "currentColor",
      strokeWidth: "1.9",
      strokeLinecap: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M18 6L6 18",
      stroke: "currentColor",
      strokeWidth: "1.9",
      strokeLinecap: "round"
    })]
  });
}
function SendIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3L10 14",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3L14 21L10 14L3 10L21 3Z",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}
function PhoneIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 16.2V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.8a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.58 1.72l-1.2 1.2a16 16 0 0 0 5.4 5.4l1.2-1.2a2 2 0 0 1 1.72-.58l2.66.38A2 2 0 0 1 21 16.2Z",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function LinkIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M14 5H19V10",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M10 14L19 5",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M19 14V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H10",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}

// ── Language detection ───────────────────────────────────────
// Simple Spanish detector: looks for common Spanish words/chars
function isSpanish(text) {
  const t = text.toLowerCase();
  const spanishWords = ["hola", "buenos", "buenas", "qué", "que", "cómo", "como", "cuál", "cual", "donde", "dónde", "cuándo", "cuando", "por qué", "porque", "necesito", "quiero", "tienen", "tiene", "ofrecen", "ayuda", "ayúdame", "ayudame", "información", "informacion", "precio", "costo", "cuanto", "cuánto", "español", "espanol", "negocio", "empresa", "marketing", "estrategia", "servicio", "servicios", "agencia", "puedo", "podría", "podria", "gracias", "favor", "sí", "ñ"];
  return spanishWords.some(w => t.includes(w)) || /[ñáéíóúü¿¡]/.test(t);
}

// ── Bot logic ─────────────────────────────────────────────────
function msg(text, links = []) {
  return {
    id: Date.now() + Math.random(),
    text,
    sender: "bot",
    timestamp: new Date(),
    links
  };
}
function getBotResponse(rawInput) {
  const i = rawInput.toLowerCase();
  const es = isSpanish(rawInput);

  // ─── 5-Phase Ecosystem (general) ───────────────────────────
  if (i.includes("5-phase") || i.includes("5 phase") || i.includes("ecosystem") || i.includes("ecosistema") || i.includes("5 fase") || i.includes("cinco fase") || i.includes("how do you work") || i.includes("how does it work") || i.includes("como trabajan") || i.includes("cómo trabajan") || i.includes("proceso")) {
    return msg(es ? "El 828 5-Phase Ecosystem es nuestra respuesta a la pregunta '¿cómo hacemos que el mercado te vea?'. Cinco fases secuenciales: 01 Intelligence (diagnóstico), 02 Brand (identidad), 03 Website (sitio web), 04 Presence (presencia digital diaria), 05 Acceleration (paid ads). La mayoría de clientes empiezan con la Phase 1 — el Industry Intelligence Report — porque es el diagnóstico antes del tratamiento." : "The 828 5-Phase Ecosystem is our answer to one question: 'How do we make the market see you?' Five sequential phases: 01 Intelligence (diagnostic), 02 Brand (identity), 03 Website, 04 Presence (daily visibility), 05 Acceleration (paid ads). Most clients start with Phase 1 — the Industry Intelligence Report — because it's the diagnosis before the treatment.", [{
      label: es ? "Cómo trabajamos" : "How We Work",
      href: HOW_LINK
    }, {
      label: es ? "Agendar consulta" : "Book a Strategy Call",
      href: CONTACT_LINK
    }]);
  }

  // ─── Phase 1 / Intelligence Report ─────────────────────────
  if (i.includes("phase 1") || i.includes("fase 1") || i.includes("intelligence") || i.includes("inteligencia") || i.includes("report") || i.includes("reporte") || i.includes("diagnostic") || i.includes("diagnostico") || i.includes("diagnóstico")) {
    return msg(es ? "El Industry Intelligence Report (Phase 1) es nuestro punto de entrada. Es un análisis estratégico de tu industria, tu competencia, y por qué el mercado no te está viendo aún. La mayoría de clientes empiezan acá — algunos solo necesitan esto para corregir el rumbo internamente. Otros descubren que necesitan 2, 3, o las cinco fases. El reporte nos dice qué está roto — y en qué orden arreglarlo." : "The Industry Intelligence Report (Phase 1) is our diagnostic gate. It's a strategic analysis of your industry, competition, and exactly why the market isn't seeing you yet. Most clients start here — some only need Phase 1 to course-correct internally. Others discover they need 2, 3, or all five phases. The report tells us what's broken — and the order to fix it.", [{
      label: es ? "Cómo trabajamos" : "How We Work",
      href: HOW_LINK
    }, {
      label: es ? "Agendar consulta" : "Book a Strategy Call",
      href: CONTACT_LINK
    }]);
  }

  // ─── Case Studies / Results ────────────────────────────────
  if (i.includes("case stud") || i.includes("caso") || i.includes("results") || i.includes("resultado") || i.includes("clients") || i.includes("clientes") || i.includes("portfolio") || i.includes("examples") || i.includes("ejemplos") || i.includes("transformation") || i.includes("transformacion") || i.includes("transformación")) {
    return msg(es ? "Tenemos 8 transformaciones reales documentadas: restaurantes, contratistas de paisajismo, limpieza comercial, tortillerías B2B, wellness, drywall, y techos. Todas las métricas en USD. Por ejemplo: un restaurante de Orange County logró 225 conversiones en 90 días a $19.59 por lead. Un landscape contractor del Inland Empire: 45 conversiones a $97.48 CPL en mercado hipercompetitivo. Mirá los 8 cases completos en la página de Case Studies." : "We have 8 documented real transformations: restaurants, landscape contractors, commercial cleaning, B2B tortilleria, wellness, drywall, and roofing. All metrics in USD. For example: an OC restaurant achieved 225 conversions in 90 days at $19.59 CPL. An Inland Empire landscape contractor: 45 conversions at $97.48 CPL in a hyper-competitive market. See all 8 cases on the Case Studies page.", [{
      label: es ? "Ver casos de estudio" : "View Case Studies",
      href: CASES_LINK
    }, {
      label: es ? "Agendar consulta" : "Book a Strategy Call",
      href: CONTACT_LINK
    }]);
  }

  // ─── Industries ────────────────────────────────────────────
  if (i.includes("industr") || i.includes("rubro") || i.includes("sector") || i.includes("vertical") || i.includes("nicho") || i.includes("niche") || i.includes("restaurant") || i.includes("restaurante") || i.includes("trades") || i.includes("contratista") || i.includes("contractor") || i.includes("healthcare") || i.includes("salud") || i.includes("tax") || i.includes("impuesto") || i.includes("cleaning") || i.includes("limpieza") || i.includes("retail") || i.includes("wholesale") || i.includes("manufactur") || i.includes("beauty") || i.includes("wellness") || i.includes("belleza") || i.includes("bienestar")) {
    return msg(es ? "Trabajamos con 8 categorías de industria: Home Services & Trades, Restaurants & Food, Beauty & Wellness, Janitorial & Commercial, Retail/Wholesale/Manufacturing, Financial/Tax/Accounting, Healthcare & Specialty, y Professional Services & B2B. Pero 828 no segmenta por industria — segmentamos por emoción. La misma frase nos une: 'construí algo real, y el mercado no lo está viendo'." : "We work across 8 industry categories: Home Services & Trades, Restaurants & Food, Beauty & Wellness, Janitorial & Commercial, Retail/Wholesale/Manufacturing, Financial/Tax/Accounting, Healthcare & Specialty, and Professional Services & B2B. But 828 doesn't segment by industry — we segment by emotion. The same sentence connects them all: 'I built something real, and the market isn't seeing it.'", [{
      label: es ? "Ver industrias" : "View Industries",
      href: INDUSTRIES_LINK
    }, {
      label: es ? "Agendar consulta" : "Book a Strategy Call",
      href: CONTACT_LINK
    }]);
  }

  // ─── Pricing ───────────────────────────────────────────────
  if (i.includes("price") || i.includes("pricing") || i.includes("cost") || i.includes("precio") || i.includes("costo") || i.includes("cuanto") || i.includes("cuánto") || i.includes("how much") || i.includes("fee") || i.includes("tarifa")) {
    return msg(es ? "No publicamos precios en el sitio. Cada operación es distinta — un restaurante de 30 cubiertos, uno multi-local, y un contratista de 50 personas necesitan scopes diferentes. Empezamos siempre con Phase 1 (el diagnóstico), y de ahí cotizamos basados en lo que realmente necesitás. Sin paquetes genéricos." : "We don't post pricing on the site. Every operation is different — a 30-seat restaurant, a multi-location group, and a 50-person contractor each need different scopes. We always start with Phase 1 (the diagnosis), then quote based on what you actually need. No generic packages.", [{
      label: es ? "Agendar consulta" : "Book a Strategy Call",
      href: CONTACT_LINK
    }, {
      label: es ? "Cómo trabajamos" : "How We Work",
      href: HOW_LINK
    }]);
  }

  // ─── Bilingual / Hispanic market ───────────────────────────
  if (i.includes("spanish") || i.includes("español") || i.includes("espanol") || i.includes("hispanic") || i.includes("hispano") || i.includes("latino") || i.includes("latina") || i.includes("bilingual") || i.includes("bilingüe") || i.includes("bilingue")) {
    return msg(es ? "Sí — 828 es una agencia bilingüe especializada en el mercado hispano. Cada estrategia, campaña, y reporte funciona en ambos idiomas. La mayoría de nuestros clientes tienen staff y clientes bilingües — nosotros igualamos esa realidad. 'Conectamos inteligencia con intención' en ambos idiomas." : "Yes — 828 is a bilingual agency specialized in the Hispanic market. Every strategy, campaign, and report works in both languages. Most of our clients have bilingual staff and bilingual customers — we match that reality. 'Connecting Intelligence with Intention' in both languages.", [{
      label: es ? "Sobre 828" : "About 828",
      href: ABOUT_LINK
    }, {
      label: es ? "Agendar consulta" : "Book a Strategy Call",
      href: CONTACT_LINK
    }]);
  }

  // ─── Contact / How to reach ────────────────────────────────
  if (i.includes("contact") || i.includes("contacto") || i.includes("phone") || i.includes("teléfono") || i.includes("telefono") || i.includes("email") || i.includes("correo") || i.includes("call") || i.includes("llamar") || i.includes("reach") || i.includes("alcanzar") || i.includes("book") || i.includes("agendar") || i.includes("schedule") || i.includes("programa") || i.includes("meeting") || i.includes("reunión") || i.includes("reunion")) {
    return msg(es ? "Podés agendar una consulta de 30 minutos sin compromiso vía TidyCal en nuestra página de contacto, o llamarnos directamente. Sin pitch, sin relleno — solo el diagnóstico." : "You can book a free 30-minute strategy call via TidyCal on our contact page, or call us directly. No pitch, no fluff — just the diagnosis.", [{
      label: es ? "Agendar consulta" : "Book a Strategy Call",
      href: CONTACT_LINK
    }, {
      label: PHONE_DISPLAY,
      href: PHONE_LINK
    }]);
  }

  // ─── About / Who is 828 ────────────────────────────────────
  if (i.includes("about") || i.includes("who") || i.includes("quien") || i.includes("quién") || i.includes("team") || i.includes("equipo") || i.includes("manuel") || i.includes("history") || i.includes("historia") || i.includes("company") || i.includes("empresa") || i.includes("agency") || i.includes("agencia")) {
    return msg(es ? "828 Marketing Solutions es una agencia liderada por Manuel Luna, basada en Irvine, CA. Existimos porque el mercado es más grande de lo que tu competencia se da cuenta. Trabajamos con operadores que ya construyeron algo real, pero el mercado no los está viendo todavía. Más detalle del equipo, la misión, y nuestras alianzas con líderes como Antonio Nava y Laura Elena Martinez en la página About." : "828 Marketing Solutions is an agency led by Manuel Luna, based in Irvine, CA. We exist because the market is bigger than your competition realizes. We work with operators who have built something real — but the market isn't seeing them yet. Full team, mission, and our authority anchors (Antonio Nava, Laura Elena Martinez) on the About page.", [{
      label: es ? "Sobre 828" : "About 828",
      href: ABOUT_LINK
    }, {
      label: es ? "Agendar consulta" : "Book a Strategy Call",
      href: CONTACT_LINK
    }]);
  }

  // ─── Greeting ──────────────────────────────────────────────
  if (i.includes("hello") || i.includes("hi ") || i === "hi" || i.includes("hey") || i.includes("hola") || i.includes("buenas") || i.includes("buen dia") || i.includes("buen día")) {
    return msg(es ? "¡Hola! Soy el asistente de 828. Puedo ayudarte con info sobre nuestro 5-Phase Ecosystem, casos de estudio, industrias, o agendar una consulta. ¿Qué te trae por acá?" : "Hi! I'm the 828 assistant. I can help with info on our 5-Phase Ecosystem, case studies, industries, or booking a strategy call. What brings you here?", [{
      label: es ? "Cómo trabajamos" : "How We Work",
      href: HOW_LINK
    }, {
      label: es ? "Ver casos" : "View Cases",
      href: CASES_LINK
    }, {
      label: es ? "Agendar consulta" : "Book a Call",
      href: CONTACT_LINK
    }]);
  }

  // ─── Default ───────────────────────────────────────────────
  return msg(es ? "Puedo ayudarte con info sobre el 5-Phase Ecosystem, casos de estudio, industrias, precios, o agendar una consulta estratégica. ¿Qué te interesa más?" : "I can help with info on the 5-Phase Ecosystem, case studies, industries, pricing, or booking a strategy call. What are you most interested in?", [{
    label: es ? "Agendar consulta" : "Book a Strategy Call",
    href: CONTACT_LINK
  }, {
    label: es ? "Llamar" : "Call Us",
    href: PHONE_LINK
  }]);
}

// ── Component ─────────────────────────────────────────────────
function Chatbot828() {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [inputMessage, setInputMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isTyping, setIsTyping] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    id: 1,
    text: "Hi — I'm the 828 Strategy Assistant. I can help with our 5-Phase Ecosystem, case studies, industries, or booking a strategy call. Ask in English or Spanish.",
    sender: "bot",
    timestamp: new Date(),
    links: [{
      label: "How We Work",
      href: HOW_LINK
    }, {
      label: "Book a Strategy Call",
      href: CONTACT_LINK
    }]
  }]);
  const endRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const quickActions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    text: "5-Phase Ecosystem",
    num: "01"
  }, {
    text: "Case Studies",
    num: "02"
  }, {
    text: "Industries",
    num: "03"
  }, {
    text: "Pricing",
    num: "04"
  }, {
    text: "Bilingual Services",
    num: "05"
  }, {
    text: "Book a Call",
    num: "06"
  }], []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, isTyping]);
  function handleSend(e) {
    e?.preventDefault?.();
    if (!inputMessage.trim()) return;
    const text = inputMessage.trim();
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date()
    }]);
    setInputMessage("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, getBotResponse(text)]);
      setIsTyping(false);
    }, 650);
  }

  // Brand tokens (matched to index.css :root)
  const MIDNIGHT = "#1A1C29";
  const LIME = "#A3CB37";
  const PAPER = "#F7F8FA";
  const STEEL = "#6D7A8A";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "fixed bottom-4 right-4 z-[9999] sm:bottom-5 sm:right-5",
    children: [isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mb-3 flex h-[31rem] w-[calc(100vw-1.25rem)] max-w-[22rem] flex-col overflow-hidden rounded-[24px] sm:h-[33rem]",
      style: {
        boxShadow: "0 22px 50px rgba(26,28,41,0.28)",
        border: `1px solid rgba(26,28,41,0.12)`,
        background: PAPER,
        fontFamily: "var(--font-body)"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "relative overflow-hidden px-4 py-3 text-white",
        style: {
          background: `linear-gradient(135deg, ${MIDNIGHT} 0%, #1A1C29 50%, #093D62 130%)`,
          borderBottom: `1px solid rgba(255,255,255,0.08)`
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "absolute inset-0 opacity-[0.08]",
          style: {
            backgroundImage: `linear-gradient(transparent 95%, ${LIME} 95%), linear-gradient(90deg, transparent 95%, ${LIME} 95%)`,
            backgroundSize: "30px 30px"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "relative flex items-start justify-between gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "flex h-10 w-10 items-center justify-center rounded-full",
              style: {
                background: `rgba(163,203,55,0.15)`,
                border: `1px solid rgba(163,203,55,0.45)`,
                color: LIME
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BotIcon, {
                className: "h-5 w-5"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "text-[10px] font-medium uppercase tracking-[0.18em]",
                style: {
                  color: LIME,
                  fontFamily: "var(--font-body)"
                },
                children: "Connecting Intelligence with Intention"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                className: "mt-1 text-[0.95rem] font-bold tracking-[-0.01em]",
                style: {
                  fontFamily: "var(--font-display)"
                },
                children: "828 Strategy Assistant"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "mt-0.5 flex items-center gap-1.5",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "h-1.5 w-1.5 rounded-full",
                  style: {
                    background: LIME
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  className: "text-[10px] font-medium uppercase tracking-[0.14em]",
                  style: {
                    color: "rgba(255,255,255,0.7)"
                  },
                  children: "Online now"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            onClick: () => setIsOpen(false),
            className: "inline-flex h-8 w-8 items-center justify-center rounded-full transition",
            style: {
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)"
            },
            onMouseEnter: e => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = MIDNIGHT;
            },
            onMouseLeave: e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#fff";
            },
            "aria-label": "Close chat",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CloseIcon, {
              className: "h-4 w-4"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex-1 overflow-y-auto px-3 py-3",
        style: {
          background: PAPER
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "space-y-3",
          children: [messages.map(message => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: `flex ${message.sender === "user" ? "justify-end" : "justify-start"}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "max-w-[88%] rounded-[18px] px-3.5 py-3 text-[0.875rem] leading-6",
              style: message.sender === "user" ? {
                background: MIDNIGHT,
                color: "#fff",
                borderRadius: "18px 18px 4px 18px",
                boxShadow: `0 2px 8px rgba(26,28,41,0.18)`,
                fontFamily: "var(--font-body)"
              } : {
                background: "#fff",
                color: MIDNIGHT,
                borderRadius: "18px 18px 18px 4px",
                border: `1px solid rgba(26,28,41,0.08)`,
                boxShadow: `0 2px 6px rgba(26,28,41,0.06)`,
                fontFamily: "var(--font-body)"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "m-0",
                children: message.text
              }), message.links?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: message.links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                  href: link.href,
                  className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium transition",
                  style: {
                    background: PAPER,
                    border: `1px solid rgba(26,28,41,0.1)`,
                    color: MIDNIGHT
                  },
                  onMouseEnter: e => {
                    e.currentTarget.style.borderColor = LIME;
                    e.currentTarget.style.color = LIME;
                  },
                  onMouseLeave: e => {
                    e.currentTarget.style.borderColor = "rgba(26,28,41,0.1)";
                    e.currentTarget.style.color = MIDNIGHT;
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LinkIcon, {
                    className: "h-3.5 w-3.5"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    children: link.label
                  })]
                }, `${message.id}-${link.href}`))
              })]
            })
          }, message.id)), isTyping && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "flex justify-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "rounded-[18px] px-4 py-3",
              style: {
                background: "#fff",
                border: `1px solid rgba(26,28,41,0.08)`,
                borderRadius: "18px 18px 18px 4px",
                boxShadow: `0 2px 6px rgba(26,28,41,0.06)`
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "flex gap-1.5",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "h-2 w-2 animate-pulse rounded-full",
                  style: {
                    background: MIDNIGHT
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "h-2 w-2 animate-pulse rounded-full",
                  style: {
                    background: LIME,
                    animationDelay: "0.2s"
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "h-2 w-2 animate-pulse rounded-full",
                  style: {
                    background: STEEL,
                    animationDelay: "0.4s"
                  }
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            ref: endRef
          })]
        })
      }), messages.length === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "border-t px-3 py-3",
        style: {
          borderColor: `rgba(26,28,41,0.08)`,
          background: "#fff"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "mb-2 text-[10px] font-medium uppercase tracking-[0.14em]",
          style: {
            color: LIME,
            fontFamily: "var(--font-body)"
          },
          children: "Quick topics"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex flex-wrap gap-2",
          children: quickActions.map(action => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            type: "button",
            onClick: () => setInputMessage(action.text),
            className: "rounded-full px-2.5 py-1.5 text-[11px] font-medium transition",
            style: {
              background: PAPER,
              border: `1px solid rgba(26,28,41,0.1)`,
              color: MIDNIGHT,
              fontFamily: "var(--font-body)"
            },
            onMouseEnter: e => {
              e.currentTarget.style.borderColor = LIME;
              e.currentTarget.style.background = "rgba(163,203,55,0.08)";
              e.currentTarget.style.color = MIDNIGHT;
            },
            onMouseLeave: e => {
              e.currentTarget.style.borderColor = "rgba(26,28,41,0.1)";
              e.currentTarget.style.background = PAPER;
              e.currentTarget.style.color = MIDNIGHT;
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "mr-1",
              style: {
                color: LIME,
                fontWeight: 700
              },
              children: action.num
            }), action.text]
          }, action.text))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "border-t p-3",
        style: {
          borderColor: `rgba(26,28,41,0.08)`,
          background: "#fff"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
          onSubmit: handleSend,
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "text",
            value: inputMessage,
            onChange: e => setInputMessage(e.target.value),
            placeholder: "Ask in English or Spanish\u2026",
            className: "min-w-0 flex-1 rounded-full px-4 py-2.5 text-sm outline-none transition",
            style: {
              background: PAPER,
              border: `1px solid rgba(26,28,41,0.1)`,
              color: MIDNIGHT,
              fontFamily: "var(--font-body)"
            },
            onFocus: e => {
              e.currentTarget.style.borderColor = LIME;
              e.currentTarget.style.background = "#fff";
            },
            onBlur: e => {
              e.currentTarget.style.borderColor = "rgba(26,28,41,0.1)";
              e.currentTarget.style.background = PAPER;
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "submit",
            disabled: !inputMessage.trim(),
            className: "inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition",
            style: {
              background: LIME,
              color: MIDNIGHT,
              boxShadow: `0 8px 20px rgba(163,203,55,0.4)`
            },
            onMouseEnter: e => {
              e.currentTarget.style.opacity = "0.85";
            },
            onMouseLeave: e => {
              e.currentTarget.style.opacity = "1";
            },
            "aria-label": "Send message",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SendIcon, {
              className: "h-4 w-4"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "mt-3 flex flex-wrap items-center gap-3 text-[11px] font-medium",
          style: {
            color: "rgba(26,28,41,0.5)"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: PHONE_LINK,
            className: "inline-flex items-center gap-1.5 transition",
            onMouseEnter: e => e.currentTarget.style.color = LIME,
            onMouseLeave: e => e.currentTarget.style.color = "rgba(26,28,41,0.5)",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PhoneIcon, {
              className: "h-3.5 w-3.5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: PHONE_DISPLAY
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: EMAIL_LINK,
            className: "truncate transition",
            onMouseEnter: e => e.currentTarget.style.color = LIME,
            onMouseLeave: e => e.currentTarget.style.color = "rgba(26,28,41,0.5)",
            children: EMAIL_DISPLAY
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
      type: "button",
      onClick: () => setIsOpen(prev => !prev),
      className: "group relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300",
      style: {
        background: isOpen ? MIDNIGHT : `linear-gradient(135deg, ${MIDNIGHT} 0%, ${MIDNIGHT} 60%, ${LIME} 140%)`,
        color: isOpen ? "#fff" : LIME,
        boxShadow: `0 18px 40px rgba(26,28,41,0.35)`
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = "scale(1.05)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = "scale(1)";
      },
      "aria-label": isOpen ? "Close chat" : "Open chat",
      children: [!isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        className: "absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
          style: {
            background: LIME
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "relative inline-flex h-3.5 w-3.5 rounded-full",
          style: {
            background: LIME
          }
        })]
      }), isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CloseIcon, {
        className: "h-5 w-5"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BotIcon, {
        className: "h-6 w-6"
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chatbot828);

/***/ },

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
   828 CONTACT FORM v4.2 - Custom React form → HubSpot Forms API
   ─────────────────────────────────────────────────────────────────────────
   Posts directly to:
     https://api.hsforms.com/submissions/v3/integration/submit/{portal}/{form}

   No iframe, no embed widget - our own DOM, fully brand-styled.
   The HubSpot endpoint accepts the submission anonymously (no auth needed)
   and the lead lands in the CRM exactly as if it came through the embed.

   ANTI-SPAM (two layers):
   1. Honeypot field (invisible). Bots auto-fill all fields including the
      hidden one; we silently reject if it has any value.
   2. Google reCAPTCHA v3 invisible. Generates a fraud score (0.0-1.0) on
      submit and attaches it to the lead as a custom field. Score < 0.5
      typically means bot; Mannie can filter those in HubSpot views.
      (We do NOT block submits client-side - Google explicitly recommends
       NOT to, since attackers can read the threshold. Filtering happens
       in HubSpot or via WP server-side validation in a future iteration.)

   Field mapping confirmed with Manuel Luna (May 2026):
     - Standard properties:  firstname, lastname, company, phone, email,
                             website, city, message
     - Custom properties:    service_interest, biggest_growth_challenge,
                             growth_challenge__other

   CHANGE (June 2026): `annual_revenue_range` and `state` removed. Manuel
   pruned both from the HubSpot form after a lead analysis showed prospects
   were dropping off the form on those two fields. The React form below now
   matches the live HubSpot form exactly.

   CHANGE (Aug 2026) — AD ATTRIBUTION: the form was creating leads with no
   trace of the campaign that produced them. Two additions:
     a) UTM params are read from the URL on mount and cached in
        sessionStorage, so they survive the landing → /contact navigation.
        On submit they are sent as explicit contact properties.
     b) The HubSpot tracking cookie (`hubspotutk`) is sent as `context.hutk`,
        which is what lets HubSpot stitch the submission to the visitor's
        session and original source.

   ⚠ TWO PREREQUISITES OUTSIDE THIS FILE — without them the code runs but
     the data does not land:
     1. The HubSpot tracking code must be installed site-wide (wp_head).
        Until then `hubspotutk` never exists and `hutk` is simply omitted.
     2. The properties utm_source / utm_medium / utm_campaign / utm_content /
        utm_id must exist in the HubSpot portal AND be added to this form.
        HubSpot returns HTTP 400 for unknown field names — the exact failure
        mode we hit before with disallowed `context` keys.
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── HubSpot config ──────────────────────────────────────────────────────

const HS_PORTAL_ID = "245142821";
const HS_FORM_ID = "f5c11a5a-02e9-4c74-a026-186c2ca036ee";
const HS_SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_ID}`;

// ─── Google reCAPTCHA v3 config ──────────────────────────────────────────
// Site key generated by Manuel at https://www.google.com/recaptcha/admin
// (Type: reCAPTCHA v3 INVISIBLE - NOT v2)
// This key is PUBLIC - safe to commit. The matching SECRET key never appears
// here; it would only be needed for server-side verification (future step).
const RECAPTCHA_SITE_KEY = "6LcLuPksAAAAAIkNHnaGokVVZ3JUVpjG935eF4Q5";

// ─── UTM capture config ──────────────────────────────────────────────────
// Each key here must match a HubSpot contact property name EXACTLY.
// `utm_term` is intentionally left out: it is only useful for Search
// campaigns and the property does not exist in the portal yet. Add it to
// this array ONLY after creating it in HubSpot and adding it to the form.
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_id"];
const UTM_STORAGE_KEY = "828_utm_params";

// Reads UTMs off the current URL and caches them for the rest of the session.
// Why sessionStorage: the ad lands the visitor on the home page or a service
// page, but they submit from /contact. Without caching, the params are gone
// by the time the form is posted and every lead looks like direct traffic.
function captureUtmParams() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found = {};
  UTM_KEYS.forEach(key => {
    const value = params.get(key);
    if (value) found[key] = value;
  });

  // Only overwrite when this pageview actually carries UTMs, so an internal
  // navigation without params doesn't wipe the original attribution.
  if (Object.keys(found).length > 0) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
    } catch {
      // Private mode / storage disabled — attribution is lost but the form
      // must keep working. Never let this throw into the render path.
    }
  }
}
function getStoredUtmParams() {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// Reads the HubSpot tracking cookie. Anchored to a cookie boundary so a
// different cookie whose name merely ends in "hubspotutk" can't match.
// Returns "" when the tracking code isn't installed yet.
function getHubspotCookie() {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return match ? match[1] : "";
}

// ─── Meta (Facebook) Pixel — Lead conversion event ───────────────────────
// The pixel base code (installed site-wide via WP Code) only fires PageView.
// Without this call Meta sees the traffic but never learns which visits
// turned into a lead, so campaign optimization has nothing to optimize on.
//
// `fbq` is defined by the base code. We check for it every time instead of
// assuming: the script is third-party and can be blocked by an ad blocker,
// a consent tool, or a network failure. A missing pixel must never break a
// real form submission — the lead is worth more than the analytics event.
function trackMetaLead() {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  try {
    window.fbq("track", "Lead");
  } catch {
    // Swallow: analytics must never surface as an error to the visitor.
  }
}

// ─── reCAPTCHA loader ────────────────────────────────────────────────────
// Module-level promise so multiple ContactForm instances on the same page
// share a single script load instead of racing each other.
let recaptchaLoader = null;
function loadRecaptcha() {
  if (recaptchaLoader) return recaptchaLoader;
  recaptchaLoader = new Promise((resolve, reject) => {
    // Skip if no real key configured (dev / staging)
    if (!RECAPTCHA_SITE_KEY || RECAPTCHA_SITE_KEY.startsWith("PASTE_")) {
      console.warn("[ContactForm] reCAPTCHA site key not configured. Submitting without token.");
      resolve(null);
      return;
    }

    // Already loaded?
    if (typeof window !== "undefined" && window.grecaptcha && window.grecaptcha.ready) {
      window.grecaptcha.ready(() => resolve(window.grecaptcha));
      return;
    }
    const scriptSrc = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
    const existing = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existing) {
      existing.addEventListener("load", () => window.grecaptcha.ready(() => resolve(window.grecaptcha)));
      existing.addEventListener("error", () => reject(new Error("reCAPTCHA script failed to load")));
      return;
    }
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.defer = true;
    script.async = true;
    script.onload = () => window.grecaptcha.ready(() => resolve(window.grecaptcha));
    script.onerror = () => reject(new Error("reCAPTCHA script failed to load"));
    document.body.appendChild(script);
  });
  return recaptchaLoader;
}
async function getRecaptchaToken(action = "contact_form_submit") {
  try {
    const grecaptcha = await loadRecaptcha();
    if (!grecaptcha) return "";
    return await grecaptcha.execute(RECAPTCHA_SITE_KEY, {
      action
    });
  } catch (err) {
    console.warn("[ContactForm] reCAPTCHA token generation failed:", err);
    return ""; // fail-open: don't block submit if Google's API is down
  }
}

// ─── Field option lists (values must match HubSpot exactly - Manuel-confirmed) ──
const SERVICE_INTERESTS = ["Industry Report", "Website Development & SEO", "Social Media Management", "Paid Advertisement", "Brand Identity & Positioning", "Pitch Deck & Capabilities Development"];
const GROWTH_CHALLENGES = ["Not enough leads coming in", "Customers don't know who we are", "Can't compete with bigger companies in our market", "Marketing feels expensive but unclear", "Other"];

// ─── Validation helpers ──────────────────────────────────────────────────
const validateEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const validatePhone = v => {
  const digits = v.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
};
const validateUrl = v => {
  if (!v.trim()) return true; // optional
  try {
    new URL(v.startsWith("http") ? v : `https://${v}`);
    return true;
  } catch {
    return false;
  }
};

// ─── Reusable bits ───────────────────────────────────────────────────────
const inputClass = "w-full bg-white text-[var(--color-midnight-logic)] border border-[rgba(26,28,41,0.15)] rounded-sm px-3 py-2 text-[13px] font-body placeholder:text-[rgba(26,28,41,0.35)] focus:outline-none focus:border-[var(--color-midnight-logic)] focus:ring-[3px] focus:ring-[rgba(163,203,55,0.18)] transition-colors";
function Field({
  label,
  required,
  error,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
      className: "block text-[10px] font-body font-medium uppercase tracking-[0.12em] text-[var(--color-midnight-logic)]/75 mb-1",
      children: [label, required && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-[var(--color-growth-signal)] ml-1",
        children: "*"
      })]
    }), children, error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: "mt-1 text-[11px] text-red-600 font-medium",
      children: error
    })]
  });
}

// ─── Main component ──────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    firstname: "",
    lastname: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    service_interest: "",
    city: "",
    biggest_growth_challenge: [],
    growth_challenge__other: "",
    message: "",
    consent: false,
    // Honeypot - must stay empty. Bots auto-fill it; we reject if filled.
    website_url_backup: ""
  });
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const update = (key, value) => {
    setForm(f => ({
      ...f,
      [key]: value
    }));
    if (errors[key]) setErrors(e => ({
      ...e,
      [key]: undefined
    }));
  };

  // Preload reCAPTCHA script on mount so the first submit is instant.
  // Without this preload there's a ~500ms delay the first time the user clicks Submit.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadRecaptcha().catch(() => {/* silently fail; submit will retry */});
  }, []);

  // Capture ad attribution as early as possible in the session.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    captureUtmParams();
  }, []);
  const isSubmitting = status === "submitting";

  // ─── Validation ───────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.firstname.trim()) e.firstname = "First name is required";
    if (!form.lastname.trim()) e.lastname = "Last name is required";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";else if (!validatePhone(form.phone)) e.phone = "Enter a valid phone number";
    if (!form.email.trim()) e.email = "Email is required";else if (!validateEmail(form.email)) e.email = "Enter a valid email address";
    if (!validateUrl(form.website)) e.website = "Enter a valid URL";
    if (!form.service_interest) e.service_interest = "Select a service interest";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.biggest_growth_challenge.length) {
      e.biggest_growth_challenge = "Select at least one";
    } else if (form.biggest_growth_challenge.includes("Other") && !form.growth_challenge__other.trim()) {
      e.growth_challenge__other = "Tell us what your challenge is";
    }
    if (!form.message.trim()) e.message = "Message is required";
    if (!form.consent) e.consent = "Please acknowledge our Terms and Privacy Policy";
    return e;
  };

  // ─── Submit ───────────────────────────────────────────────────────
  const handleSubmit = async e => {
    e.preventDefault();
    if (isSubmitting) return;

    // Honeypot trap - silently "succeed" so the bot thinks it worked
    if (form.website_url_backup) {
      setStatus("success");
      return;
    }
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    // ─── Generate reCAPTCHA v3 token (invisible, ~300ms) ────────────
    // Returns "" if no key configured or if Google's API is down.
    // Either way we proceed - fail-open ensures the form still works.
    const recaptchaToken = await getRecaptchaToken("contact_form_submit");

    // ─── Build HubSpot v3 submission payload ─────────────────────
    // HubSpot expects: { fields: [{ objectTypeId?, name, value }, ...] }
    // objectTypeId is REQUIRED for the `company` field because the form is
    // configured to auto-create/associate a Company record. We send two
    // entries for it: one on the Contact (0-1) and one on the Company (0-2)
    // so HubSpot sets the Company's `name` property correctly.
    // Other fields default to Contact (0-1).
    const fields = [{
      objectTypeId: "0-1",
      name: "firstname",
      value: form.firstname.trim()
    }, {
      objectTypeId: "0-1",
      name: "lastname",
      value: form.lastname.trim()
    }, {
      objectTypeId: "0-1",
      name: "company",
      value: form.company.trim()
    },
    // Mirror the company name onto the Company object (0-2) under its
    // internal `name` property. HubSpot needs this to create the Company.
    {
      objectTypeId: "0-2",
      name: "name",
      value: form.company.trim()
    }, {
      objectTypeId: "0-1",
      name: "phone",
      value: form.phone.trim()
    }, {
      objectTypeId: "0-1",
      name: "email",
      value: form.email.trim()
    }, {
      objectTypeId: "0-1",
      name: "service_interest",
      value: form.service_interest
    }, {
      objectTypeId: "0-1",
      name: "city",
      value: form.city.trim()
    },
    // Multi-checkbox: HubSpot expects semicolon-joined string for enumeration
    // properties of type "checkbox" (multi-select)
    {
      objectTypeId: "0-1",
      name: "biggest_growth_challenge",
      value: form.biggest_growth_challenge.join(";")
    },
    // Message field - HubSpot internal name is `lead_message` (not the standard `message`)
    {
      objectTypeId: "0-1",
      name: "lead_message",
      value: form.message.trim()
    }];
    if (form.website.trim()) {
      fields.push({
        objectTypeId: "0-1",
        name: "website",
        value: form.website.trim()
      });
    }
    if (form.biggest_growth_challenge.includes("Other") && form.growth_challenge__other.trim()) {
      fields.push({
        objectTypeId: "0-1",
        name: "growth_challenge__other",
        value: form.growth_challenge__other.trim()
      });
    }

    // Consent: HubSpot expects this as a regular boolean checkbox field
    // (not via legalConsentOptions). Internal name: agreed_to_privacy_policy_and_terms
    // Boolean values must be sent as the strings "true" / "false".
    fields.push({
      objectTypeId: "0-1",
      name: "agreed_to_privacy_policy_and_terms",
      value: form.consent ? "true" : "false"
    });

    // ─── Ad attribution: UTMs cached earlier in the session ──────────
    // Only keys that actually have a value get pushed, so an organic visit
    // never sends empty utm_* properties and overwrite good data.
    const utmParams = getStoredUtmParams();
    Object.entries(utmParams).forEach(([key, value]) => {
      if (UTM_KEYS.includes(key) && value) {
        fields.push({
          objectTypeId: "0-1",
          name: key,
          value
        });
      }
    });

    // ─── Context ────────────────────────────────────────────────────
    // HubSpot only accepts a closed list of keys here and 400s on anything
    // else — including, in practice, an empty `hutk`. So the cookie is added
    // conditionally: present once the tracking code is installed, absent
    // (and harmless) until then.
    const context = {
      pageUri: typeof window !== "undefined" ? window.location.href : "",
      pageName: typeof document !== "undefined" ? document.title : ""
    };
    const hutk = getHubspotCookie();
    if (hutk) context.hutk = hutk;
    const payload = {
      fields,
      context
    };

    // Note on reCAPTCHA: we still generate `recaptchaToken` above (kept for
    // server-side validation if/when we add the WP handler), but we don't
    // attach it to the HubSpot payload. HubSpot v3 only accepts a closed
    // list of fields under `context` and rejects unknown ones with HTTP 400.
    // Google still tracks the score for our own monitoring at:
    //   https://www.google.com/recaptcha/admin
    // The score is visible per-day there even without server-side check.
    void recaptchaToken;

    // NOTE: the debug payload dump that lived here was removed once UTM
    // attribution was verified in production (Aug 2026). It printed every
    // lead's email and phone into the browser console on the live site.
    // If you need it again, re-add it temporarily and strip it before deploy.

    try {
      const res = await fetch(HS_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        console.error("[ContactForm] HubSpot rejected submission:", res.status, errBody);
        // HubSpot returns { status, errors: [{ errorType, message }, ...] }
        // Log every error individually so debugging is fast (multiple field
        // issues can come back in a single 400 response).
        if (errBody?.errors && Array.isArray(errBody.errors)) {
          errBody.errors.forEach((e, i) => {
            console.error(`[ContactForm] HubSpot error ${i + 1}/${errBody.errors.length}:`, e.message || e);
          });
        }
        const allMessages = errBody?.errors?.map(e => e.message).filter(Boolean).join(" · ");
        throw new Error(allMessages || errBody?.message || `HubSpot returned ${res.status}`);
      }

      // Fire the Meta conversion only after HubSpot confirms the lead was
      // accepted. Firing it before the response (or on validation failure)
      // would inflate the conversion count and skew campaign optimization.
      trackMetaLead();
      setStatus("success");
    } catch (err) {
      console.error("[ContactForm] Submit error:", err);
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again or email us directly.");
    }
  };

  // ─── Success state ────────────────────────────────────────────────
  if (status === "success") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "bg-white border border-[var(--color-growth-signal)] rounded-md p-8 lg:p-10 shadow-[0_12px_32px_-8px_rgba(26,28,41,0.15)]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-growth-signal)]/15 mb-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          className: "w-6 h-6 text-[var(--color-growth-signal)]",
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
        className: "font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-2",
        children: "We received your message."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-sm text-[var(--color-metric-steel)] leading-relaxed max-w-md",
        children: "One of us will reach out within one business day to walk you through what the market is actually seeing about your business - and what to do about it."
      })]
    });
  }

  // ─── Form ─────────────────────────────────────────────────────────
  const challengeIncludesOther = form.biggest_growth_challenge.includes("Other");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    onSubmit: handleSubmit,
    noValidate: true,
    className: "bg-white rounded-md p-5 lg:p-6 shadow-[0_12px_32px_-8px_rgba(26,28,41,0.15),0_4px_8px_-4px_rgba(26,28,41,0.06)]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      className: "text-[13px] text-[var(--color-metric-steel)] leading-snug mb-5",
      children: ["Thanks for reaching out. We'll review your message and get back to you within 1 business day. ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "text-[var(--color-midnight-logic)] font-medium",
        children: "- The 828 Marketing Solutions Team"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: "-9999px",
        opacity: 0,
        height: 0,
        overflow: "hidden"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        children: ["Website URL (do not fill)", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          tabIndex: "-1",
          autoComplete: "off",
          value: form.website_url_backup,
          onChange: e => update("website_url_backup", e.target.value)
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "First Name",
        required: true,
        error: errors.firstname,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          value: form.firstname,
          onChange: e => update("firstname", e.target.value),
          className: inputClass,
          disabled: isSubmitting,
          autoComplete: "given-name"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "Last Name",
        required: true,
        error: errors.lastname,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          value: form.lastname,
          onChange: e => update("lastname", e.target.value),
          className: inputClass,
          disabled: isSubmitting,
          autoComplete: "family-name"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "Company Name",
        required: true,
        error: errors.company,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          value: form.company,
          onChange: e => update("company", e.target.value),
          className: inputClass,
          disabled: isSubmitting,
          autoComplete: "organization"
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "Website URL",
        error: errors.website,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          value: form.website,
          onChange: e => update("website", e.target.value),
          className: inputClass,
          placeholder: "yourbusiness.com",
          disabled: isSubmitting,
          autoComplete: "url"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "Service Interest",
        required: true,
        error: errors.service_interest,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectInput, {
          value: form.service_interest,
          onChange: v => update("service_interest", v),
          options: SERVICE_INTERESTS,
          disabled: isSubmitting,
          placeholder: "Select\u2026"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "City",
        required: true,
        error: errors.city,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "text",
          value: form.city,
          onChange: e => update("city", e.target.value),
          className: inputClass,
          disabled: isSubmitting,
          autoComplete: "address-level2"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        className: "block text-[10px] font-body font-medium uppercase tracking-[0.12em] text-[var(--color-midnight-logic)]/75 mb-0.5",
        children: ["What's your biggest growth challenge right now?", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "text-[var(--color-growth-signal)] ml-1",
          children: "*"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-[10px] text-[var(--color-metric-steel)] italic mb-2",
        children: "Select all that apply."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "grid grid-cols-1 gap-1.5",
        children: GROWTH_CHALLENGES.map(opt => {
          const selected = form.biggest_growth_challenge.includes(opt);
          const toggle = () => {
            const next = selected ? form.biggest_growth_challenge.filter(v => v !== opt) : [...form.biggest_growth_challenge, opt];
            update("biggest_growth_challenge", next);
            if (opt === "Other" && selected) update("growth_challenge__other", "");
          };
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
            className: `flex items-start gap-2.5 px-3 py-2 rounded-sm border cursor-pointer transition-colors duration-150 ${selected ? "border-[var(--color-midnight-logic)] bg-[var(--color-midnight-logic)]/[0.03]" : "border-[rgba(26,28,41,0.15)] hover:border-[rgba(26,28,41,0.4)]"}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
              type: "checkbox",
              checked: selected,
              onChange: toggle,
              disabled: isSubmitting,
              className: "sr-only"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: `flex items-center justify-center w-4 h-4 rounded-sm border-2 shrink-0 mt-0.5 transition-colors duration-150 ${selected ? "border-[var(--color-growth-signal)] bg-[var(--color-growth-signal)]" : "border-[rgba(26,28,41,0.3)]"}`,
              "aria-hidden": "true",
              children: selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                className: "w-2.5 h-2.5 text-[var(--color-midnight-logic)]",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "3.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                  points: "20 6 9 17 4 12"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-[13px] font-medium text-[var(--color-midnight-logic)] leading-snug",
              children: opt
            })]
          }, opt);
        })
      }), errors.biggest_growth_challenge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "mt-1 text-[11px] text-red-600 font-medium",
        children: errors.biggest_growth_challenge
      }), challengeIncludesOther && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mt-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
          value: form.growth_challenge__other,
          onChange: e => update("growth_challenge__other", e.target.value),
          disabled: isSubmitting,
          rows: 2,
          placeholder: "Describe your biggest growth challenge in your own words\u2026",
          className: `${inputClass} resize-none`,
          maxLength: 500
        }), errors.growth_challenge__other && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "mt-1 text-[11px] text-red-600 font-medium",
          children: errors.growth_challenge__other
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "mt-0.5 text-[10px] text-[var(--color-metric-steel)]/70 text-right",
          children: [form.growth_challenge__other.length, "/500"]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Field, {
        label: "Message",
        required: true,
        error: errors.message,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
          value: form.message,
          onChange: e => update("message", e.target.value),
          disabled: isSubmitting,
          rows: 3,
          placeholder: "Tell us what you're working on. We'll get back within one business day.",
          className: `${inputClass} resize-none`,
          maxLength: 2000
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-4 pt-4 border-t border-[rgba(26,28,41,0.08)]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        className: "flex items-start gap-2.5 cursor-pointer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "checkbox",
          checked: form.consent,
          onChange: e => update("consent", e.target.checked),
          disabled: isSubmitting,
          className: "mt-0.5 w-4 h-4 rounded-sm cursor-pointer",
          style: {
            accentColor: "var(--color-growth-signal)"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
          className: "text-[11px] text-[var(--color-metric-steel)] leading-snug",
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
        className: "mt-1 text-[11px] text-red-600 font-medium",
        children: errors.consent
      })]
    }), status === "error" && errorMsg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-sm",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-[12px] text-red-700 font-medium leading-snug",
        children: errorMsg
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        className: "text-[10px] text-[var(--color-metric-steel)]/65 leading-snug max-w-xs",
        children: ["Protected by reCAPTCHA. Google's", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "https://policies.google.com/privacy",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline hover:text-[var(--color-growth-signal)] transition-colors",
          children: "Privacy Policy"
        }), " ", "and", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "https://policies.google.com/terms",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline hover:text-[var(--color-growth-signal)] transition-colors",
          children: "Terms of Service"
        }), " ", "apply."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        type: "submit",
        disabled: isSubmitting,
        className: "group inline-flex items-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-6 py-3 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 disabled:opacity-55 disabled:cursor-not-allowed transition-all duration-200 min-w-[180px] justify-center",
        children: isSubmitting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            className: "w-4 h-4 animate-spin",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            "aria-hidden": "true",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M21 12a9 9 0 1 1-6.219-8.56",
              strokeLinecap: "round"
            })
          }), "Sending\u2026"]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: ["Submit", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
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
      })]
    })]
  });
}

// ─── Custom select with brand dropdown arrow ─────────────────────────────
function SelectInput({
  value,
  onChange,
  options,
  disabled,
  placeholder
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
      value: value,
      onChange: e => onChange(e.target.value),
      disabled: disabled,
      className: `${inputClass} pr-9 cursor-pointer appearance-none bg-no-repeat`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: "",
        disabled: true,
        children: placeholder || "Select…"
      }), options.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
        value: opt,
        children: opt
      }, opt))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      className: "absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--color-midnight-logic)] pointer-events-none",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
        points: "6 9 12 15 18 9"
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

// TikTok — official simplified mark
const TikTokIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.36a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.4z"
  })
});

// Better Business Bureau — Daniel's SVG, currentColor
const BBBIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 50 50",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M 9.2832031 4 C 7.488935 4 5.9052102 5.2051958 5.4277344 6.9355469 L 2 19.365234 L 2 19.5 C 2 23.078268 4.9217323 26 8.5 26 C 10.813035 26 12.845511 24.77516 13.998047 22.945312 C 15.146939 24.778014 17.180833 26 19.5 26 C 21.819167 26 23.853061 24.778014 25.001953 22.945312 C 26.154489 24.77516 28.186965 26 30.5 26 C 32.813993 26 34.847721 24.77447 36 22.943359 C 37.152279 24.77447 39.186007 26 41.5 26 C 45.078268 26 48 23.078268 48 19.5 L 48 19.365234 L 44.570312 6.9355469 C 44.092963 5.2056548 42.509782 4 40.714844 4 L 9.2832031 4 z M 9.2832031 6 L 14.851562 6 L 13.197266 18 L 4.4511719 18 L 7.3554688 7.46875 C 7.5959929 6.597101 8.3794712 6 9.2832031 6 z M 26 6 L 33.128906 6 L 34.783203 18 L 26 18 L 26 6 z M 15 18 L 24 18 L 24 19.5 C 24 19.668891 24.012611 19.834272 24.025391 20 L 15 20 L 15 19.5 L 15 18 z M 36.802734 18 L 45.548828 18 L 45.984375 19.580078 C 45.981749 19.724009 45.951091 19.859765 45.935547 20 L 37.050781 20 C 37.032383 19.833631 37 19.67153 37 19.5 L 37 19.431641 L 36.802734 18 z M 4.0644531 20 L 12.949219 20 C 12.699714 22.256206 10.826202 24 8.5 24 C 6.175282 24 4.3143567 22.254621 4.0644531 20 z M 26.099609 20 L 34.900391 20 C 34.642986 22.247621 32.820142 24 30.5 24 C 28.179858 24 26.357014 22.247621 26.099609 20 z M 14 25.974609 C 12.517 27.235609 10.599 28 8.5 28 C 6.845 28 5.306 27.519172 4 26.701172 L 4 43 C 4 44.654 5.346 46 7 46 L 43 46 C 44.654 46 46 44.654 46 43 L 46 26.701172 C 44.694 27.519172 43.155 28 41.5 28 C 39.401 28 37.483 27.235609 36 25.974609 C 34.517 27.235609 32.599 28 30.5 28 C 28.401 28 26.483 27.235609 25 25.974609 C 23.517 27.235609 21.599 28 19.5 28 C 17.401 28 15.483 27.235609 14 25.974609 z M 35.5 29 C 37.546 29 39.372453 29.952547 40.564453 31.435547 L 39.132812 32.867188 C 38.314813 31.740187 36.996 31 35.5 31 C 33.019 31 31 33.019 31 35.5 C 31 37.981 33.019 40 35.5 40 C 37.453 40 39.102609 38.742 39.724609 37 L 36 37 L 36 35 L 41.974609 35 C 41.986609 35.166 42 35.331 42 35.5 C 42 39.084 39.084 42 35.5 42 C 31.916 42 29 39.084 29 35.5 C 29 31.916 31.916 29 35.5 29 z"
  })
});

// Google My Business — Daniel's SVG, currentColor
const GMBIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 30 30",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M11.166 20.194c.806.577 2.809 1.923 3.222 2.358.412.435.023 1.099.023 1.099l.618.252c.137-.298.962-1.397 1.511-2.084.496-.62.926-1.706.941-2.503.047-2.572-3.367-3.794-4.949-5.237-.778-.71-.16-1.122-.16-1.122l-.527-.343C9.808 14.926 7.662 17.686 11.166 20.194zM12.922 11.605c1.969 1.74 5.435 3.548 5.679 4.717.318 1.523-.412 2.382-.412 2.382l.394.321c.213-.304.451-.591.67-.891.892-1.222 1.752-2.463 2.629-3.695 2.004-2.818 1.254-5.49-1.765-7.648-1.537-1.098-3.032-2.26-4.584-3.339-.871-.733-.275-2.107-.275-2.107l-.367-.32c0 0-3.286 3.984-3.573 5.588C11.045 8.148 10.953 9.865 12.922 11.605zM23 27L22.341 25 7.659 25 7 27 11.19 27 11.822 29 18.217 29 18.816 27z"
  })
});

// BBB Accredited Business badge — animated pill (uses .bbb-pulse / .bbb-shine
// keyframes defined in src/index.css). Reuses the BBB mark in a lime ring.
const BBBAccreditedBadge = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
  href: "https://www.bbb.org/us/ca/irvine/profile/marketing-consultant/828-marketing-solutions-llc-1126-1000164367",
  target: "_blank",
  rel: "noopener noreferrer",
  "aria-label": "828 Marketing Solutions is a Better Business Bureau Accredited Business",
  className: "bbb-shine group relative inline-flex items-center gap-3 mt-6 pl-2.5 pr-4 py-2 rounded-full bg-white/[0.06] border border-white/15 overflow-hidden hover:border-[var(--color-growth-signal)]/60 transition-colors duration-200",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    className: "bbb-pulse flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] shrink-0",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      className: "w-5 h-5",
      viewBox: "0 0 50 50",
      fill: "currentColor",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M 9.2832031 4 C 7.488935 4 5.9052102 5.2051958 5.4277344 6.9355469 L 2 19.365234 L 2 19.5 C 2 23.078268 4.9217323 26 8.5 26 C 10.813035 26 12.845511 24.77516 13.998047 22.945312 C 15.146939 24.778014 17.180833 26 19.5 26 C 21.819167 26 23.853061 24.778014 25.001953 22.945312 C 26.154489 24.77516 28.186965 26 30.5 26 C 32.813993 26 34.847721 24.77447 36 22.943359 C 37.152279 24.77447 39.186007 26 41.5 26 C 45.078268 26 48 23.078268 48 19.5 L 48 19.365234 L 44.570312 6.9355469 C 44.092963 5.2056548 42.509782 4 40.714844 4 L 9.2832031 4 z M 9.2832031 6 L 14.851562 6 L 13.197266 18 L 4.4511719 18 L 7.3554688 7.46875 C 7.5959929 6.597101 8.3794712 6 9.2832031 6 z M 26 6 L 33.128906 6 L 34.783203 18 L 26 18 L 26 6 z M 15 18 L 24 18 L 24 19.5 C 24 19.668891 24.012611 19.834272 24.025391 20 L 15 20 L 15 19.5 L 15 18 z M 36.802734 18 L 45.548828 18 L 45.984375 19.580078 C 45.981749 19.724009 45.951091 19.859765 45.935547 20 L 37.050781 20 C 37.032383 19.833631 37 19.67153 37 19.5 L 37 19.431641 L 36.802734 18 z M 4.0644531 20 L 12.949219 20 C 12.699714 22.256206 10.826202 24 8.5 24 C 6.175282 24 4.3143567 22.254621 4.0644531 20 z M 26.099609 20 L 34.900391 20 C 34.642986 22.247621 32.820142 24 30.5 24 C 28.179858 24 26.357014 22.247621 26.099609 20 z M 14 25.974609 C 12.517 27.235609 10.599 28 8.5 28 C 6.845 28 5.306 27.519172 4 26.701172 L 4 43 C 4 44.654 5.346 46 7 46 L 43 46 C 44.654 46 46 44.654 46 43 L 46 26.701172 C 44.694 27.519172 43.155 28 41.5 28 C 39.401 28 37.483 27.235609 36 25.974609 C 34.517 27.235609 32.599 28 30.5 28 C 28.401 28 26.483 27.235609 25 25.974609 C 23.517 27.235609 21.599 28 19.5 28 C 17.401 28 15.483 27.235609 14 25.974609 z M 35.5 29 C 37.546 29 39.372453 29.952547 40.564453 31.435547 L 39.132812 32.867188 C 38.314813 31.740187 36.996 31 35.5 31 C 33.019 31 31 33.019 31 35.5 C 31 37.981 33.019 40 35.5 40 C 37.453 40 39.102609 38.742 39.724609 37 L 36 37 L 36 35 L 41.974609 35 C 41.986609 35.166 42 35.331 42 35.5 C 42 39.084 39.084 42 35.5 42 C 31.916 42 29 39.084 29 35.5 C 29 31.916 31.916 29 35.5 29 z"
      })
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
    className: "flex flex-col leading-tight",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "font-display font-bold text-[13px] text-white tracking-tight",
      children: "BBB Accredited Business"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "text-[10px] font-body uppercase tracking-[0.12em] text-white/55",
      children: "Better Business Bureau"
    })]
  })]
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
  label: "Facebook",
  href: "https://www.facebook.com/828MarketingSolutions",
  Icon: FacebookIcon
}, {
  label: "Instagram",
  href: "https://www.instagram.com/828marketingsolutions/",
  Icon: InstagramIcon
}, {
  label: "TikTok",
  href: "https://www.tiktok.com/@828marketingsolutions",
  Icon: TikTokIcon
},
// TODO: real TikTok URL
{
  label: "BBB",
  href: "https://www.google.com/search?sca_esv=eb783835d62ec6f7&kgmid=/g/11whx4fjg4&q=828+MARKETING+SOLUTIONS&shem=bdsle,ptotplc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=c3675c43ba2b071a&utm_source=bdsle,ptotplc,shrtsdl,sh/x/loc/uni/m1/1",
  Icon: BBBIcon
},
// TODO: real Better Business Bureau URL
{
  label: "GMB",
  href: "https://www.bbb.org/us/ca/irvine/profile/marketing-consultant/828-marketing-solutions-llc-1126-1000164367",
  Icon: GMBIcon
} // TODO: real Google My Business URL
];
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BBBAccreditedBadge, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
            className: "flex items-center gap-1.5 mt-3 text-[11px] font-body uppercase tracking-[0.1em] text-white/55",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              className: "w-3.5 h-3.5 text-[var(--color-growth-signal)] shrink-0",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              "aria-hidden": "true",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
                cx: "12",
                cy: "10",
                r: "3"
              })]
            }), "Serving all 50 states"]
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
              children: "info@828marketingsolutions.com"
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
   828 NAVBAR v2-Final — per brief Section 5.2 + Daniel's topbar override
   ─────────────────────────────────────────────────────────────────────────
   Structure:
     - Topbar (above navbar): Midnight Logic bg, white text.
       Left: geotag + email + phone (clickable). Right: social icons.
       Hidden on mobile. Disappears on scroll down (only the navbar stays sticky).
     - Navbar (below topbar): white bg, sticky.
       5 nav items + EN/ES toggle + Growth Signal CTA.
   ═══════════════════════════════════════════════════════════════════════════ */

const NAV_ITEMS = [{
  label: "Home",
  href: "/"
}, {
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

// Google Maps link to the Irvine office (reused across footer + contact)
const MAPS_URL = "https://maps.app.goo.gl/F2Ym733cgFKYhkka6";
const GEOTAG_LABEL = "Serving Orange County & Beyond";
const SOCIALS = [{
  label: "Facebook",
  href: "https://www.facebook.com/828MarketingSolutions"
}, {
  label: "Instagram",
  href: "https://www.instagram.com/828marketingsolutions/"
}, {
  label: "TikTok",
  href: "https://www.tiktok.com/@828marketingsolutions"
},
// TODO: replace with real TikTok URL
{
  label: "BBB",
  href: "https://www.google.com/search?sca_esv=eb783835d62ec6f7&kgmid=/g/11whx4fjg4&q=828+MARKETING+SOLUTIONS&shem=bdsle,ptotplc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=c3675c43ba2b071a&utm_source=bdsle,ptotplc,shrtsdl,sh/x/loc/uni/m1/1"
},
// TODO: replace with real Better Business Bureau URL
{
  label: "GMB",
  href: "https://www.bbb.org/us/ca/irvine/profile/marketing-consultant/828-marketing-solutions-llc-1126-1000164367"
} // TODO: replace with real Google My Business URL
];

// ─── Icon components ───────────────────────────────────────────────────────
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
const MailIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  className: "w-3.5 h-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
    points: "22,6 12,13 2,6"
  })]
});
const PhoneIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-3.5 h-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })
});

// Map pin marker for the geotag
const MapPinIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  className: "w-3.5 h-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })]
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

// TikTok — official simplified mark (musical note silhouette)
const TikTokIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.36a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.4z"
  })
});

// Better Business Bureau — simplified torch/flame shield mark (Daniel's SVG, currentColor)
const BBBIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 50 50",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M 9.2832031 4 C 7.488935 4 5.9052102 5.2051958 5.4277344 6.9355469 L 2 19.365234 L 2 19.5 C 2 23.078268 4.9217323 26 8.5 26 C 10.813035 26 12.845511 24.77516 13.998047 22.945312 C 15.146939 24.778014 17.180833 26 19.5 26 C 21.819167 26 23.853061 24.778014 25.001953 22.945312 C 26.154489 24.77516 28.186965 26 30.5 26 C 32.813993 26 34.847721 24.77447 36 22.943359 C 37.152279 24.77447 39.186007 26 41.5 26 C 45.078268 26 48 23.078268 48 19.5 L 48 19.365234 L 44.570312 6.9355469 C 44.092963 5.2056548 42.509782 4 40.714844 4 L 9.2832031 4 z M 9.2832031 6 L 14.851562 6 L 13.197266 18 L 4.4511719 18 L 7.3554688 7.46875 C 7.5959929 6.597101 8.3794712 6 9.2832031 6 z M 26 6 L 33.128906 6 L 34.783203 18 L 26 18 L 26 6 z M 15 18 L 24 18 L 24 19.5 C 24 19.668891 24.012611 19.834272 24.025391 20 L 15 20 L 15 19.5 L 15 18 z M 36.802734 18 L 45.548828 18 L 45.984375 19.580078 C 45.981749 19.724009 45.951091 19.859765 45.935547 20 L 37.050781 20 C 37.032383 19.833631 37 19.67153 37 19.5 L 37 19.431641 L 36.802734 18 z M 4.0644531 20 L 12.949219 20 C 12.699714 22.256206 10.826202 24 8.5 24 C 6.175282 24 4.3143567 22.254621 4.0644531 20 z M 26.099609 20 L 34.900391 20 C 34.642986 22.247621 32.820142 24 30.5 24 C 28.179858 24 26.357014 22.247621 26.099609 20 z M 14 25.974609 C 12.517 27.235609 10.599 28 8.5 28 C 6.845 28 5.306 27.519172 4 26.701172 L 4 43 C 4 44.654 5.346 46 7 46 L 43 46 C 44.654 46 46 44.654 46 43 L 46 26.701172 C 44.694 27.519172 43.155 28 41.5 28 C 39.401 28 37.483 27.235609 36 25.974609 C 34.517 27.235609 32.599 28 30.5 28 C 28.401 28 26.483 27.235609 25 25.974609 C 23.517 27.235609 21.599 28 19.5 28 C 17.401 28 15.483 27.235609 14 25.974609 z M 35.5 29 C 37.546 29 39.372453 29.952547 40.564453 31.435547 L 39.132812 32.867188 C 38.314813 31.740187 36.996 31 35.5 31 C 33.019 31 31 33.019 31 35.5 C 31 37.981 33.019 40 35.5 40 C 37.453 40 39.102609 38.742 39.724609 37 L 36 37 L 36 35 L 41.974609 35 C 41.986609 35.166 42 35.331 42 35.5 C 42 39.084 39.084 42 35.5 42 C 31.916 42 29 39.084 29 35.5 C 29 31.916 31.916 29 35.5 29 z"
  })
});

// Google My Business — map pin marker (Daniel's SVG, currentColor)
const GMBIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 30 30",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M11.166 20.194c.806.577 2.809 1.923 3.222 2.358.412.435.023 1.099.023 1.099l.618.252c.137-.298.962-1.397 1.511-2.084.496-.62.926-1.706.941-2.503.047-2.572-3.367-3.794-4.949-5.237-.778-.71-.16-1.122-.16-1.122l-.527-.343C9.808 14.926 7.662 17.686 11.166 20.194zM12.922 11.605c1.969 1.74 5.435 3.548 5.679 4.717.318 1.523-.412 2.382-.412 2.382l.394.321c.213-.304.451-.591.67-.891.892-1.222 1.752-2.463 2.629-3.695 2.004-2.818 1.254-5.49-1.765-7.648-1.537-1.098-3.032-2.26-4.584-3.339-.871-.733-.275-2.107-.275-2.107l-.367-.32c0 0-3.286 3.984-3.573 5.588C11.045 8.148 10.953 9.865 12.922 11.605zM23 27L22.341 25 7.659 25 7 27 11.19 27 11.822 29 18.217 29 18.816 27z"
  })
});
const FacebookIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  className: "w-4 h-4",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
  })
});
const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  BBB: BBBIcon,
  GMB: GMBIcon
};

// ─── Component ─────────────────────────────────────────────────────────────
function Navbar({
  logoUrl,
  homeUrl = "/"
}) {
  const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("EN");

  // Topbar disappears when user scrolls past its height (~40px).
  // We use 8px as the trigger to give it a slight bit of resilience.
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
  const setLanguage = next => setLang(next);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `block bg-[var(--color-midnight-logic)] text-white overflow-hidden transition-all duration-300 ${scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}`,
      "aria-hidden": scrolled,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "max-w-7xl mx-auto px-5 sm:px-8 lg:px-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center justify-center lg:grid lg:grid-cols-3 lg:items-center h-10 text-[12px]",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "hidden lg:flex items-center gap-6 lg:justify-self-start",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "mailto:info@828marketingsolutions.com",
              className: "flex items-center gap-2 text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MailIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                children: "info@828marketingsolutions.com"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "tel:+19497755940",
              className: "flex items-center gap-2 text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PhoneIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                children: "+1 (949) 775-5940"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "hidden lg:flex items-center lg:justify-self-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: MAPS_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-2 text-white/85 hover:text-[var(--color-growth-signal)] transition-colors duration-150",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MapPinIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                children: GEOTAG_LABEL
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "flex items-center gap-5 lg:gap-4 lg:justify-self-end",
            children: SOCIALS.map(({
              label,
              href
            }) => {
              const Icon = SOCIAL_ICONS[label];
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                href: href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": label,
                className: "text-white/70 hover:text-[var(--color-growth-signal)] transition-colors duration-150",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {})
              }, label);
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
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
              children: ["BUILD MY GROWTH PLAN", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
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
              className: "mt-4 pt-4 px-2 border-t border-[rgba(26,28,41,0.1)] space-y-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: MAPS_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 text-sm text-[var(--color-midnight-logic)] hover:text-[var(--color-growth-signal)]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MapPinIcon, {}), " ", GEOTAG_LABEL]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: "mailto:manuel@828marketingsolutions.com",
                className: "flex items-center gap-2 text-sm text-[var(--color-midnight-logic)] hover:text-[var(--color-growth-signal)]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MailIcon, {}), " info@828marketingsolutions.com"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: "tel:+19497755940",
                className: "flex items-center gap-2 text-sm text-[var(--color-midnight-logic)] hover:text-[var(--color-growth-signal)]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PhoneIcon, {}), " +1 (949) 775-5940"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
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
              children: ["BUILD MY GROWTH PLAN", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ArrowRight, {})]
            })]
          })
        })]
      })
    })]
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
/* harmony import */ var _scripts_Chatbot828__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Chatbot828 */ "./src/scripts/Chatbot828.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







/* ═══════════════════════════════════════════════════════════════════════════
   828 entrypoint v2-Final
   ─────────────────────────────────────────────────────────────────────────
   React mounts:
     - Navbar (every page, via #render-navbar-here)
     - Footer (every page, via #render-footer-here)
     - ContactForm (instance per .render-contact-form element)
     - Chatbot828 (every page, auto-mounts as FAB into #render-chatbot-here)
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── Navbar mount ───────────────────────────────────────────────────────────

const navbarEl = document.querySelector("#render-navbar-here");
if (navbarEl) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_5___default().createRoot(navbarEl);
  const logoUrl = navbarEl.dataset.logoUrl || "";
  const homeUrl = navbarEl.dataset.homeUrl || "/";
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    logoUrl: logoUrl,
    homeUrl: homeUrl
  }));
}

// ─── Footer mount ───────────────────────────────────────────────────────────
const footerEl = document.querySelector("#render-footer-here");
if (footerEl) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_5___default().createRoot(footerEl);
  const logoUrl = footerEl.dataset.logoUrl || "";
  const bgUrl = footerEl.dataset.bgUrl || "";
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    logoUrl: logoUrl,
    bgUrl: bgUrl
  }));
}

// ─── ContactForm mounts (any number per page) ───────────────────────────────
document.querySelectorAll(".render-contact-form").forEach(el => {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_5___default().createRoot(el);
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_ContactForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
});

// ─── Chatbot828 mount ───────────────────────────────────────────────────────
const chatbotEl = document.querySelector("#render-chatbot-here");
if (chatbotEl) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_5___default().createRoot(chatbotEl);
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Chatbot828__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map