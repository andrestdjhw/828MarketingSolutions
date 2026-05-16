<?php
/**
 * Template Name: Service - Website Development & SEO
 *
 * Service detail page for "Website Development &amp; SEO".
 *
 * IMAGE PLACEHOLDERS — replace these URLs with WordPress Media Library URLs.
 */

get_header();

// ───────────────────────────────────────────────────────────────────────────
// PLACEHOLDER IMAGE URLS — replace with WP Media Library URLs
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url       = ''; // optional: full-width background image for hero; leave empty for gradient
$service_image_url = 'https://via.placeholder.com/800x600/1A1C29/ffffff?text=Website+%26+SEO';
$why_us_image_url  = 'https://via.placeholder.com/800x1000/1A1C29/ffffff?text=Why+Us';
?>

<main>

  <!-- ═══════════════════════════════════════════════════════════════════════
       HERO SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[#1A1C29] text-white overflow-hidden">

    <?php if (!empty($hero_bg_url)): ?>
      <div class="absolute inset-0">
        <img src="<?php echo esc_url($hero_bg_url); ?>" alt="" class="w-full h-full object-cover object-center" aria-hidden="true" />
        <div class="absolute inset-0 bg-[#1A1C29]/55"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#1A1C29] via-[#1A1C29]/70 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1C29]/40"></div>
      </div>
    <?php else: ?>
      <div class="absolute inset-0 bg-gradient-to-br from-[#1A1C29] via-[#093D62] to-[#1A1C29]"></div>
      <svg class="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="website_seo-hero-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L40 10 L40 40 L70 40 L70 70 M30 90 L30 60 L60 60 L60 30 L90 30" stroke="white" stroke-width="0.8" fill="none" />
            <circle cx="10" cy="10" r="2" fill="white" />
            <circle cx="40" cy="40" r="2" fill="white" />
            <circle cx="70" cy="70" r="2" fill="white" />
            <circle cx="60" cy="60" r="2" fill="white" />
            <circle cx="90" cy="30" r="2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#website_seo-hero-circuit)" />
      </svg>
    <?php endif; ?>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

        <!-- LEFT: text -->
        <div class="lg:col-span-7">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-xs font-medium text-white/60 mb-5" aria-label="Breadcrumb">
            <a href="/" class="hover:text-white transition-colors">Home</a>
            <span class="text-white/30">/</span>
            <a href="/services" class="hover:text-white transition-colors">Services</a>
            <span class="text-white/30">/</span>
            <span class="text-white">Website Development &amp; SEO</span>
          </nav>

          <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#A3CB37] mb-4">
            Service
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Website Development <span class="italic font-light text-white/85">&amp; SEO</span>
          </h1>
          <p class="text-base sm:text-lg text-white/85 leading-relaxed mb-4 max-w-2xl font-medium">
            We design and develop high-performing websites optimized for users and search engines, turning traffic into qualified leads.
          </p>
          <p class="text-base text-white/70 leading-relaxed max-w-2xl">
            Through clean structure, strategic content, and technical SEO, your website becomes a measurable growth engine, not just a digital brochure.
          </p>
        </div>

        <!-- RIGHT: image -->
        <div class="lg:col-span-5">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="<?php echo esc_url($service_image_url); ?>" alt="Website Development &amp; SEO" class="w-full h-auto object-cover aspect-[4/3]" />
            <div class="absolute left-0 top-8 bottom-8 w-1 bg-[#A3CB37]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       VALUE YOU GAIN SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[#F8F9FB] py-20 lg:py-24 overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(9,61,98,0.05) 0%, rgba(9,61,98,0) 70%);" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14 max-w-2xl mx-auto">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-3">
          The Value You Gain
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1]">
          What you get when we <span class="italic font-light">work together.</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        <!-- Card 01 -->
        <div class="group relative bg-white rounded-xl p-7 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-7 bottom-7 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">01</span>
          <div class="w-12 h-12 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-5 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          </div>
          <h3 class="text-xl font-bold text-[#1A1C29] mb-3 leading-snug">High-Performance Website</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            Your site loads fast, looks polished on every device, and guides visitors toward action through intuitive structure, clear messaging, and conversion-focused design.
          </p>
        </div>
        <!-- Card 02 -->
        <div class="group relative bg-white rounded-xl p-7 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-7 bottom-7 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">02</span>
          <div class="w-12 h-12 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-5 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>
          </div>
          <h3 class="text-xl font-bold text-[#1A1C29] mb-3 leading-snug">Improved Search Visibility</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            Technical SEO, optimized content, and proper site architecture help you rank for the keywords that matter, bringing in qualified organic traffic over time.
          </p>
        </div>
        <!-- Card 03 -->
        <div class="group relative bg-white rounded-xl p-7 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-7 bottom-7 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">03</span>
          <div class="w-12 h-12 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-5 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <h3 class="text-xl font-bold text-[#1A1C29] mb-3 leading-snug">Better Lead Conversion</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            Strategic calls-to-action, lead capture forms, and conversion-focused flows turn passive visitors into engaged prospects ready to become customers.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       TESTIMONIALS SECTION — Trustindex plugin
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="bg-white py-20 lg:py-24">
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

      <div class="trustindex-container mb-10">
        <?php echo do_shortcode('[trustindex no-registration=google]'); ?>
      </div>

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
       WHY US SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="bg-[#F8F9FB] py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        <!-- LEFT: 4 reasons -->
        <div class="lg:col-span-7 order-2 lg:order-1">
          <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-3">
            Why Us
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1] mb-10">
            Why 828 <span class="italic font-light">Marketing Solutions?</span>
          </h2>

          <div class="space-y-7">
            <div class="relative pl-6 border-l-2 border-[#093D62]/20 hover:border-[#A3CB37] transition-colors duration-200 group">
              <h3 class="text-xl font-bold text-[#1A1C29] mb-2 leading-snug">Strategy Before Tactics</h3>
              <p class="text-base text-[#1A1C29]/65 leading-relaxed">
                We don't run campaigns without direction. Every action supports your business objectives.
              </p>
            </div>
            <div class="relative pl-6 border-l-2 border-[#093D62]/20 hover:border-[#A3CB37] transition-colors duration-200 group">
              <h3 class="text-xl font-bold text-[#1A1C29] mb-2 leading-snug">Bilingual &amp; Cross-Cultural Expertise</h3>
              <p class="text-base text-[#1A1C29]/65 leading-relaxed">
                We operate fluently in English and Spanish, helping brands connect authentically across markets.
              </p>
            </div>
            <div class="relative pl-6 border-l-2 border-[#093D62]/20 hover:border-[#A3CB37] transition-colors duration-200 group">
              <h3 class="text-xl font-bold text-[#1A1C29] mb-2 leading-snug">100% Customized Solutions</h3>
              <p class="text-base text-[#1A1C29]/65 leading-relaxed">
                Every strategy is built specifically for your business — no templates, no generic playbooks.
              </p>
            </div>
            <div class="relative pl-6 border-l-2 border-[#093D62]/20 hover:border-[#A3CB37] transition-colors duration-200 group">
              <h3 class="text-xl font-bold text-[#1A1C29] mb-2 leading-snug">Fully Aligned with Your Brand</h3>
              <p class="text-base text-[#1A1C29]/65 leading-relaxed">
                We integrate into your vision, values, and goals so your brand communicates with clarity and consistency.
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT: image -->
        <div class="lg:col-span-5 order-1 lg:order-2">
          <div class="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="<?php echo esc_url($why_us_image_url); ?>" alt="828 Marketing Solutions approach" class="w-full h-auto object-cover aspect-[4/5]" />
            <div class="absolute right-0 top-8 bottom-8 w-1 bg-[#093D62]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       FINAL CTA SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-gradient-to-br from-[#1A1C29] via-[#093D62] to-[#1A1C29] text-white py-20 lg:py-24 overflow-hidden">

    <svg class="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="website_seo-cta-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 L40 10 L40 40 L70 40 L70 70 M30 90 L30 60 L60 60 L60 30 L90 30" stroke="white" stroke-width="0.8" fill="none" />
          <circle cx="10" cy="10" r="2" fill="white" />
          <circle cx="40" cy="40" r="2" fill="white" />
          <circle cx="70" cy="70" r="2" fill="white" />
          <circle cx="60" cy="60" r="2" fill="white" />
          <circle cx="90" cy="30" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#website_seo-cta-circuit)" />
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