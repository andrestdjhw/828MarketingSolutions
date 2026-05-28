<?php
/**
 * Template Name: Home
 *
 * Source of truth: Manuel Luna's brief v2-Final (May 17, 2026)
 *
 * SECTIONS:
 *   ✓ 6.1 Hero  ✓ 6.2 Promise Bar  ✓ 6.3 POV Statement
 *   ✓ 6.4 Case Study Wall  ✓ 6.5 Industries Grid
 *   ✓ 6.6 Authority Anchors  ✓ 6.7 Final CTA
 */

require_once get_theme_file_path('/inc/data.php');
get_header();

// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — full-width background "estampado"
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = '/wp-content/uploads/2026/05/828Estampado2-scaled.png';

// ───────────────────────────────────────────────────────────────────────────
// AUTHORITY ANCHORS BACKGROUND IMAGE — paste a WP Media Library URL here.
// Leave as '' to use the default CSS circuit-pattern fallback.
// ───────────────────────────────────────────────────────────────────────────
$authority_bg_url = '/wp-content/uploads/2026/05/828Estampado2-scaled.png';

// ───────────────────────────────────────────────────────────────────────────
// INDUSTRIES CAROUSEL BACKGROUND IMAGE — paste a WP Media Library URL here.
// Leave as '' to use the default CSS circuit-pattern fallback.
// ───────────────────────────────────────────────────────────────────────────
$industries_bg_url = '/wp-content/uploads/2026/05/HomePageHero-scaled.png';

$case_studies = eight28_get_case_studies();
$industries   = eight28_get_industries();
?>

