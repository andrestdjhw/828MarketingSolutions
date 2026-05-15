<?php
/**
 * Template Name: Services
 *
 * IMAGE PLACEHOLDERS — replace these URLs with WordPress Media Library URLs:
 * - $hero_bg_url
 * - $why_us_image_url
 */

get_header();

// ───────────────────────────────────────────────────────────────────────────
// PLACEHOLDER IMAGE URLS — replace with WP Media Library URLs
// ───────────────────────────────────────────────────────────────────────────
// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — replace with WP Media Library URL
// (Full-width "estampado" / patterned image used as hero background)
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url      = 'https://via.placeholder.com/1920x1080/1A1C29/ffffff?text=Services+Hero';

// ───────────────────────────────────────────────────────────────────────────
// OTHER IMAGES
// ───────────────────────────────────────────────────────────────────────────
$why_us_image_url = 'https://via.placeholder.com/800x1000/1A1C29/ffffff?text=Why+Us+Image';

// ───────────────────────────────────────────────────────────────────────────
// SERVICES DATA — single source of truth for the services grid
// ───────────────────────────────────────────────────────────────────────────
$services = [
  [
    'title' => 'Industry Report',
    'desc'  => 'We analyze your industry, competitors, and market trends to deliver clear insights that support smarter decisions, stronger positioning, and strategic growth opportunities.',
    'href'  => '/service/industry-report/',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="14" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>',
  ],
  [
    'title' => 'Brand Identity & Positioning',
    'desc'  => 'We define your brand\'s identity, messaging, and market positioning to ensure clarity, consistency, and differentiation that resonates with your ideal audience.',
    'href'  => '/service/brand-identity-and-positioning/',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>',
  ],
  [
    'title' => 'Website Development & SEO',
    'desc'  => 'We design and develop high-performing websites optimized for user experience and search engines, turning traffic into leads through structure, content, and technical optimization.',
    'href'  => '/service/website-development-and-seo/',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
  ],
  [
    'title' => 'Social Media Management',
    'desc'  => 'We manage and optimize your social media presence with strategic content, consistent messaging, and performance tracking to build engagement, trust, and long-term brand visibility.',
    'href'  => '/service/social-media-management/',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
  ],
  [
    'title' => 'Paid Advertisement',
    'desc'  => 'We create and manage data-driven advertising campaigns focused on targeting the right audience, maximizing ROI, and driving measurable growth across digital platforms.',
    'href'  => '/service/paid-advertisement/',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  ],
  [
    'title' => 'Pitch Deck & Capabilities Development',
    'desc'  => 'We craft clear, persuasive pitch decks and capability presentations that communicate your value, strengthen credibility, and support sales conversations with confidence and clarity.',
    'href'  => '/service/pitch-deck-and-capabilities-development/',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  ],
];

// ───────────────────────────────────────────────────────────────────────────
// PROCESS STEPS DATA
// ───────────────────────────────────────────────────────────────────────────
$process_steps = [
  [
    'title' => 'Strategic Market Analysis',
    'desc'  => 'We analyze your industry, competition, and audience to uncover real growth opportunities and remove guesswork.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
  ],
  [
    'title' => 'Positioning &amp; Strategic Planning',
    'desc'  => 'We define a clear strategy that aligns your brand, messaging, and goals with how your ideal clients actually make decisions.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  ],
  [
    'title' => 'High-Performance Execution',
    'desc'  => 'We execute across the right channels (SEO, paid media, content, and web) with consistency and precision.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  ],
  [
    'title' => 'Measurement, Optimization &amp; Scale',
    'desc'  => 'We track performance, optimize continuously, and scale what works to drive sustainable, profitable growth.',
    'icon'  => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  ],
];
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

    <!-- Circuit texture -->
    <svg class="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="services-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 L40 10 L40 40 L70 40 L70 70 M30 90 L30 60 L60 60 L60 30 L90 30" stroke="white" stroke-width="0.8" fill="none" />
          <circle cx="10" cy="10" r="2" fill="white" />
          <circle cx="40" cy="40" r="2" fill="white" />
          <circle cx="70" cy="70" r="2" fill="white" />
          <circle cx="60" cy="60" r="2" fill="white" />
          <circle cx="90" cy="30" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#services-circuit)" />
    </svg>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div class="max-w-3xl">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#A3CB37] mb-4">
          Our Services
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
          Solutions Built to <span class="italic font-light text-white/80">Drive Growth.</span>
        </h1>
        <p class="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
          Our services are designed to work together as a complete system, combining strategy, creativity, and data to build strong brands, digital presence, and measurable business growth.
        </p>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       SERVICES GRID — 6 services in 3x2
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="bg-white py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        <?php foreach ($services as $index => $service): ?>
          <a
            href="<?php echo esc_url($service['href']); ?>"
            class="group relative bg-white rounded-xl p-7 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200 flex flex-col"
          >
            <div class="absolute left-0 top-7 bottom-7 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>

            <!-- Number -->
            <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">
              <?php echo str_pad($index + 1, 2, '0', STR_PAD_LEFT); ?>
            </span>

            <!-- Icon -->
            <div class="w-12 h-12 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-5 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
              <span class="w-6 h-6 inline-block"><?php echo $service['icon']; ?></span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-[#1A1C29] mb-3 leading-snug">
              <?php echo $service['title']; ?>
            </h3>

            <!-- Description -->
            <p class="text-sm text-[#1A1C29]/65 leading-relaxed mb-5 flex-1">
              <?php echo $service['desc']; ?>
            </p>

            <!-- Learn More link -->
            <div class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#093D62] group-hover:text-[#A3CB37] transition-colors duration-200">
              Learn More
              <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       OUR PROCESS SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section id="process" class="relative bg-[#F8F9FB] py-20 lg:py-24 overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(9,61,98,0.05) 0%, rgba(9,61,98,0) 70%);" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14 max-w-2xl mx-auto">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-3">
          Our Process
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1] mb-3">
          Our Strategic <span class="italic font-light">Growth Framework.</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <?php foreach ($process_steps as $index => $step): ?>
          <div class="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
            <div class="absolute left-0 top-6 bottom-6 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
            <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">
              <?php echo str_pad($index + 1, 2, '0', STR_PAD_LEFT); ?>
            </span>
            <div class="w-11 h-11 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-4 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
              <span class="w-5 h-5 inline-block"><?php echo $step['icon']; ?></span>
            </div>
            <h3 class="text-lg font-bold text-[#1A1C29] mb-2 leading-snug">
              <?php echo $step['title']; ?>
            </h3>
            <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
              <?php echo $step['desc']; ?>
            </p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       WHY US SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="bg-white py-20 lg:py-24">
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
            <img
              src="<?php echo esc_url($why_us_image_url); ?>"
              alt="828 Marketing Solutions approach"
              class="w-full h-auto object-cover aspect-[4/5]"
            />
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
        <pattern id="services-cta-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 L40 10 L40 40 L70 40 L70 70 M30 90 L30 60 L60 60 L60 30 L90 30" stroke="white" stroke-width="0.8" fill="none" />
          <circle cx="10" cy="10" r="2" fill="white" />
          <circle cx="40" cy="40" r="2" fill="white" />
          <circle cx="70" cy="70" r="2" fill="white" />
          <circle cx="60" cy="60" r="2" fill="white" />
          <circle cx="90" cy="30" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#services-cta-circuit)" />
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