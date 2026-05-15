<?php
/**
 * Template Name: Contact Us
 */

get_header();

// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — replace with WP Media Library URL
// (Full-width "estampado" / patterned image used as hero background)
// Leave as empty string ('') to skip the image and use only the gradient.
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = 'https://via.placeholder.com/1920x1080/1A1C29/ffffff?text=Contact+Hero';
?>

<main>

  <!-- ═══════════════════════════════════════════════════════════════════════
       HERO + CONTACT FORM SECTION
       Full-width background image with dark overlay + form below.
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[#1A1C29] text-white overflow-hidden">

    <?php if (!empty($hero_bg_url)): ?>
      <!-- Background image (the "estampado") -->
      <div class="absolute inset-0">
        <img
          src="<?php echo esc_url($hero_bg_url); ?>"
          alt=""
          class="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <!-- Multi-layer overlay for legibility over any background image -->
        <div class="absolute inset-0 bg-[#1A1C29]/80"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-[#1A1C29]/40 via-[#1A1C29]/60 to-[#1A1C29]"></div>
      </div>
    <?php else: ?>
      <!-- Fallback gradient when no background image is set -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#1A1C29] via-[#093D62] to-[#1A1C29]"></div>
    <?php endif; ?>

    <!-- Circuit texture -->
    <svg class="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="contact-hero-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 L40 10 L40 40 L70 40 L70 70 M30 90 L30 60 L60 60 L60 30 L90 30" stroke="white" stroke-width="0.8" fill="none" />
          <circle cx="10" cy="10" r="2" fill="white" />
          <circle cx="40" cy="40" r="2" fill="white" />
          <circle cx="70" cy="70" r="2" fill="white" />
          <circle cx="60" cy="60" r="2" fill="white" />
          <circle cx="90" cy="30" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-hero-circuit)" />
    </svg>

    <!-- Soft glow -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(9,61,98,0.2) 0%, rgba(9,61,98,0) 60%);" aria-hidden="true"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">

      <!-- Hero header (centered) -->
      <div class="text-center mb-12 lg:mb-14 max-w-3xl mx-auto">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#A3CB37] mb-4">
          Contact Us
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
          Get In <span class="italic font-light text-white/80">Touch.</span>
        </h1>
        <p class="text-base sm:text-lg text-white/75 leading-relaxed">
          Tell us a bit about your business and we'll get back to you within one business day to schedule your strategy session.
        </p>
      </div>

      <!-- Quick contact methods row -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 lg:mb-12 max-w-3xl mx-auto">

        <!-- Phone -->
        <a href="tel:+19497755940" class="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#A3CB37]/50 hover:bg-white/[0.08] rounded-xl px-4 py-3.5 transition-all duration-200">
          <span class="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white group-hover:bg-[#A3CB37] group-hover:text-[#1A1C29] transition-colors duration-200 shrink-0">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
            </svg>
          </span>
          <div class="min-w-0">
            <span class="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50">Phone</span>
            <span class="block text-sm font-semibold text-white truncate">(949) 775 - 5940</span>
          </div>
        </a>

        <!-- Email -->
        <a href="mailto:info@828marketingsolutions.com" class="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#A3CB37]/50 hover:bg-white/[0.08] rounded-xl px-4 py-3.5 transition-all duration-200">
          <span class="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white group-hover:bg-[#A3CB37] group-hover:text-[#1A1C29] transition-colors duration-200 shrink-0">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </span>
          <div class="min-w-0">
            <span class="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50">Email</span>
            <span class="block text-sm font-semibold text-white truncate">info@828marketingsolutions.com</span>
          </div>
        </a>

        <!-- Office -->
        <a href="https://maps.app.goo.gl/F2Ym733cgFKYhkka6" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#A3CB37]/50 hover:bg-white/[0.08] rounded-xl px-4 py-3.5 transition-all duration-200">
          <span class="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white group-hover:bg-[#A3CB37] group-hover:text-[#1A1C29] transition-colors duration-200 shrink-0">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </span>
          <div class="min-w-0">
            <span class="block text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50">Office</span>
            <span class="block text-sm font-semibold text-white truncate">Irvine, CA 92618</span>
          </div>
        </a>
      </div>

      <!-- Contact Form (section variant) -->
      <div class="render-contact-form" data-variant="section"></div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       FINAL CTA SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="bg-white py-20 lg:py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-4">
        Prefer to Talk First?
      </span>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1] mb-6">
        Schedule a free <span class="italic font-light">strategy session.</span>
      </h2>
      <p class="text-base text-[#1A1C29]/70 leading-relaxed mb-8 max-w-2xl mx-auto">
        Skip the form and book directly. We'll walk through your business, goals, and how a strategic marketing system could move the needle for you.
      </p>
      <a href="/schedule-a-consultation/" class="group inline-flex items-center gap-2 bg-[#1A1C29] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#093D62] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
        Schedule a Consultation
        <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  </section>

</main>

<?php get_footer(); ?>