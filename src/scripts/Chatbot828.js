import React, { useEffect, useMemo, useRef, useState } from "react"

/* ═══════════════════════════════════════════════════════════════════════════
   828 CHATBOT — Hardcoded responses, no API
   ─────────────────────────────────────────────────────────────────────────
   - Adapted from Imvera Group reference component
   - Brand: Midnight Logic + Growth Signal lime, Helvetica + Nebulica
   - Bilingual EN/ES via simple language detection on user input
   - Responses cover: 5-Phase Ecosystem, case studies, industries, contact
   ═══════════════════════════════════════════════════════════════════════════ */

// ── Config ────────────────────────────────────────────────────
const PHONE_DISPLAY = "+1 (949) 775-5940"
const PHONE_LINK    = "tel:+19497755940"
const EMAIL_DISPLAY = "manuel@828marketingsolutions.com"
const EMAIL_LINK    = "mailto:manuel@828marketingsolutions.com"
const CONTACT_LINK  = "/contact"
const CASES_LINK    = "/case-studies"
const HOW_LINK      = "/how-we-work"
const ABOUT_LINK    = "/about"
const INDUSTRIES_LINK = "/industries"

// ── Icons ─────────────────────────────────────────────────────
function BotIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3C8.134 3 5 6.134 5 10v2.2c0 .53-.21 1.04-.586 1.414L3 15h18l-1.414-1.386A2 2 0 0 1 19 12.2V10c0-3.866-3.134-7-7-7Z"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 18c.4 1.2 1.5 2 3 2s2.6-.8 3-2"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.25" cy="10.25" r="1" fill="currentColor" />
      <circle cx="14.75" cy="10.25" r="1" fill="currentColor" />
    </svg>
  )
}

function CloseIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}

function SendIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 3L10 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 3L14 21L10 14L3 10L21 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 16.2V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.8a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.58 1.72l-1.2 1.2a16 16 0 0 0 5.4 5.4l1.2-1.2a2 2 0 0 1 1.72-.58l2.66.38A2 2 0 0 1 21 16.2Z"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5H19V10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L19 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 14V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H10"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Language detection ───────────────────────────────────────
// Simple Spanish detector: looks for common Spanish words/chars
function isSpanish(text) {
  const t = text.toLowerCase()
  const spanishWords = [
    "hola", "buenos", "buenas", "qué", "que", "cómo", "como", "cuál", "cual",
    "donde", "dónde", "cuándo", "cuando", "por qué", "porque", "necesito",
    "quiero", "tienen", "tiene", "ofrecen", "ayuda", "ayúdame", "ayudame",
    "información", "informacion", "precio", "costo", "cuanto", "cuánto",
    "español", "espanol", "negocio", "empresa", "marketing", "estrategia",
    "servicio", "servicios", "agencia", "puedo", "podría", "podria",
    "gracias", "favor", "sí", "ñ"
  ]
  return spanishWords.some(w => t.includes(w)) || /[ñáéíóúü¿¡]/.test(t)
}

// ── Bot logic ─────────────────────────────────────────────────
function msg(text, links = []) {
  return { id: Date.now() + Math.random(), text, sender: "bot", timestamp: new Date(), links }
}