<main>

  <!-- ═══════════════════════════════════════════════════════════════════════ 6.1  HERO ═══ -->
  <section class="relative bg-[var(--color-midnight-logic)] text-white overflow-hidden flex items-center min-h-[calc(100vh-96px)]">

    <?php if (!empty($hero_bg_url)): ?>
      <img src="<?php echo esc_url($hero_bg_url); ?>" alt="" class="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
      <div class="absolute inset-0 bg-[var(--color-midnight-logic)]/40"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[var(--color-midnight-logic)]/75 via-[var(--color-midnight-logic)]/30 to-transparent"></div>
    <?php else: ?>
      <div class="circuit-overlay" aria-hidden="true"></div>
    <?php endif; ?>

    <div class="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 lg:py-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 lg:items-stretch">

        <!-- LEFT -->
        <div class="lg:col-span-5 flex flex-col justify-between gap-8 lg:gap-6">

          <!-- TOP: eyebrow + headline + accent line + copy -->
          <div>
            <p class="eyebrow eyebrow-lime mb-5">828 Marketing Solutions</p>

            <h1 class="font-display font-bold text-[2rem] sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] leading-[1.05] tracking-tight mb-6">
              <span class="text-[var(--color-growth-signal)]">You built something real.</span><br />
              <span class="text-white/85">Why doesn't the market see it yet?</span>
            </h1>

            <!-- Lime accent rule -->
            <div class="w-16 h-px bg-[var(--color-growth-signal)] mb-6"></div>

            <div class="space-y-3 max-w-xl">
              <p class="text-sm lg:text-base text-white/85 leading-relaxed">
                You've worked harder than your competition. Your product is better. The calls aren't coming in like they should.
              </p>
              <p class="text-sm lg:text-base font-medium text-white leading-relaxed">
                That's what we fix.
              </p>
              <p class="text-sm lg:text-base text-white/85 leading-relaxed">
                828 builds the growth system that makes the market finally see and choose what you've already built.
              </p>
            </div>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href="/contact"
                class="group inline-flex items-center justify-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-6 py-3 rounded-sm font-body font-medium text-[12px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200"
              >
                Book a Strategy Call
                <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a
                href="tel:+19497755940"
                class="group inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 rounded-sm font-body font-medium text-[12px] uppercase tracking-[0.05em] border border-white/30 hover:border-[var(--color-growth-signal)] hover:text-[var(--color-growth-signal)] transition-all duration-200"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call (949) 775-5940
              </a>
            </div>
          </div>

          <!-- BOTTOM: 3 market opportunity stats — visual ballast to balance the dense form on the right -->
          <div class="grid grid-cols-3 gap-3 lg:gap-4 pt-6 border-t border-white/10">
            <div>
              <p class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-growth-signal)] tracking-tight leading-none mb-1.5">
                $800B
              </p>
              <p class="text-[10px] lg:text-[11px] text-white/65 leading-snug font-body uppercase tracking-[0.06em]">
                Hispanic-owned business contribution
              </p>
            </div>
            <div>
              <p class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-growth-signal)] tracking-tight leading-none mb-1.5">
                7.7%
              </p>
              <p class="text-[10px] lg:text-[11px] text-white/65 leading-snug font-body uppercase tracking-[0.06em]">
                Growth rate vs 0.46% US avg
              </p>
            </div>
            <div>
              <p class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-growth-signal)] tracking-tight leading-none mb-1.5">
                $102B
              </p>
              <p class="text-[10px] lg:text-[11px] text-white/65 leading-snug font-body uppercase tracking-[0.06em]">
                Visibility gap to capture
              </p>
            </div>
          </div>
        </div>

        <!-- RIGHT: ContactForm -->
        <div class="lg:col-span-7">
          <div class="render-contact-form"></div>
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.2  PROMISE BAR ═══
       Three symptoms — same emotion, three different ways the operator
       experiences it. Operator should recognize themselves in at least one.
       Cards with subtle elevation + bouncy hover lift. -->
  <section class="bg-[var(--color-paper-soft)] border-b border-[rgba(26,28,41,0.06)]">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">

      <div class="text-center mb-10 max-w-2xl mx-auto">
        <p class="eyebrow eyebrow-blue mb-3">If any of this sounds familiar</p>
        <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] tracking-tight leading-tight">
          Three symptoms. Same root cause.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

        <!-- Symptom 1 -->
        <div class="group relative bg-white rounded-lg p-7 lg:p-8 border-t-4 border-[var(--color-growth-signal)] shadow-[0_4px_16px_-4px_rgba(26,28,41,0.08),0_2px_4px_-2px_rgba(26,28,41,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(26,28,41,0.18),0_8px_16px_-6px_rgba(26,28,41,0.08)] hover:-translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          <!-- Symptom number -->
          <span class="absolute top-5 right-6 font-display font-bold text-3xl text-[var(--color-growth-signal)]/20 group-hover:text-[var(--color-growth-signal)]/40 transition-colors duration-300">
            01
          </span>

          <h3 class="font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-4 leading-tight pr-10">
            The phone is quieter than it should be.
          </h3>
          <p class="text-[15px] text-[var(--color-metric-steel)] leading-relaxed">
            Your work is good. Your reviews prove it. But the calls don't reflect it.
          </p>
        </div>

        <!-- Symptom 2 -->
        <div class="group relative bg-white rounded-lg p-7 lg:p-8 border-t-4 border-[var(--color-growth-signal)] shadow-[0_4px_16px_-4px_rgba(26,28,41,0.08),0_2px_4px_-2px_rgba(26,28,41,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(26,28,41,0.18),0_8px_16px_-6px_rgba(26,28,41,0.08)] hover:-translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          <span class="absolute top-5 right-6 font-display font-bold text-3xl text-[var(--color-growth-signal)]/20 group-hover:text-[var(--color-growth-signal)]/40 transition-colors duration-300">
            02
          </span>

          <h3 class="font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-4 leading-tight pr-10">
            You're priced like a commodity.
          </h3>
          <p class="text-[15px] text-[var(--color-metric-steel)] leading-relaxed">
            You're competing with operators who do half the job. The market can't tell you apart.
          </p>
        </div>

        <!-- Symptom 3 -->
        <div class="group relative bg-white rounded-lg p-7 lg:p-8 border-t-4 border-[var(--color-growth-signal)] shadow-[0_4px_16px_-4px_rgba(26,28,41,0.08),0_2px_4px_-2px_rgba(26,28,41,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(26,28,41,0.18),0_8px_16px_-6px_rgba(26,28,41,0.08)] hover:-translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
          <span class="absolute top-5 right-6 font-display font-bold text-3xl text-[var(--color-growth-signal)]/20 group-hover:text-[var(--color-growth-signal)]/40 transition-colors duration-300">
            03
          </span>

          <h3 class="font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-4 leading-tight pr-10">
            Referrals built you. They won't scale you.
          </h3>
          <p class="text-[15px] text-[var(--color-metric-steel)] leading-relaxed">
            Word-of-mouth has a ceiling. You've hit it.
          </p>
        </div>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.2.5  TESTIMONIALS WALL ═══
       King Kong-style video testimonials.
       - One large video on top with quote + caption overlay
       - Carousel of thumbnails below; click switches active video
       - Each video auto-pauses when switching
       - Poster image shows until user clicks play (performance + privacy)
       ─────────────────────────────────────────────────────────────────────── -->
  <?php
  // ───────────────────────────────────────────────────────────────────────────
  // TESTIMONIALS — edit this array directly.
  // For each entry:
  //   - video_url:  MP4 from WP Media Library (e.g. /wp-content/uploads/2026/05/testimonial-ruben.mp4)
  //   - poster_url: a JPG/PNG thumbnail shown before play. Recommended: a frame
  //                 from the video itself, or a portrait of the speaker.
  //   - thumb_url:  smaller thumbnail for the carousel below (square or 4:3).
  //                 Can reuse poster_url if you don't have a separate thumb.
  //   - quote:      headline quote in the big card overlay (keep under ~25 words)
  //   - name / title / company: caption line under the quote (lime).
  //
  // Leave video_url empty to show only the poster (useful while you upload videos).
  // ───────────────────────────────────────────────────────────────────────────
  $testimonials = [
    [
      'name'       => 'Client Name',
      'title'      => 'Role',
      'company'    => 'Company',
      'quote'      => 'Replace this with the real client quote. Keep it under 25 words. Lead with the emotion: what was broken before, what changed after.',
      'video_url'  => '', // e.g. '/wp-content/uploads/2026/05/testimonial-1.mp4'
      'poster_url' => '', // e.g. '/wp-content/uploads/2026/05/testimonial-1-poster.jpg'
      'thumb_url'  => '', // e.g. '/wp-content/uploads/2026/05/testimonial-1-thumb.jpg'
    ],
    [
      'name'       => 'Client Name',
      'title'      => 'Role',
      'company'    => 'Company',
      'quote'      => 'Second testimonial quote here. Different angle, same emotion.',
      'video_url'  => '',
      'poster_url' => '',
      'thumb_url'  => '',
    ],
    [
      'name'       => 'Client Name',
      'title'      => 'Role',
      'company'    => 'Company',
      'quote'      => 'Third testimonial quote here.',
      'video_url'  => '',
      'poster_url' => '',
      'thumb_url'  => '',
    ],
    [
      'name'       => 'Client Name',
      'title'      => 'Role',
      'company'    => 'Company',
      'quote'      => 'Fourth testimonial quote here.',
      'video_url'  => '',
      'poster_url' => '',
      'thumb_url'  => '',
    ],
    [
      'name'       => 'Client Name',
      'title'      => 'Role',
      'company'    => 'Company',
      'quote'      => 'Fifth testimonial quote here.',
      'video_url'  => '',
      'poster_url' => '',
      'thumb_url'  => '',
    ],
  ];
  ?>
