<?php
/**
 * Template Name: About Us
 *
 * IMAGE PLACEHOLDERS — replace these URLs with WordPress Media Library URLs:
 * - $hero_bg_url
 * - $mission_vision_image_url
 */

get_header();

// ───────────────────────────────────────────────────────────────────────────
// PLACEHOLDER IMAGE URLS — replace with WP Media Library URLs
// ───────────────────────────────────────────────────────────────────────────
// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — replace with WP Media Library URL
// (Full-width "estampado" / patterned image used as hero background)
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url             = 'https://via.placeholder.com/1920x1080/1A1C29/ffffff?text=About+Hero+Background';

// ───────────────────────────────────────────────────────────────────────────
// OTHER IMAGES
// ───────────────────────────────────────────────────────────────────────────
$mission_vision_image_url = 'https://via.placeholder.com/800x900/1A1C29/ffffff?text=Mission+Vision+Image';
?>

<main>

  <!-- ═══════════════════════════════════════════════════════════════════════
       HERO SECTION — full-width background image with dark overlay
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[#1A1C29] text-white overflow-hidden min-h-[480px] lg:min-h-[560px] flex items-center">

    <!-- Background image (the "estampado") -->
    <div class="absolute inset-0">
      <img
        src="<?php echo esc_url($hero_bg_url); ?>"
        alt=""
        class="w-full h-full object-cover object-center"
        aria-hidden="true"
      />
      <!-- Multi-layer overlay for legibility over any background image -->
      <div class="absolute inset-0 bg-[#1A1C29]/75"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#1A1C29] via-[#1A1C29]/80 to-[#1A1C29]/40"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1C29]"></div>
    </div>

    <!-- Circuit texture overlay -->
    <svg class="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="about-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 L40 10 L40 40 L70 40 L70 70 M30 90 L30 60 L60 60 L60 30 L90 30" stroke="white" stroke-width="0.8" fill="none" />
          <circle cx="10" cy="10" r="2" fill="white" />
          <circle cx="40" cy="40" r="2" fill="white" />
          <circle cx="70" cy="70" r="2" fill="white" />
          <circle cx="60" cy="60" r="2" fill="white" />
          <circle cx="90" cy="30" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-circuit)" />
    </svg>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div class="max-w-3xl">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#A3CB37] mb-4">
          About Us
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
          Your Strategic Growth Partner, <span class="italic font-light text-white/80">Not Just Another Agency.</span>
        </h1>
        <p class="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
          828 Marketing Solutions helps businesses grow through data-driven strategy, branding, digital experiences, and performance-focused marketing systems built for long-term success.
        </p>
      </div>
    </div>

    <!-- Bottom fade to white -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       MISSION & VISION SECTION — 2 columns
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="bg-white py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        <!-- LEFT: Image -->
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="<?php echo esc_url($mission_vision_image_url); ?>"
              alt="828 Marketing Solutions"
              class="w-full h-auto object-cover aspect-[4/5]"
            />
            <div class="absolute left-0 top-8 bottom-8 w-1 bg-[#093D62]"></div>
          </div>
        </div>

        <!-- RIGHT: Mission + Vision stacked -->
        <div class="lg:col-span-7 space-y-10">

          <!-- Mission -->
          <div class="relative pl-6 border-l-2 border-[#093D62]">
            <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-2">
              Our Mission
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#1A1C29] tracking-tight leading-[1.2] mb-4">
              Growth that creates lasting impact.
            </h2>
            <p class="text-base sm:text-lg text-[#1A1C29]/70 leading-relaxed">
              Our mission is to help businesses grow through data-driven strategies, clear positioning, and integrated digital systems that create measurable impact and long-term competitive advantage.
            </p>
          </div>

          <!-- Vision -->
          <div class="relative pl-6 border-l-2 border-[#093D62]">
            <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-2">
              Our Vision
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#1A1C29] tracking-tight leading-[1.2] mb-4">
              A trusted partner for scalable growth.
            </h2>
            <p class="text-base sm:text-lg text-[#1A1C29]/70 leading-relaxed">
              Our vision is to become a trusted strategic partner for businesses seeking sustainable growth through intelligent marketing, strong branding, and scalable digital systems aligned with their long-term goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       OUR VALUES SECTION — 3 cards
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[#F8F9FB] py-20 lg:py-24 overflow-hidden">
    <!-- Soft glow -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(9,61,98,0.05) 0%, rgba(9,61,98,0) 70%);" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-14 max-w-2xl mx-auto">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-3">
          Our Values
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1] mb-4">
          Core values that <span class="italic font-light">define our company.</span>
        </h2>
      </div>

      <!-- 3-column values grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

        <!-- Value 01: Strategy First -->
        <div class="group relative bg-white rounded-xl p-7 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-7 bottom-7 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">01</span>
          <div class="w-12 h-12 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-5 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[#1A1C29] mb-3 leading-snug">Strategy First</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            We prioritize clear strategy before execution, ensuring every action, channel, and investment aligns with business goals and measurable growth outcomes.
          </p>
        </div>

        <!-- Value 02: Data-Driven Decisions -->
        <div class="group relative bg-white rounded-xl p-7 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-7 bottom-7 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">02</span>
          <div class="w-12 h-12 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-5 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 3v18h18" />
              <path d="M7 14l3-3 4 4 5-6" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[#1A1C29] mb-3 leading-snug">Data-Driven Decisions</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            Every decision is backed by data, insights, and analysis, allowing us to optimize performance, reduce guesswork, and drive consistent, scalable results.
          </p>
        </div>

        <!-- Value 03: Brand Alignment -->
        <div class="group relative bg-white rounded-xl p-7 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-7 bottom-7 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">03</span>
          <div class="w-12 h-12 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-5 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-[#1A1C29] mb-3 leading-snug">Brand Alignment</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            We build and execute strategies fully aligned with each client's brand identity, voice, and vision to create consistency, trust, and recognition.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       TESTIMONIALS SECTION — Trustindex plugin
       ═══════════════════════════════════════════════════════════════════════ -->
  <section id="reviews" class="bg-white py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-12 max-w-2xl mx-auto">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-3">
          Client Stories
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1] mb-4">
          What our clients <span class="italic font-light">say.</span>
        </h2>
        <p class="text-base text-[#1A1C29]/65 leading-relaxed">
          Real companies. Real growth. Real results from strategic execution.
        </p>
      </div>

      <!-- Trustindex plugin shortcode — replace with actual shortcode -->
      <div class="trustindex-container mb-10">
        <?php echo do_shortcode('[trustindex no-registration=google]'); ?>
      </div>

      <!-- Leave a Review CTA -->
      <div class="text-center">
        <a href="https://g.page/r/CdX0fV3UvjN9EBM/review" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 bg-[#1A1C29] text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#093D62] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
          Leave a Review
          <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       FINAL CTA SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-gradient-to-br from-[#1A1C29] via-[#093D62] to-[#1A1C29] text-white py-20 lg:py-24 overflow-hidden">

    <svg class="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="about-cta-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 L40 10 L40 40 L70 40 L70 70 M30 90 L30 60 L60 60 L60 30 L90 30" stroke="white" stroke-width="0.8" fill="none" />
          <circle cx="10" cy="10" r="2" fill="white" />
          <circle cx="40" cy="40" r="2" fill="white" />
          <circle cx="70" cy="70" r="2" fill="white" />
          <circle cx="60" cy="60" r="2" fill="white" />
          <circle cx="90" cy="30" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-cta-circuit)" />
    </svg>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#A3CB37] mb-4">
        Ready to Grow with Strategy?
      </span>
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8">
        Let's build something <span class="italic font-light text-white/80">that scales.</span>
      </h2>
      <a href="/contact-us" class="group inline-flex items-center gap-2 bg-white text-[#1A1C29] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#A3CB37] hover:text-[#1A1C29] transition-all duration-200">
        Schedule a Consultation
        <svg class="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  </section>

</main>

<?php get_footer(); ?>