function getBotResponse(rawInput) {
  const i = rawInput.toLowerCase()
  const es = isSpanish(rawInput)

  // ─── 5-Phase Ecosystem (general) ───────────────────────────
  if (i.includes("5-phase") || i.includes("5 phase") || i.includes("ecosystem") ||
      i.includes("ecosistema") || i.includes("5 fase") || i.includes("cinco fase") ||
      i.includes("how do you work") || i.includes("how does it work") ||
      i.includes("como trabajan") || i.includes("cómo trabajan") || i.includes("proceso")) {
    return msg(
      es
        ? "El 828 5-Phase Ecosystem es nuestra respuesta a la pregunta '¿cómo hacemos que el mercado te vea?'. Cinco fases secuenciales: 01 Intelligence (diagnóstico), 02 Brand (identidad), 03 Website (sitio web), 04 Presence (presencia digital diaria), 05 Acceleration (paid ads). La mayoría de clientes empiezan con la Phase 1 — el Industry Intelligence Report — porque es el diagnóstico antes del tratamiento."
        : "The 828 5-Phase Ecosystem is our answer to one question: 'How do we make the market see you?' Five sequential phases: 01 Intelligence (diagnostic), 02 Brand (identity), 03 Website, 04 Presence (daily visibility), 05 Acceleration (paid ads). Most clients start with Phase 1 — the Industry Intelligence Report — because it's the diagnosis before the treatment.",
      [
        { label: es ? "Cómo trabajamos" : "How We Work", href: HOW_LINK },
        { label: es ? "Agendar consulta" : "Book a Strategy Call", href: CONTACT_LINK },
      ]
    )
  }

  // ─── Phase 1 / Intelligence Report ─────────────────────────
  if (i.includes("phase 1") || i.includes("fase 1") || i.includes("intelligence") ||
      i.includes("inteligencia") || i.includes("report") || i.includes("reporte") ||
      i.includes("diagnostic") || i.includes("diagnostico") || i.includes("diagnóstico")) {
    return msg(
      es
        ? "El Industry Intelligence Report (Phase 1) es nuestro punto de entrada. Es un análisis estratégico de tu industria, tu competencia, y por qué el mercado no te está viendo aún. La mayoría de clientes empiezan acá — algunos solo necesitan esto para corregir el rumbo internamente. Otros descubren que necesitan 2, 3, o las cinco fases. El reporte nos dice qué está roto — y en qué orden arreglarlo."
        : "The Industry Intelligence Report (Phase 1) is our diagnostic gate. It's a strategic analysis of your industry, competition, and exactly why the market isn't seeing you yet. Most clients start here — some only need Phase 1 to course-correct internally. Others discover they need 2, 3, or all five phases. The report tells us what's broken — and the order to fix it.",
      [
        { label: es ? "Cómo trabajamos" : "How We Work", href: HOW_LINK },
        { label: es ? "Agendar consulta" : "Book a Strategy Call", href: CONTACT_LINK },
      ]
    )
  }

  // ─── Case Studies / Results ────────────────────────────────
  if (i.includes("case stud") || i.includes("caso") || i.includes("results") ||
      i.includes("resultado") || i.includes("clients") || i.includes("clientes") ||
      i.includes("portfolio") || i.includes("examples") || i.includes("ejemplos") ||
      i.includes("transformation") || i.includes("transformacion") || i.includes("transformación")) {
    return msg(
      es
        ? "Tenemos 8 transformaciones reales documentadas: restaurantes, contratistas de paisajismo, limpieza comercial, tortillerías B2B, wellness, drywall, y techos. Todas las métricas en USD. Por ejemplo: un restaurante de Orange County logró 225 conversiones en 90 días a $19.59 por lead. Un landscape contractor del Inland Empire: 45 conversiones a $97.48 CPL en mercado hipercompetitivo. Mirá los 8 cases completos en la página de Case Studies."
        : "We have 8 documented real transformations: restaurants, landscape contractors, commercial cleaning, B2B tortilleria, wellness, drywall, and roofing. All metrics in USD. For example: an OC restaurant achieved 225 conversions in 90 days at $19.59 CPL. An Inland Empire landscape contractor: 45 conversions at $97.48 CPL in a hyper-competitive market. See all 8 cases on the Case Studies page.",
      [
        { label: es ? "Ver casos de estudio" : "View Case Studies", href: CASES_LINK },
        { label: es ? "Agendar consulta" : "Book a Strategy Call", href: CONTACT_LINK },
      ]
    )
  }

  // ─── Industries ────────────────────────────────────────────
  if (i.includes("industr") || i.includes("rubro") || i.includes("sector") ||
      i.includes("vertical") || i.includes("nicho") || i.includes("niche") ||
      i.includes("restaurant") || i.includes("restaurante") ||
      i.includes("trades") || i.includes("contratista") || i.includes("contractor") ||
      i.includes("healthcare") || i.includes("salud") ||
      i.includes("tax") || i.includes("impuesto") ||
      i.includes("cleaning") || i.includes("limpieza") ||
      i.includes("retail") || i.includes("wholesale") || i.includes("manufactur") ||
      i.includes("beauty") || i.includes("wellness") || i.includes("belleza") || i.includes("bienestar")) {
    return msg(
      es
        ? "Trabajamos con 8 categorías de industria: Home Services & Trades, Restaurants & Food, Beauty & Wellness, Janitorial & Commercial, Retail/Wholesale/Manufacturing, Financial/Tax/Accounting, Healthcare & Specialty, y Professional Services & B2B. Pero 828 no segmenta por industria — segmentamos por emoción. La misma frase nos une: 'construí algo real, y el mercado no lo está viendo'."
        : "We work across 8 industry categories: Home Services & Trades, Restaurants & Food, Beauty & Wellness, Janitorial & Commercial, Retail/Wholesale/Manufacturing, Financial/Tax/Accounting, Healthcare & Specialty, and Professional Services & B2B. But 828 doesn't segment by industry — we segment by emotion. The same sentence connects them all: 'I built something real, and the market isn't seeing it.'",
      [
        { label: es ? "Ver industrias" : "View Industries", href: INDUSTRIES_LINK },
        { label: es ? "Agendar consulta" : "Book a Strategy Call", href: CONTACT_LINK },
      ]
    )
  }

  // ─── Pricing ───────────────────────────────────────────────
  if (i.includes("price") || i.includes("pricing") || i.includes("cost") ||
      i.includes("precio") || i.includes("costo") || i.includes("cuanto") || i.includes("cuánto") ||
      i.includes("how much") || i.includes("fee") || i.includes("tarifa")) {
    return msg(
      es
        ? "No publicamos precios en el sitio. Cada operación es distinta — un restaurante de 30 cubiertos, uno multi-local, y un contratista de 50 personas necesitan scopes diferentes. Empezamos siempre con Phase 1 (el diagnóstico), y de ahí cotizamos basados en lo que realmente necesitás. Sin paquetes genéricos."
        : "We don't post pricing on the site. Every operation is different — a 30-seat restaurant, a multi-location group, and a 50-person contractor each need different scopes. We always start with Phase 1 (the diagnosis), then quote based on what you actually need. No generic packages.",
      [
        { label: es ? "Agendar consulta" : "Book a Strategy Call", href: CONTACT_LINK },
        { label: es ? "Cómo trabajamos" : "How We Work", href: HOW_LINK },
      ]
    )
  }

  // ─── Bilingual / Hispanic market ───────────────────────────
  if (i.includes("spanish") || i.includes("español") || i.includes("espanol") ||
      i.includes("hispanic") || i.includes("hispano") || i.includes("latino") || i.includes("latina") ||
      i.includes("bilingual") || i.includes("bilingüe") || i.includes("bilingue")) {
    return msg(
      es
        ? "Sí — 828 es una agencia bilingüe especializada en el mercado hispano. Cada estrategia, campaña, y reporte funciona en ambos idiomas. La mayoría de nuestros clientes tienen staff y clientes bilingües — nosotros igualamos esa realidad. 'Conectamos inteligencia con intención' en ambos idiomas."
        : "Yes — 828 is a bilingual agency specialized in the Hispanic market. Every strategy, campaign, and report works in both languages. Most of our clients have bilingual staff and bilingual customers — we match that reality. 'Connecting Intelligence with Intention' in both languages.",
      [
        { label: es ? "Sobre 828" : "About 828", href: ABOUT_LINK },
        { label: es ? "Agendar consulta" : "Book a Strategy Call", href: CONTACT_LINK },
      ]
    )
  }

  // ─── Contact / How to reach ────────────────────────────────
  if (i.includes("contact") || i.includes("contacto") || i.includes("phone") || i.includes("teléfono") || i.includes("telefono") ||
      i.includes("email") || i.includes("correo") || i.includes("call") || i.includes("llamar") ||
      i.includes("reach") || i.includes("alcanzar") || i.includes("book") || i.includes("agendar") ||
      i.includes("schedule") || i.includes("programa") || i.includes("meeting") || i.includes("reunión") || i.includes("reunion")) {
    return msg(
      es
        ? "Podés agendar una consulta de 30 minutos sin compromiso vía TidyCal en nuestra página de contacto, o llamarnos directamente. Sin pitch, sin relleno — solo el diagnóstico."
        : "You can book a free 30-minute strategy call via TidyCal on our contact page, or call us directly. No pitch, no fluff — just the diagnosis.",
      [
        { label: es ? "Agendar consulta" : "Book a Strategy Call", href: CONTACT_LINK },
        { label: PHONE_DISPLAY, href: PHONE_LINK },
      ]
    )
  }

  // ─── About / Who is 828 ────────────────────────────────────
  if (i.includes("about") || i.includes("who") || i.includes("quien") || i.includes("quién") ||
      i.includes("team") || i.includes("equipo") || i.includes("manuel") ||
      i.includes("history") || i.includes("historia") || i.includes("company") || i.includes("empresa") ||
      i.includes("agency") || i.includes("agencia")) {
    return msg(
      es
        ? "828 Marketing Solutions es una agencia liderada por Manuel Luna, basada en Irvine, CA. Existimos porque el mercado es más grande de lo que tu competencia se da cuenta. Trabajamos con operadores que ya construyeron algo real, pero el mercado no los está viendo todavía. Más detalle del equipo, la misión, y nuestras alianzas con líderes como Antonio Nava y Laura Elena Martinez en la página About."
        : "828 Marketing Solutions is an agency led by Manuel Luna, based in Irvine, CA. We exist because the market is bigger than your competition realizes. We work with operators who have built something real — but the market isn't seeing them yet. Full team, mission, and our authority anchors (Antonio Nava, Laura Elena Martinez) on the About page.",
      [
        { label: es ? "Sobre 828" : "About 828", href: ABOUT_LINK },
        { label: es ? "Agendar consulta" : "Book a Strategy Call", href: CONTACT_LINK },
      ]
    )
  }

  // ─── Greeting ──────────────────────────────────────────────
  if (i.includes("hello") || i.includes("hi ") || i === "hi" || i.includes("hey") ||
      i.includes("hola") || i.includes("buenas") || i.includes("buen dia") || i.includes("buen día")) {
    return msg(
      es
        ? "¡Hola! Soy el asistente de 828. Puedo ayudarte con info sobre nuestro 5-Phase Ecosystem, casos de estudio, industrias, o agendar una consulta. ¿Qué te trae por acá?"
        : "Hi! I'm the 828 assistant. I can help with info on our 5-Phase Ecosystem, case studies, industries, or booking a strategy call. What brings you here?",
      [
        { label: es ? "Cómo trabajamos" : "How We Work", href: HOW_LINK },
        { label: es ? "Ver casos" : "View Cases", href: CASES_LINK },
        { label: es ? "Agendar consulta" : "Book a Call", href: CONTACT_LINK },
      ]
    )
  }

  // ─── Default ───────────────────────────────────────────────
  return msg(
    es
      ? "Puedo ayudarte con info sobre el 5-Phase Ecosystem, casos de estudio, industrias, precios, o agendar una consulta estratégica. ¿Qué te interesa más?"
      : "I can help with info on the 5-Phase Ecosystem, case studies, industries, pricing, or booking a strategy call. What are you most interested in?",
    [
      { label: es ? "Agendar consulta" : "Book a Strategy Call", href: CONTACT_LINK },
      { label: es ? "Llamar" : "Call Us", href: PHONE_LINK },
    ]
  )
}