<!--   <section class="bg-[var(--color-paper)] py-20 lg:py-24 border-b border-[rgba(26,28,41,0.05)]">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      
      <div class="text-center mb-12 max-w-2xl mx-auto">
        <p class="eyebrow eyebrow-blue mb-3">Testimonials</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-[var(--color-midnight-logic)] tracking-tight leading-tight">
          What our operators say.
        </h2>
      </div>

      
      <div id="testimonial-main" class="relative aspect-[16/9] rounded-xl overflow-hidden bg-[var(--color-midnight-logic)] mb-6 shadow-[0_24px_48px_-12px_rgba(26,28,41,0.18),0_8px_16px_-6px_rgba(26,28,41,0.08)]">

        <?php foreach ($testimonials as $i => $t): ?>
          
          <div
            class="testimonial-slide absolute inset-0 transition-opacity duration-500 <?php echo $i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'; ?>"
            data-index="<?php echo $i; ?>"
          >
            
            <video
              class="testimonial-video absolute inset-0 w-full h-full object-cover hidden"
              preload="none"
              playsinline
              <?php if (!empty($t['poster_url'])): ?>poster="<?php echo esc_url($t['poster_url']); ?>"<?php endif; ?>
            >
              <?php if (!empty($t['video_url'])): ?>
                <source src="<?php echo esc_url($t['video_url']); ?>" type="video/mp4" />
              <?php endif; ?>
              Your browser does not support the video tag.
            </video>

            
            <div class="testimonial-poster absolute inset-0">
              <?php if (!empty($t['poster_url'])): ?>
                <img
                  src="<?php echo esc_url($t['poster_url']); ?>"
                  alt=""
                  class="absolute inset-0 w-full h-full object-cover"
                  aria-hidden="true"
                  loading="lazy"
                />
              <?php else: ?>
                
                <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-deep-insight)] via-[var(--color-midnight-logic)] to-[var(--color-midnight-logic)]"></div>
                <div class="circuit-overlay" aria-hidden="true"></div>
              <?php endif; ?>

              
              <div class="absolute inset-0 bg-[var(--color-midnight-logic)]/55"></div>

              
              <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16">

                <blockquote class="font-display text-white text-lg sm:text-2xl lg:text-3xl xl:text-4xl leading-[1.25] tracking-tight max-w-3xl mb-6">
                  &ldquo;<?php echo esc_html($t['quote']); ?>&rdquo;
                </blockquote>

                <p class="font-body text-sm sm:text-base font-medium text-[var(--color-growth-signal)] tracking-wide mb-8">
                  <?php echo esc_html($t['name']); ?>, <?php echo esc_html($t['title']); ?>, <?php echo esc_html($t['company']); ?>
                </p>

                <?php if (!empty($t['video_url'])): ?>
                  
                  <button
                    type="button"
                    class="testimonial-play-btn group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_8px_24px_rgba(163,203,55,0.4)]"
                    aria-label="Play testimonial video"
                  >
                    <svg class="w-7 h-7 sm:w-8 sm:h-8 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                <?php else: ?>
                  
                  <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/10 text-white/70 text-[11px] font-body uppercase tracking-[0.1em]">
                    Video URL not set
                  </span>
                <?php endif; ?>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

      
      <div
        id="testimonial-thumbs"
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4"
      >
        <?php foreach ($testimonials as $i => $t): ?>
          <button
            type="button"
            data-index="<?php echo $i; ?>"
            class="testimonial-thumb group relative aspect-video rounded-lg overflow-hidden transition-all duration-300 <?php echo $i === 0 ? 'ring-2 ring-[var(--color-growth-signal)] ring-offset-2 ring-offset-[var(--color-paper)]' : 'ring-1 ring-[rgba(26,28,41,0.1)] hover:ring-[var(--color-growth-signal)]/60'; ?>"
            aria-label="Watch testimonial <?php echo $i + 1; ?>"
          >
            <?php if (!empty($t['thumb_url']) || !empty($t['poster_url'])): ?>
              <img
                src="<?php echo esc_url(!empty($t['thumb_url']) ? $t['thumb_url'] : $t['poster_url']); ?>"
                alt=""
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                aria-hidden="true"
                loading="lazy"
              />
            <?php else: ?>
              <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-deep-insight)] to-[var(--color-midnight-logic)]"></div>
            <?php endif; ?>

            
            <div class="absolute inset-0 bg-[var(--color-midnight-logic)]/30 group-hover:bg-[var(--color-midnight-logic)]/20 transition-colors duration-300"></div>

            
            <div class="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-[var(--color-midnight-logic)] shadow-md">
              <svg class="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            
            <div class="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-[var(--color-midnight-logic)]/95 to-transparent">
              <p class="text-[10px] sm:text-xs font-body font-medium text-white uppercase tracking-[0.08em] truncate">
                <?php echo esc_html($t['name']); ?>
              </p>
            </div>
          </button>
        <?php endforeach; ?>
      </div>
    </div>
  </section> -->

  
  <script>
  (function() {
    const mainEl   = document.getElementById('testimonial-main');
    const thumbBar = document.getElementById('testimonial-thumbs');
    if (!mainEl || !thumbBar) return;

    const slides = mainEl.querySelectorAll('.testimonial-slide');
    const thumbs = thumbBar.querySelectorAll('.testimonial-thumb');
    if (!slides.length) return;

    let currentIdx = 0;

    // ─── Switch active slide ─────────────────────────────────────────
    function switchTo(idx) {
      if (idx === currentIdx) return;

      // Pause+reset the currently playing video (if any) and restore poster
      slides.forEach(function(slide, i) {
        const isActive = (i === idx);
        slide.classList.toggle('opacity-100', isActive);
        slide.classList.toggle('z-10',        isActive);
        slide.classList.toggle('opacity-0',   !isActive);
        slide.classList.toggle('z-0',         !isActive);
        slide.classList.toggle('pointer-events-none', !isActive);

        // Reset video state on every slide change
        const video  = slide.querySelector('.testimonial-video');
        const poster = slide.querySelector('.testimonial-poster');
        if (video && !video.classList.contains('hidden')) {
          video.pause();
          video.currentTime = 0;
          video.classList.add('hidden');
          if (poster) poster.classList.remove('hidden');
        }
      });

      // Update thumbnail ring styles
      thumbs.forEach(function(t, i) {
        const isActive = (i === idx);
        t.classList.toggle('ring-2',                                 isActive);
        t.classList.toggle('ring-[var(--color-growth-signal)]',      isActive);
        t.classList.toggle('ring-offset-2',                          isActive);
        t.classList.toggle('ring-offset-[var(--color-paper)]',       isActive);
        t.classList.toggle('ring-1',                                 !isActive);
        t.classList.toggle('ring-[rgba(26,28,41,0.1)]',              !isActive);
      });

      currentIdx = idx;
    }

    // ─── Thumb clicks ────────────────────────────────────────────────
    thumbBar.addEventListener('click', function(e) {
      const btn = e.target.closest('.testimonial-thumb');
      if (!btn) return;
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (!isNaN(idx)) switchTo(idx);
    });

    // ─── Play button clicks (within active slide) ────────────────────
    mainEl.addEventListener('click', function(e) {
      const btn = e.target.closest('.testimonial-play-btn');
      if (!btn) return;
      const slide = btn.closest('.testimonial-slide');
      if (!slide) return;

      const video  = slide.querySelector('.testimonial-video');
      const poster = slide.querySelector('.testimonial-poster');
      if (!video) return;

      // Reveal video, hide poster, start playback
      video.classList.remove('hidden');
      if (poster) poster.classList.add('hidden');

      // play() returns a promise — silently handle autoplay rejections
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(function() { /* user gesture required; will retry on next click */ });
      }
    });

    // When a video ends, restore poster so the play button comes back
    slides.forEach(function(slide) {
      const video  = slide.querySelector('.testimonial-video');
      const poster = slide.querySelector('.testimonial-poster');
      if (!video) return;
      video.addEventListener('ended', function() {
        video.classList.add('hidden');
        if (poster) poster.classList.remove('hidden');
      });
    });
  })();
  </script>

