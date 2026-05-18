<?php
/**
 * Template Name: Home
 *
 * Custom home page template for 828 Marketing Solutions.
 */

// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — replace with WP Media Library URL
// (Full-width "estampado" / patterned image used as hero background)
// Leave as empty string ('') to skip the image and use only the gradient.
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url       = '/wp-content/uploads/2026/05/HomePageHero-scaled.png'; // e.g. 'https://yoursite.com/wp-content/uploads/2026/05/hero-pattern.png'

// ───────────────────────────────────────────────────────────────────────────
// OTHER IMAGES
// ───────────────────────────────────────────────────────────────────────────
$about_image_url   = 'https://via.placeholder.com/800x900/1A1C29/ffffff?text=About+Us+Image';
$why_us_image_url  = 'https://via.placeholder.com/800x1000/1A1C29/ffffff?text=Why+Us+Image';

get_header();

// DEBUG: confirm this template is loading (remove after testing)
echo '<!-- DEBUG: home-template.php IS loading. hero_bg_url length = ' . strlen($hero_bg_url) . ' -->';
?>

<main>

  <!-- ═══════════════════════════════════════════════════════════════════════
       HERO SECTION — fills viewport minus navbar height
       Navbar total height: top bar (~36px) + main nav (64px lg / 80px xl)
       Approximate total: ~100px lg / ~116px xl
       We use min-h-[calc()] so the hero always reaches the bottom of the fold.
       ═══════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[#1A1C29] text-white overflow-hidden flex items-center min-h-[calc(100vh-100px)]">

    <?php if (!empty($hero_bg_url)): ?>
      <!-- Background image (the "estampado") -->
      <div class="absolute inset-0">
        <img
          src="<?php echo esc_url($hero_bg_url); ?>"
          alt=""
          class="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <!-- Light overall tint: just enough to keep brand feel without hiding the estampado -->
        <div class="absolute inset-0 bg-[#1A1C29]/30"></div>
        <!-- Localized darkening on the left where the headline lives -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#1A1C29]/70 via-[#1A1C29]/20 to-transparent"></div>
      </div>
    <?php else: ?>
      <!-- Fallback gradient when no background image is set -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#1A1C29] via-[#093D62] to-[#1A1C29]"></div>
    <?php endif; ?>

    <?php if (empty($hero_bg_url)): ?>
    <!-- Subtle circuit-board texture (only when no hero image, otherwise the image is the texture) -->
    <svg class="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="hero-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 L40 10 L40 40 L70 40 L70 70 M30 90 L30 60 L60 60 L60 30 L90 30" stroke="white" stroke-width="0.8" fill="none" />
          <circle cx="10" cy="10" r="2" fill="white" />
          <circle cx="40" cy="40" r="2" fill="white" />
          <circle cx="70" cy="70" r="2" fill="white" />
          <circle cx="60" cy="60" r="2" fill="white" />
          <circle cx="90" cy="30" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-circuit)" />
    </svg>
    <?php endif; ?>

    <!-- Soft glow accent -->
    <div class="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(9,61,98,0.15) 0%, rgba(9,61,98,0) 60%);" aria-hidden="true"></div>

    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:items-stretch">

        <!-- LEFT: BBB badge, headline, subheadline, CTAs -->
        <div class="lg:col-span-6 flex flex-col lg:justify-between">

          <!-- BBB Accredited badge (TOP) -->
          <div class="inline-flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-full px-4 py-2 mb-7 backdrop-blur-sm self-start">
            <span class="relative flex w-2 h-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3CB37] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#A3CB37]"></span>
            </span>
            <svg class="w-5 h-5 text-white" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M11.166 20.194c.806.577 2.809 1.923 3.222 2.358.412.435.023 1.099.023 1.099l.618.252c.137-.298.962-1.397 1.511-2.084.496-.62.926-1.706.941-2.503.047-2.572-3.367-3.794-4.949-5.237-.778-.71-.16-1.122-.16-1.122l-.527-.343C9.808 14.926 7.662 17.686 11.166 20.194zM12.922 11.605c1.969 1.74 5.435 3.548 5.679 4.717.318 1.523-.412 2.382-.412 2.382l.394.321c.213-.304.451-.591.67-.891.892-1.222 1.752-2.463 2.629-3.695 2.004-2.818 1.254-5.49-1.765-7.648-1.537-1.098-3.032-2.26-4.584-3.339-.871-.733-.275-2.107-.275-2.107l-.367-.32c0 0-3.286 3.984-3.573 5.588C11.045 8.148 10.953 9.865 12.922 11.605zM23 27L22.341 25 7.659 25 7 27 11.19 27 11.822 29 18.217 29 18.816 27z" />
            </svg>
            <span class="text-xs font-semibold tracking-wide">BBB Accredited Business</span>
          </div>

          <!-- MIDDLE: Headline + Subheadline (vertically centered between badge and CTAs) -->
          <div class="lg:flex-1 lg:flex lg:flex-col lg:justify-center">
            <!-- Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight leading-[1.05] mb-5">
              Strategic Marketing for <span class="italic font-light text-white/80">Scalable Business Growth</span>
            </h1>

            <!-- Subheadline -->
            <p class="text-base lg:text-base xl:text-lg text-white/75 leading-relaxed max-w-xl">
              We help companies grow with marketing systems built on market intelligence, strategic clarity, and disciplined execution.
            </p>
          </div>

          <!-- CTAs (BOTTOM) -->
          <div class="flex flex-col sm:flex-row gap-3 mt-8 lg:mt-0">
            <a href="#contact" class="group inline-flex items-center justify-center gap-2 bg-white text-[#1A1C29] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#093D62] hover:text-white transition-all duration-200">
              Schedule a Consultation
              <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#process" class="inline-flex items-center justify-center gap-2 bg-transparent text-white px-7 py-3.5 rounded-full font-semibold text-sm border-2 border-white/30 hover:border-[#A3CB37] hover:bg-white/5 transition-all duration-200">
              View Our Process
            </a>
          </div>
        </div>

        <!-- RIGHT: Contact Form (hero variant) -->
        <div class="lg:col-span-6">
          <div class="render-contact-form" data-variant="hero"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       ABOUT US SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section id="about" class="bg-white py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        <!-- LEFT: eyebrow + headline + image -->
        <div class="lg:col-span-5">
          <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-3">
            Your Strategic Growth Partner
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1] mb-8">
            Not just another <span class="italic font-light">agency.</span>
          </h2>

          <!-- About image — REPLACE URL WITH WP MEDIA LIBRARY -->
          <div class="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="<?php echo esc_url($about_image_url); ?>"
              alt="828 Marketing Solutions team"
              class="w-full h-auto object-cover aspect-[4/5]"
            />
            <!-- Decorative accent bar -->
            <div class="absolute left-0 top-8 bottom-8 w-1 bg-[#093D62]"></div>
          </div>
        </div>

        <!-- RIGHT: Headline + paragraph -->
        <div class="lg:col-span-7 lg:pl-8">
          <h2 class="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#1A1C29] tracking-tight leading-[1.2] mb-6">
            At 828 Marketing Solutions, we design and execute marketing systems that help businesses grow with confidence and control.
          </h2>
          <p class="text-base sm:text-lg text-[#1A1C29]/70 leading-relaxed">
            We don't rely on isolated tactics. Our approach is grounded in market analysis, strategic positioning, and measurable outcomes, creating a strong foundation for long-term, sustainable growth. We partner with business leaders who understand that real growth requires strategy, discipline, and precise execution.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       OUR PROCESS SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section id="process" class="relative bg-[#F8F9FB] py-20 lg:py-24 overflow-hidden">
    <!-- Soft glow -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(9,61,98,0.05) 0%, rgba(9,61,98,0) 70%);" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-14 max-w-2xl mx-auto">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-3">
          Our Process
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1]">
          A disciplined approach to <span class="italic font-light">measurable growth.</span>
        </h2>
      </div>

      <!-- 4-column process cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <!-- Card 01 -->
        <div class="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-6 bottom-6 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">01</span>
          <div class="w-11 h-11 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-4 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.5" y2="16.5" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2 leading-snug brand-gradient-text">Strategic Market Analysis</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            We analyze your industry, competition, and audience to uncover real growth opportunities and remove guesswork.
          </p>
        </div>

        <!-- Card 02 -->
        <div class="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-6 bottom-6 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">02</span>
          <div class="w-11 h-11 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-4 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2 leading-snug brand-gradient-text">Positioning &amp; Strategic Planning</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            We define a clear strategy that aligns your brand, messaging, and goals with how your ideal clients actually make decisions.
          </p>
        </div>

        <!-- Card 03 -->
        <div class="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-6 bottom-6 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">03</span>
          <div class="w-11 h-11 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-4 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2 leading-snug brand-gradient-text">High-Performance Execution</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            We execute across the right channels (SEO, paid media, content, and web) with consistency and precision.
          </p>
        </div>

        <!-- Card 04 -->
        <div class="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-[#093D62]/30 hover:shadow-xl transition-all duration-200">
          <div class="absolute left-0 top-6 bottom-6 w-0.5 bg-[#093D62] group-hover:bg-[#A3CB37] transition-colors duration-200"></div>
          <span class="block text-[10px] font-mono font-semibold text-[#093D62] mb-4 pl-2">04</span>
          <div class="w-11 h-11 rounded-lg bg-[#F8F9FB] text-[#093D62] flex items-center justify-center mb-4 group-hover:bg-[#093D62] group-hover:text-white transition-colors duration-200">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2 leading-snug brand-gradient-text">Measurement, Optimization &amp; Scale</h3>
          <p class="text-sm text-[#1A1C29]/65 leading-relaxed">
            We track performance, optimize continuously, and scale what works to drive sustainable, profitable growth.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       WHY US SECTION
       ═══════════════════════════════════════════════════════════════════════ -->
  <section id="why-us" class="bg-white py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        <!-- LEFT: 4 reasons -->
        <div class="lg:col-span-7 order-2 lg:order-1">
          <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-3">
            Why Us
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1] mb-10">
            What sets us <span class="italic font-light">apart.</span>
          </h2>

          <div class="space-y-7">

            <!-- Reason 1 -->
            <div class="relative pl-6 border-l-2 border-[#093D62]/20 hover:border-[#A3CB37] transition-colors duration-200 group">
              <h3 class="text-xl font-bold mb-2 leading-snug brand-gradient-text">Strategy Before Tactics</h3>
              <p class="text-base text-[#1A1C29]/65 leading-relaxed">
                We don't run campaigns without direction. Every action supports your business objectives.
              </p>
            </div>

            <!-- Reason 2 -->
            <div class="relative pl-6 border-l-2 border-[#093D62]/20 hover:border-[#A3CB37] transition-colors duration-200 group">
              <h3 class="text-xl font-bold mb-2 leading-snug brand-gradient-text">Bilingual &amp; Cross-Cultural Expertise</h3>
              <p class="text-base text-[#1A1C29]/65 leading-relaxed">
                We operate fluently in English and Spanish, helping brands connect authentically across markets.
              </p>
            </div>

            <!-- Reason 3 -->
            <div class="relative pl-6 border-l-2 border-[#093D62]/20 hover:border-[#A3CB37] transition-colors duration-200 group">
              <h3 class="text-xl font-bold mb-2 leading-snug brand-gradient-text">100% Customized Solutions</h3>
              <p class="text-base text-[#1A1C29]/65 leading-relaxed">
                Every strategy is built specifically for your business — no templates, no generic playbooks.
              </p>
            </div>

            <!-- Reason 4 -->
            <div class="relative pl-6 border-l-2 border-[#093D62]/20 hover:border-[#A3CB37] transition-colors duration-200 group">
              <h3 class="text-xl font-bold mb-2 leading-snug brand-gradient-text">Fully Aligned with Your Brand</h3>
              <p class="text-base text-[#1A1C29]/65 leading-relaxed">
                We integrate into your vision, values, and goals so your brand communicates with clarity and consistency.
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT: image -->
        <div class="lg:col-span-5 order-1 lg:order-2">
          <!-- Why Us image — REPLACE URL WITH WP MEDIA LIBRARY -->
          <div class="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="<?php echo esc_url($why_us_image_url); ?>"
              alt="828 Marketing Solutions approach"
              class="w-full h-auto object-cover aspect-[4/5]"
            />
            <!-- Decorative accent bar -->
            <div class="absolute right-0 top-8 bottom-8 w-1 bg-[#093D62]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       TESTIMONIALS SECTION (Trustindex plugin placeholder)
       ═══════════════════════════════════════════════════════════════════════ -->
  <section id="testimonials" class="bg-[#F8F9FB] py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-12 max-w-2xl mx-auto">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#093D62] mb-3">
          Client Stories
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1C29] tracking-tight leading-[1.1]">
          What our clients <span class="italic font-light">say.</span>
        </h2>
      </div>

      <!-- Trustindex plugin shortcode — replace with actual shortcode -->
      <div class="trustindex-container">
        <?php echo do_shortcode('[trustindex no-registration=google]'); ?>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════
       CONTACT SECTION (full form)
       ═══════════════════════════════════════════════════════════════════════ -->
  <section id="contact" class="relative bg-gradient-to-br from-[#1A1C29] via-[#093D62] to-[#1A1C29] text-white py-20 lg:py-24 overflow-hidden">

    <!-- Circuit texture -->
    <svg class="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="contact-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 L40 10 L40 40 L70 40 L70 70 M30 90 L30 60 L60 60 L60 30 L90 30" stroke="white" stroke-width="0.8" fill="none" />
          <circle cx="10" cy="10" r="2" fill="white" />
          <circle cx="40" cy="40" r="2" fill="white" />
          <circle cx="70" cy="70" r="2" fill="white" />
          <circle cx="60" cy="60" r="2" fill="white" />
          <circle cx="90" cy="30" r="2" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-circuit)" />
    </svg>

    <!-- Soft glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(9,61,98,0.1) 0%, rgba(9,61,98,0) 60%);" aria-hidden="true"></div>

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section header -->
      <div class="text-center mb-12 max-w-2xl mx-auto">
        <span class="block text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-3">
          Get In Touch
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
          Let's build something <span class="italic font-light text-white/80">that scales.</span>
        </h2>
      </div>

      <!-- Contact Form (section variant) -->
      <div class="render-contact-form" data-variant="section"></div>
    </div>
  </section>

</main>

<?php get_footer(); ?>