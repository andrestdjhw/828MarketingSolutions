<?php
/**
 * Template Name: Home
 *
 * Source of truth: Manuel Luna's brief v2-Final (May 17, 2026)
 * Section reference numbers map to the brief.
 *
 * SECTIONS:
 *   ✓ 6.1 Hero
 *   ✓ 6.2 Promise Bar
 *   ✓ 6.3 POV Statement (manifesto block)
 *   ⏳ 6.4 Case Study Wall (8 cards, anonymized)
 *   ⏳ 6.5 Industries Grid (8 tiles)
 *   ⏳ 6.6 Authority Anchors Strip (Antonio, Laura, Dr. Chorney anonymized)
 *   ⏳ 6.7 Final CTA Block
 */

get_header();

// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — full-width background "estampado"
// Paste the URL of an image from WP Media Library here.
// Leave as empty string ('') to use only the Midnight Logic + CSS circuit pattern.
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = '/wp-content/uploads/2026/05/828Estampado2-scaled.png';
?>

<main>

  <!-- ═══════════════════════════════════════════════════════════════════════
       6.1  HERO
       Background: Midnight Logic with optional full-width image overlay.
       CSS circuit-pattern only renders when no image is set (the image
       typically IS the estampado, so adding another pattern competes).
       White type. Form on right (override of brief 6.1 per Daniel's call).
       Fills 100vh minus navbar height (~96px lg).
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[var(--color-midnight-logic)] text-white overflow-hidden flex items-center min-h-[calc(100vh-96px)]">

    <?php if (!empty($hero_bg_url)): ?>
      <!-- Full-width background image from WP Media Library -->
      <img
        src="<?php echo esc_url($hero_bg_url); ?>"
        alt=""
        class="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      />
      <!-- Lighter overlay — lets the estampado breathe while keeping legibility -->
      <div class="absolute inset-0 bg-[var(--color-midnight-logic)]/40"></div>
      <!-- Localized darkening on the left for text legibility -->
      <div class="absolute inset-0 bg-gradient-to-r from-[var(--color-midnight-logic)]/75 via-[var(--color-midnight-logic)]/30 to-transparent"></div>
    <?php else: ?>
      <!-- Fallback when no image: CSS circuit pattern per brief 3.4 -->
      <div class="circuit-overlay" aria-hidden="true"></div>
    <?php endif; ?>

    <div class="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 lg:py-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 lg:items-stretch">

        <!-- LEFT: copy (brief 6.1 — USED EXACTLY AS WRITTEN) -->
        <div class="lg:col-span-6 flex flex-col lg:justify-between">

          <!-- TOP: Headline -->
          <div>
            <h1 class="font-display font-bold text-[2rem] sm:text-4xl lg:text-[2.5rem] xl:text-[3rem] leading-[1.05] tracking-tight mb-5">
              <span class="text-[var(--color-growth-signal)]">You built something real.</span><br />
              <span class="text-white/85">Why doesn't the market see it yet?</span>
            </h1>
          </div>

          <!-- MIDDLE: Subhead block — floats vertically in remaining space -->
          <div class="lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:py-3">
            <div class="space-y-3 max-w-2xl">
              <p class="text-sm lg:text-base text-white/85 leading-relaxed">
                You've worked harder than your competition. Your product is better. Your service is sharper. But somehow, the calls aren't coming in like they should. The market isn't seeing what you've built. And you're tired of guessing what's wrong.
              </p>
              <p class="text-sm lg:text-base font-medium text-white leading-relaxed">
                That's what we fix.
              </p>
              <p class="text-sm lg:text-base text-white/85 leading-relaxed">
                828 builds the growth system that makes the market finally see — and choose — what you've already built.
              </p>
            </div>
          </div>

          <!-- BOTTOM: CTAs aligned with form's submit button -->
          <div class="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0">
            <a
              href="#case-studies"
              class="group inline-flex items-center justify-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-6 py-3 rounded-sm font-body font-medium text-[12px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200"
            >
              Watch how we did it
              <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>

            <a
              href="/contact"
              class="group inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 rounded-sm font-body font-medium text-[12px] uppercase tracking-[0.05em] border border-[var(--color-growth-signal)] hover:bg-[var(--color-growth-signal)] hover:text-[var(--color-midnight-logic)] transition-all duration-200"
            >
              Book a Strategy Call
              <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <!-- RIGHT: ContactForm (override of brief 6.1) -->
        <div class="lg:col-span-6">
          <div class="render-contact-form"></div>
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════
       6.2  PROMISE BAR
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="bg-[var(--color-paper)] border-b border-[rgba(26,28,41,0.06)]">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">

        <div class="md:px-8 lg:px-10 md:border-r md:border-[var(--color-growth-signal)]/40 first:md:pl-0 first:md:border-l-0">
          <h3 class="font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-3 leading-tight">
            The work is yours.<br />The visibility is ours.
          </h3>
          <p class="text-[15px] text-[var(--color-metric-steel)] leading-relaxed">
            You built it. We make sure the market sees it.
          </p>
        </div>

        <div class="md:px-8 lg:px-10 md:border-r md:border-[var(--color-growth-signal)]/40">
          <h3 class="font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-3 leading-tight">
            You built it.
          </h3>
          <p class="text-[15px] text-[var(--color-metric-steel)] leading-relaxed">
            We make sure the market sees it.
          </p>
        </div>

        <div class="md:px-8 lg:px-10 last:md:pr-0">
          <h3 class="font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-3 leading-tight">
            Better doesn't mean chosen.
          </h3>
          <p class="text-[15px] text-[var(--color-metric-steel)] leading-relaxed">
            Chosen is what we build.
          </p>
        </div>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════
       6.3  POV STATEMENT (manifesto block)
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[var(--color-deep-insight)] text-white overflow-hidden">
    <div class="circuit-overlay" aria-hidden="true"></div>

    <div class="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32 text-center">

      <p class="font-display font-bold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.18] tracking-tight text-white max-w-3xl mx-auto">
        Most agencies sell marketing tactics.<br />
        We sell <span class="text-[var(--color-growth-signal)]">visibility</span> for businesses that already deserve it.
      </p>

      <div class="my-10 mx-auto w-16 h-px bg-[var(--color-growth-signal)]"></div>

      <p class="font-display text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
        We don't make your business worth choosing — we make sure the market sees it's already worth choosing.
      </p>
    </div>
  </section>


  <!-- ⏳ NEXT SECTIONS — pending sign-off -->
  <section id="case-studies" class="bg-[var(--color-paper-soft)] py-28">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
      <p class="eyebrow eyebrow-blue mb-4">Next Section · 6.4</p>
      <p class="font-display text-2xl text-[var(--color-metric-steel)]">
        Case Study Wall — pending Week 1 sign-off
      </p>
    </div>
  </section>

</main>

<?php get_footer(); ?>