<!-- ═══════════════════════════════════════════════════════════════════════ 6.5  INDUSTRIES CAROUSEL ═══
       King Kong "Success Story"-style horizontal carousel.
       - Dark background (with optional WP Media image) so cards pop
       - Each card: 3:4 portrait aspect, large title overlay, optional bg image
       - Auto-play 5s with pause on hover
       - Arrow navigation + dot indicators + native horizontal scroll on mobile
       ─────────────────────────────────────────────────────────────────────── -->
  <section class="relative bg-[var(--color-midnight-logic)] text-white overflow-hidden py-20 lg:py-24">

    <?php if (!empty($industries_bg_url)): ?>
      <img src="<?php echo esc_url($industries_bg_url); ?>" alt="" class="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
      <div class="absolute inset-0 bg-[var(--color-midnight-logic)]/80"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-midnight-logic)]/60 via-[var(--color-midnight-logic)]/70 to-[var(--color-midnight-logic)]/85"></div>
    <?php else: ?>
      <div class="circuit-overlay" aria-hidden="true"></div>
    <?php endif; ?>

    <div class="relative">

      <!-- Section header -->
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div class="max-w-2xl">
            <p class="eyebrow eyebrow-lime mb-3">Industries</p>
            <h2 class="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-white tracking-tight leading-tight">
              We've solved this in:
            </h2>
          </div>

          <!-- Arrow controls (desktop) -->
          <div class="hidden md:flex items-center gap-3" id="ind-carousel-controls">
            <button
              type="button"
              data-action="prev"
              class="flex items-center justify-center w-12 h-12 rounded-full border border-white/25 text-white hover:border-[var(--color-growth-signal)] hover:text-[var(--color-growth-signal)] transition-colors duration-200"
              aria-label="Previous"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
            </button>
            <button
              type="button"
              data-action="next"
              class="flex items-center justify-center w-12 h-12 rounded-full border border-white/25 text-white hover:border-[var(--color-growth-signal)] hover:text-[var(--color-growth-signal)] transition-colors duration-200"
              aria-label="Next"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Carousel track — native horizontal scroll with snap -->
      <div
        id="ind-carousel-track"
        class="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-5 sm:px-8 lg:px-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <?php foreach ($industries as $i => $ind): ?>
          <a
            href="/industries/<?php echo esc_attr($ind['slug']); ?>"
            class="ind-card group relative shrink-0 snap-start w-[78vw] sm:w-[55vw] md:w-[42vw] lg:w-[28vw] xl:w-[24vw] aspect-[3/4] rounded-xl overflow-hidden bg-[var(--color-deep-insight)] hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)]"
          >
            <?php if (!empty($ind['image'])): ?>
              <!-- Background image when URL is set -->
              <img
                src="<?php echo esc_url($ind['image']); ?>"
                alt=""
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                aria-hidden="true"
                loading="lazy"
              />
              <!-- Dark gradient overlay for legibility -->
              <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-midnight-logic)]/40 via-transparent to-[var(--color-midnight-logic)]/85"></div>
            <?php else: ?>
              <!-- Fallback: subtle gradient + brand pattern when no image -->
              <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-deep-insight)] via-[var(--color-midnight-logic)] to-[var(--color-midnight-logic)]"></div>
              <div class="circuit-overlay" aria-hidden="true"></div>
            <?php endif; ?>

            <!-- Content overlay -->
            <div class="absolute inset-0 flex flex-col justify-between p-6 lg:p-7">

              <!-- TOP: number + accent line -->
              <div>
                <span class="inline-block font-display font-bold text-[10px] tracking-[0.2em] text-[var(--color-growth-signal)] mb-2">
                  <?php echo sprintf('%02d', $i + 1); ?>
                </span>
                <div class="w-10 h-px bg-[var(--color-growth-signal)] group-hover:w-16 transition-all duration-300"></div>
              </div>

              <!-- BOTTOM: title + cta arrow -->
              <div>
                <h3 class="font-display font-bold text-2xl sm:text-3xl lg:text-[2rem] text-white tracking-tight leading-[1.05] mb-4 uppercase">
                  <?php echo esc_html($ind['name']); ?>
                </h3>

                <div class="inline-flex items-center gap-2 text-[11px] font-body font-medium uppercase tracking-[0.12em] text-white/85 group-hover:text-[var(--color-growth-signal)] transition-colors">
                  Explore
                  <svg class="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </div>
              </div>
            </div>
          </a>
        <?php endforeach; ?>
      </div>

      <!-- Dot indicators -->
      <div class="flex items-center justify-center gap-2 mt-6" id="ind-carousel-dots">
        <?php foreach ($industries as $i => $ind): ?>
          <button
            type="button"
            data-dot="<?php echo $i; ?>"
            class="ind-dot h-1.5 rounded-full transition-all duration-300 <?php echo $i === 0 ? 'w-8 bg-[var(--color-growth-signal)]' : 'w-1.5 bg-white/30 hover:bg-white/50'; ?>"
            aria-label="Go to slide <?php echo $i + 1; ?>"
          ></button>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════════════ 6.3  POV STATEMENT ═══ -->
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


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.4  CASE STUDY WALL ═══ -->
  <!-- <section id="case-studies" class="bg-[var(--color-paper-soft)] py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-12 max-w-2xl mx-auto">
        <p class="eyebrow eyebrow-blue mb-3">Case Studies</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-[var(--color-midnight-logic)] tracking-tight leading-tight mb-4">They built it. We made the market see it.</h2>
        <p class="text-base text-[var(--color-metric-steel)] leading-relaxed">Eight operators. Eight transformations. Real numbers in USD.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <?php foreach ($case_studies as $i => $cs):
          $bg_class = ($i % 2 === 0) ? 'bg-white' : 'bg-[var(--color-paper-soft)] ring-1 ring-[rgba(26,28,41,0.08)]';
        ?>
          <a href="/case-studies" class="group <?php echo $bg_class; ?> rounded-sm p-6 flex flex-col border border-[rgba(26,28,41,0.08)] hover:border-[var(--color-growth-signal)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-body font-medium uppercase tracking-[0.15em] text-[var(--color-strategic-blue)]"><?php echo esc_html($cs['industry']); ?></span>
              <span class="text-[10px] font-body text-[var(--color-metric-steel)]"><?php echo esc_html($cs['location']); ?></span>
            </div>
            <div class="flex items-center gap-1.5 mb-4" aria-label="Phases delivered">
              <?php for ($p = 1; $p <= 5; $p++):
                $delivered = in_array($p, $cs['phases']);
                $cls = $delivered ? 'bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] border-[var(--color-growth-signal)]' : 'bg-transparent text-[rgba(26,28,41,0.35)] border-[rgba(26,28,41,0.25)]';
              ?>
                <span class="flex items-center justify-center w-6 h-6 rounded-full border text-[10px] font-body font-bold <?php echo $cls; ?>"><?php echo $p; ?></span>
              <?php endfor; ?>
            </div>
            <h3 class="font-display font-bold text-base lg:text-[17px] text-[var(--color-midnight-logic)] leading-[1.25] mb-3"><?php echo esc_html($cs['headline']); ?></h3>
            <p class="text-xs text-[var(--color-metric-steel)] leading-relaxed mb-2"><span class="font-medium text-[var(--color-midnight-logic)]">Challenge:</span> <?php echo esc_html($cs['challenge']); ?></p>
            <p class="text-xs text-[var(--color-metric-steel)] leading-relaxed mb-3"><span class="font-medium text-[var(--color-midnight-logic)]">Transformation:</span> <?php echo esc_html($cs['transformation']); ?></p>
            <div class="mt-auto pt-4 border-t border-[rgba(26,28,41,0.08)]">
              <p class="text-xs font-body font-medium text-[var(--color-midnight-logic)] leading-snug"><?php echo esc_html($cs['proof']); ?></p>
              <span class="mt-3 inline-flex items-center gap-1 text-[11px] font-body font-medium uppercase tracking-[0.08em] text-[var(--color-strategic-blue)] group-hover:text-[var(--color-growth-signal)] transition-colors">
                Read the full story
                <svg class="w-3 h-3 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </span>
            </div>
          </a>
        <?php endforeach; ?>
      </div>

      <div class="text-center mt-12">
        <a href="/case-studies" class="inline-flex items-center gap-2 bg-[var(--color-midnight-logic)] text-white px-6 py-3 rounded-sm font-body font-medium text-[12px] uppercase tracking-[0.05em] hover:bg-[var(--color-deep-insight)] transition-colors duration-200">
          See all case studies
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </a>
      </div>
    </div>
  </section> -->


  

  <!-- Industries carousel controller — vanilla JS, no library deps -->
  <script>
  (function() {
    const track    = document.getElementById('ind-carousel-track');
    const controls = document.getElementById('ind-carousel-controls');
    const dotsBar  = document.getElementById('ind-carousel-dots');
    if (!track) return;

    const cards = track.querySelectorAll('.ind-card');
    const dots  = dotsBar ? dotsBar.querySelectorAll('.ind-dot') : [];
    const total = cards.length;
    if (!total) return;

    let currentIdx = 0;
    let autoTimer  = null;
    const AUTOPLAY_MS = 5000;

    // ─── Helpers ─────────────────────────────────────────────────────
    function getCardWidth() {
      if (cards.length < 2) return cards[0].getBoundingClientRect().width;
      const a = cards[0].getBoundingClientRect();
      const b = cards[1].getBoundingClientRect();
      return b.left - a.left; // includes gap
    }

    function scrollToIndex(idx, smooth) {
      const w = getCardWidth();
      track.scrollTo({ left: idx * w, behavior: smooth ? 'smooth' : 'auto' });
      updateDots(idx);
      currentIdx = idx;
    }

    function updateDots(idx) {
      dots.forEach(function(d, i) {
        const active = (i === idx);
        d.classList.toggle('w-8', active);
        d.classList.toggle('bg-[var(--color-growth-signal)]', active);
        d.classList.toggle('w-1.5', !active);
        d.classList.toggle('bg-white/30', !active);
      });
    }

    function next() {
      const nextIdx = (currentIdx + 1) % total;
      scrollToIndex(nextIdx, true);
    }

    function prev() {
      const prevIdx = (currentIdx - 1 + total) % total;
      scrollToIndex(prevIdx, true);
    }

    // ─── Autoplay ────────────────────────────────────────────────────
    function startAutoplay() {
      stopAutoplay();
      autoTimer = setInterval(next, AUTOPLAY_MS);
    }
    function stopAutoplay() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }

    // ─── Wire up controls ───────────────────────────────────────────
    if (controls) {
      controls.addEventListener('click', function(e) {
        const btn = e.target.closest('button');
        if (!btn) return;
        const act = btn.getAttribute('data-action');
        if (act === 'next') next();
        if (act === 'prev') prev();
        startAutoplay(); // restart timer after manual click
      });
    }

    if (dotsBar) {
      dotsBar.addEventListener('click', function(e) {
        const btn = e.target.closest('button');
        if (!btn) return;
        const idx = parseInt(btn.getAttribute('data-dot'), 10);
        if (!isNaN(idx)) {
          scrollToIndex(idx, true);
          startAutoplay();
        }
      });
    }

    // Pause autoplay on hover
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    // Sync currentIdx + dots when user scrolls manually (touch/drag)
    let scrollDebounce;
    track.addEventListener('scroll', function() {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(function() {
        const w = getCardWidth();
        const idx = Math.round(track.scrollLeft / w);
        if (idx !== currentIdx && idx >= 0 && idx < total) {
          currentIdx = idx;
          updateDots(idx);
        }
      }, 80);
    });

    // Pause autoplay during touch interaction
    track.addEventListener('touchstart', stopAutoplay, { passive: true });
    track.addEventListener('touchend',   startAutoplay, { passive: true });

    // Stop autoplay when tab is hidden, resume when visible
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    });

    // ─── Init ────────────────────────────────────────────────────────
    startAutoplay();
  })();
  </script>


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.6  AUTHORITY ANCHORS ═══ -->
  <section class="relative bg-[var(--color-midnight-logic)] text-white overflow-hidden">

    <?php if (!empty($authority_bg_url)): ?>
      <img src="<?php echo esc_url($authority_bg_url); ?>" alt="" class="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
      <div class="absolute inset-0 bg-[var(--color-midnight-logic)]/75"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-midnight-logic)]/50 via-[var(--color-midnight-logic)]/60 to-[var(--color-midnight-logic)]/80"></div>
    <?php else: ?>
      <div class="circuit-overlay" aria-hidden="true"></div>
    <?php endif; ?>

    <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <p class="eyebrow eyebrow-lime mb-3">Authority</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight">Trusted by the people who train the markets we serve.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

        <!-- Block 1: Antonio Nava (NAMED) -->
        <div class="border-l-2 border-[var(--color-growth-signal)] pl-6">
          <!-- Avatar + badge chip row -->
          <div class="flex items-center gap-3 mb-5">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-strategic-blue)] text-white font-display font-bold text-sm tracking-tight shrink-0">
              AN
            </div>
            <span class="inline-flex items-center px-2.5 py-1 rounded-sm bg-white text-[var(--color-midnight-logic)] text-[10px] font-body font-bold uppercase tracking-[0.12em]">
              NAVA
            </span>
          </div>

          <p class="eyebrow eyebrow-lime mb-3">Tax · Education</p>
          <h3 class="font-display font-bold text-xl text-white mb-3 leading-snug">Antonio Nava</h3>
          <p class="text-sm text-white/70 leading-relaxed mb-4">
            Founder, NAVA Group · IRS EA · Stanford SLEO-Ed Fellow · #1 Best-Seller
          </p>
          <p class="text-sm text-white/85 leading-relaxed">
            Mannie speaks annually at the Tax Colloquium — NAVA School of Business's flagship national training summit — to the Latino tax professional community gathered from across the United States.
          </p>
        </div>

        <!-- Block 2: Laura Elena Martinez (NAMED) -->
        <div class="border-l-2 border-[var(--color-growth-signal)] pl-6">
          <div class="flex items-center gap-3 mb-5">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-[#7E2D3F] text-white font-display font-bold text-sm tracking-tight shrink-0">
              LM
            </div>
            <span class="inline-flex items-center px-2.5 py-1 rounded-sm bg-white text-[var(--color-midnight-logic)] text-[10px] font-body font-bold uppercase tracking-[0.12em]">
              BCA
            </span>
          </div>

          <p class="eyebrow eyebrow-lime mb-3">Business · Education</p>
          <h3 class="font-display font-bold text-xl text-white mb-3 leading-snug">Laura Elena Martinez</h3>
          <p class="text-sm text-white/70 leading-relaxed mb-4">
            Founder, Business Coaching Academy (BPPE) · 24,000+ community
          </p>
          <p class="text-sm text-white/85 leading-relaxed">
            Mannie is the marketing instructor inside Laura Elena's BPPE-recognized 7-week Business Coaching Academy for Latino entrepreneurs — and the annual marketing speaker at her Simposio de Negocios.
          </p>
        </div>

        <!-- Block 3: Dr. Mia Chorney (ANONYMIZED — per brief 8.3) -->
        <div class="border-l-2 border-[var(--color-growth-signal)] pl-6">
          <div class="flex items-center gap-3 mb-5">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-deep-insight)] text-white font-display font-bold text-sm tracking-tight shrink-0">
              HC
            </div>
            <span class="inline-flex items-center px-2.5 py-1 rounded-sm bg-white text-[var(--color-midnight-logic)] text-[10px] font-body font-bold uppercase tracking-[0.12em]">
              AHA
            </span>
          </div>

          <p class="eyebrow eyebrow-lime mb-3">Healthcare · National</p>
          <h3 class="font-display font-bold text-xl text-white mb-3 leading-snug">National Healthcare Leader</h3>
          <p class="text-sm text-white/70 leading-relaxed mb-4">
            Arizona · MD board-certified · Women's health · National platforms
          </p>
          <p class="text-sm text-white/85 leading-relaxed">
            828 builds strategic content and brand foundations for a recognized leader in women's cardiovascular health.
          </p>
        </div>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.7  FINAL CTA — "NO MORE QUIET PHONES" ═══ -->
  <section class="bg-[var(--color-paper-soft)] py-20 lg:py-24">
    <div class="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

      <!-- CTA Card on dark bg with grid texture -->
      <div class="relative overflow-hidden rounded-lg bg-[var(--color-midnight-logic)] text-white px-6 sm:px-10 lg:px-16 py-14 lg:py-20 text-center">
        <div class="circuit-overlay" aria-hidden="true"></div>

        <div class="relative">
          <p class="eyebrow eyebrow-lime mb-5">Tired of guessing?</p>

          <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-6">
            No more quiet phones.
          </h2>

          <p class="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            You've called three agencies. Heard three pitches. Got zero answers about why the market isn't seeing you. We don't pitch. We diagnose.
          </p>

          <a
            href="tel:+19497755940"
            class="group inline-flex items-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-7 py-4 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200"
          >
            Call us now — (949) 775-5940
            <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <p class="mt-6 text-xs text-white/55 italic font-body">
            Free 30-min diagnostic · No pitch · No fluff
          </p>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>