// ── Component ─────────────────────────────────────────────────
function Chatbot828() {
  const [isOpen,       setIsOpen]       = useState(false)
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping,     setIsTyping]     = useState(false)
  const [messages,     setMessages]     = useState([
    {
      id: 1,
      text: "Hi — I'm the 828 Strategy Assistant. I can help with our 5-Phase Ecosystem, case studies, industries, or booking a strategy call. Ask in English or Spanish.",
      sender: "bot",
      timestamp: new Date(),
      links: [
        { label: "How We Work", href: HOW_LINK },
        { label: "Book a Strategy Call", href: CONTACT_LINK },
      ]
    }
  ])

  const endRef = useRef(null)

  const quickActions = useMemo(() => [
    { text: "5-Phase Ecosystem",  num: "01" },
    { text: "Case Studies",       num: "02" },
    { text: "Industries",         num: "03" },
    { text: "Pricing",            num: "04" },
    { text: "Bilingual Services", num: "05" },
    { text: "Book a Call",        num: "06" },
  ], [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  function handleSend(e) {
    e?.preventDefault?.()
    if (!inputMessage.trim()) return
    const text = inputMessage.trim()
    setMessages(prev => [...prev, { id: Date.now(), text, sender: "user", timestamp: new Date() }])
    setInputMessage("")
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, getBotResponse(text)])
      setIsTyping(false)
    }, 650)
  }

  // Brand tokens (matched to index.css :root)
  const MIDNIGHT = "#1A1C29"
  const LIME     = "#A3CB37"
  const PAPER    = "#F7F8FA"
  const STEEL    = "#6D7A8A"

  return (
    <div className="fixed bottom-4 right-4 z-[9999] sm:bottom-5 sm:right-5">

      {/* ── Chat window ── */}
      {isOpen && (
        <div
          className="mb-3 flex h-[31rem] w-[calc(100vw-1.25rem)] max-w-[22rem] flex-col overflow-hidden rounded-[24px] sm:h-[33rem]"
          style={{
            boxShadow: "0 22px 50px rgba(26,28,41,0.28)",
            border: `1px solid rgba(26,28,41,0.12)`,
            background: PAPER,
            fontFamily: "var(--font-body)",
          }}
        >

          {/* Header */}
          <div
            className="relative overflow-hidden px-4 py-3 text-white"
            style={{
              background: `linear-gradient(135deg, ${MIDNIGHT} 0%, #1A1C29 50%, #093D62 130%)`,
              borderBottom: `1px solid rgba(255,255,255,0.08)`,
            }}
          >
            {/* Subtle circuit grid texture */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `linear-gradient(transparent 95%, ${LIME} 95%), linear-gradient(90deg, transparent 95%, ${LIME} 95%)`,
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: `rgba(163,203,55,0.15)`, border: `1px solid rgba(163,203,55,0.45)`, color: LIME }}
                >
                  <BotIcon className="h-5 w-5" />
                </div>
                <div>
                  <p
                    className="text-[10px] font-medium uppercase tracking-[0.18em]"
                    style={{ color: LIME, fontFamily: "var(--font-body)" }}
                  >
                    Connecting Intelligence with Intention
                  </p>
                  <h3
                    className="mt-1 text-[0.95rem] font-bold tracking-[-0.01em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    828 Strategy Assistant
                  </h3>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: LIME }} />
                    <p
                      className="text-[10px] font-medium uppercase tracking-[0.14em]"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      Online now
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full transition"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = MIDNIGHT }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff" }}
                aria-label="Close chat"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3" style={{ background: PAPER }}>
            <div className="space-y-3">
              {messages.map(message => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[88%] rounded-[18px] px-3.5 py-3 text-[0.875rem] leading-6"
                    style={message.sender === "user"
                      ? { background: MIDNIGHT, color: "#fff", borderRadius: "18px 18px 4px 18px", boxShadow: `0 2px 8px rgba(26,28,41,0.18)`, fontFamily: "var(--font-body)" }
                      : { background: "#fff", color: MIDNIGHT, borderRadius: "18px 18px 18px 4px", border: `1px solid rgba(26,28,41,0.08)`, boxShadow: `0 2px 6px rgba(26,28,41,0.06)`, fontFamily: "var(--font-body)" }
                    }
                  >
                    <p className="m-0">{message.text}</p>
                    {message.links?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.links.map(link => (
                          <a
                            key={`${message.id}-${link.href}`}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium transition"
                            style={{ background: PAPER, border: `1px solid rgba(26,28,41,0.1)`, color: MIDNIGHT }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.color = LIME }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(26,28,41,0.1)"; e.currentTarget.style.color = MIDNIGHT }}
                          >
                            <LinkIcon className="h-3.5 w-3.5" />
                            <span>{link.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="rounded-[18px] px-4 py-3"
                    style={{ background: "#fff", border: `1px solid rgba(26,28,41,0.08)`, borderRadius: "18px 18px 18px 4px", boxShadow: `0 2px 6px rgba(26,28,41,0.06)` }}
                  >
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: MIDNIGHT }} />
                      <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: LIME, animationDelay: "0.2s" }} />
                      <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: STEEL, animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>
          </div>

          {/* Quick actions (first message only) */}
          {messages.length === 1 && (
            <div className="border-t px-3 py-3" style={{ borderColor: `rgba(26,28,41,0.08)`, background: "#fff" }}>
              <p
                className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em]"
                style={{ color: LIME, fontFamily: "var(--font-body)" }}
              >
                Quick topics
              </p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map(action => (
                  <button
                    key={action.text}
                    type="button"
                    onClick={() => setInputMessage(action.text)}
                    className="rounded-full px-2.5 py-1.5 text-[11px] font-medium transition"
                    style={{ background: PAPER, border: `1px solid rgba(26,28,41,0.1)`, color: MIDNIGHT, fontFamily: "var(--font-body)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.background = "rgba(163,203,55,0.08)"; e.currentTarget.style.color = MIDNIGHT }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(26,28,41,0.1)"; e.currentTarget.style.background = PAPER; e.currentTarget.style.color = MIDNIGHT }}
                  >
                    <span className="mr-1" style={{ color: LIME, fontWeight: 700 }}>{action.num}</span>
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t p-3" style={{ borderColor: `rgba(26,28,41,0.08)`, background: "#fff" }}>
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                placeholder="Ask in English or Spanish…"
                className="min-w-0 flex-1 rounded-full px-4 py-2.5 text-sm outline-none transition"
                style={{ background: PAPER, border: `1px solid rgba(26,28,41,0.1)`, color: MIDNIGHT, fontFamily: "var(--font-body)" }}
                onFocus={e => { e.currentTarget.style.borderColor = LIME; e.currentTarget.style.background = "#fff" }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(26,28,41,0.1)"; e.currentTarget.style.background = PAPER }}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition"
                style={{ background: LIME, color: MIDNIGHT, boxShadow: `0 8px 20px rgba(163,203,55,0.4)` }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.85" }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1" }}
                aria-label="Send message"
              >
                <SendIcon className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] font-medium" style={{ color: "rgba(26,28,41,0.5)" }}>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-1.5 transition"
                onMouseEnter={e => e.currentTarget.style.color = LIME}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(26,28,41,0.5)"}
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={EMAIL_LINK}
                className="truncate transition"
                onMouseEnter={e => e.currentTarget.style.color = LIME}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(26,28,41,0.5)"}
              >
                {EMAIL_DISPLAY}
              </a>
            </div>
          </div>

        </div>
      )}

      {/* ── FAB button ── */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300"
        style={{
          background: isOpen ? MIDNIGHT : `linear-gradient(135deg, ${MIDNIGHT} 0%, ${MIDNIGHT} 60%, ${LIME} 140%)`,
          color: isOpen ? "#fff" : LIME,
          boxShadow: `0 18px 40px rgba(26,28,41,0.35)`,
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)" }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {!isOpen && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: LIME }} />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full" style={{ background: LIME }} />
          </span>
        )}

        {isOpen ? <CloseIcon className="h-5 w-5" /> : <BotIcon className="h-6 w-6" />}
      </button>

    </div>
  )
}

export default Chatbot828