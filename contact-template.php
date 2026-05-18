<?php
/**
 * Template Name: Contact
 *
 * Per brief v2-Final Section 7.5:
 *   Hero headline: "Let's find out what the market is seeing."
 *   Subhead: "Book a free strategy call. No pitch. Just the diagnosis."
 *   Two columns: Left = TidyCal embed. Right = ContactForm with growth-challenge.
 *   Below: address, phone, email, Google Maps embed.
 */

get_header();

// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — paste a WP Media Library URL here.
// Leave as '' to use solid Midnight Logic + circuit-pattern fallback.
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = '/wp-content/uploads/2026/05/HomePageHero-scaled.png';

// ───────────────────────────────────────────────────────────────────────────
// TidyCal — Manuel will provide the actual booking page URL.
// Existing 828 calendar should be embedded here.
// Update when Manuel provides the URL or embed code.
// ───────────────────────────────────────────────────────────────────────────
$tidycal_url = 'https://tidycal.com/828marketingsolutions'; // PLACEHOLDER
?>

<main>

  <!-- ═══════════════════════════════════════════════════════════════════════
       HERO
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[var(--color-midnight-logic)] text-white overflow-hidden">

    <?php if (!empty($hero_bg_url)): ?>
      <img src="<?php echo esc_url($hero_bg_url); ?>" alt="" class="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
      <div class="absolute inset-0 bg-[var(--color-midnight-logic)]/15"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-midnight-logic)]/40 via-[var(--color-midnight-logic)]/55 to-[var(--color-midnight-logic)]/75"></div>
    <?php else: ?>
      <div class="circuit-overlay" aria-hidden="true"></div>
    <?php endif; ?>

    <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24 text-center">
      <p class="eyebrow eyebrow-lime mb-5">Contact</p>

      <h1 class="font-display font-bold text-[2.25rem] sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-6 max-w-3xl mx-auto">
        Let's find out what the market is seeing.
      </h1>

      <p class="text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
        Book a free strategy call. No pitch. Just the diagnosis.
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════
       TWO COLUMNS — TidyCal (left) + ContactForm (right)
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="bg-[var(--color-paper-soft)] py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

        <!-- LEFT: TidyCal embed -->
        <div>
          <div class="mb-6">
            <p class="eyebrow eyebrow-blue mb-3">Option 1</p>
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-3">
              Book directly.
            </h2>
            <p class="text-base text-[var(--color-metric-steel)] leading-relaxed">
              Pick a time on the calendar. We'll send a confirmation and a Zoom link. 30 minutes.
            </p>
          </div>

          <!-- TidyCal embed container -->
          <div class="bg-white rounded-sm border border-[rgba(26,28,41,0.1)] shadow-sm overflow-hidden">
            <iframe
              src="<?php echo esc_url($tidycal_url); ?>"
              width="100%"
              height="700"
              frameborder="0"
              style="border: 0; display: block;"
              title="Book a strategy call with 828 Marketing Solutions"
              loading="lazy"
            ></iframe>
          </div>

          <p class="mt-4 text-xs text-[var(--color-metric-steel)]">
            Powered by TidyCal. Your booking creates a calendar invite delivered to your inbox.
          </p>
        </div>

        <!-- RIGHT: ContactForm -->
        <div>
          <div class="mb-6">
            <p class="eyebrow eyebrow-blue mb-3">Option 2</p>
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-3">
              Or send us a message.
            </h2>
            <p class="text-base text-[var(--color-metric-steel)] leading-relaxed">
              Tell us what you're working on. We'll get back within one business day.
            </p>
          </div>

          <div class="render-contact-form"></div>
        </div>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════
       INFO BLOCK — Address · Phone · Email · Map
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="bg-[var(--color-paper)] py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <div class="text-center mb-12 max-w-2xl mx-auto">
        <p class="eyebrow eyebrow-blue mb-3">Visit Us</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-[var(--color-midnight-logic)] tracking-tight">
          Our office, our team, your call away.
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">

        <!-- LEFT: 3 info blocks stacked -->
        <div class="lg:col-span-2 space-y-8">

          <!-- Office -->
          <div class="border-l-2 border-[var(--color-growth-signal)] pl-5">
            <p class="eyebrow eyebrow-lime mb-2">Office</p>
            <address class="not-italic text-base text-[var(--color-midnight-logic)] leading-relaxed">
              4 Venture, Suite 240<br />
              Irvine, CA 92656
            </address>
            <a
              href="https://maps.app.goo.gl/F2Ym733cgFKYhkka6"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-[var(--color-strategic-blue)] hover:text-[var(--color-growth-signal)] transition-colors"
            >
              Get directions
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <!-- Phone -->
          <div class="border-l-2 border-[var(--color-growth-signal)] pl-5">
            <p class="eyebrow eyebrow-lime mb-2">Phone</p>
            <a
              href="tel:+19497755940"
              class="text-base text-[var(--color-midnight-logic)] font-medium hover:text-[var(--color-growth-signal)] transition-colors"
            >
              +1 (949) 775-5940
            </a>
            <p class="text-sm text-[var(--color-metric-steel)] mt-1">
              Monday – Friday · 9:00 AM – 6:00 PM PT
            </p>
          </div>

          <!-- Email -->
          <div class="border-l-2 border-[var(--color-growth-signal)] pl-5">
            <p class="eyebrow eyebrow-lime mb-2">Email</p>
            <a
              href="mailto:manuel@828marketingsolutions.com"
              class="text-base text-[var(--color-midnight-logic)] font-medium hover:text-[var(--color-growth-signal)] transition-colors break-all"
            >
              manuel@828marketingsolutions.com
            </a>
            <p class="text-sm text-[var(--color-metric-steel)] mt-1">
              We reply within one business day.
            </p>
          </div>
        </div>

        <!-- RIGHT: Google Map embed -->
        <div class="lg:col-span-3">
          <div class="relative w-full h-full min-h-[400px] rounded-sm overflow-hidden border border-[rgba(26,28,41,0.1)] shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5!2d-117.7297!3d33.6539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNCBWZW50dXJlLCBJcnZpbmUsIENBIDkyNjU2!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style="border:0; position: absolute; inset: 0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="828 Marketing Solutions office location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>