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
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 lg:items-stretch">

        <!-- LEFT -->
        <div class="lg:col-span-6 flex flex-col lg:justify-between">
          <div>
            <h1 class="font-display font-bold text-[2rem] sm:text-4xl lg:text-[2.5rem] xl:text-[3rem] leading-[1.05] tracking-tight mb-5">
              <span class="text-[var(--color-growth-signal)]">You built something real.</span><br />
              <span class="text-white/85">Why doesn't the market see it yet?</span>
            </h1>
          </div>

          <div class="lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:py-3">
            <div class="space-y-3 max-w-2xl">
              <p class="text-sm lg:text-base text-white/85 leading-relaxed">
                You've worked harder than your competition. Your product is better. Your service is sharper. But somehow, the calls aren't coming in like they should. The market isn't seeing what you've built. And you're tired of guessing what's wrong.
              </p>
              <p class="text-sm lg:text-base font-medium text-white leading-relaxed">That's what we fix.</p>
              <p class="text-sm lg:text-base text-white/85 leading-relaxed">
                828 builds the growth system that makes the market finally see and choose what you've already built.
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0">
            <a href="#case-studies" class="group inline-flex items-center justify-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-6 py-3 rounded-sm font-body font-medium text-[12px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200">
              Watch how we did it
              <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
            </a>
            <a href="/contact" class="group inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 rounded-sm font-body font-medium text-[12px] uppercase tracking-[0.05em] border border-[var(--color-growth-signal)] hover:bg-[var(--color-growth-signal)] hover:text-[var(--color-midnight-logic)] transition-all duration-200">
              Book a Strategy Call
              <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </div>
        </div>

        <!-- RIGHT: ContactForm -->
        <div class="lg:col-span-6">
          <div class="render-contact-form"></div>
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.2  PROMISE BAR ═══ -->
  <section class="bg-[var(--color-paper)] border-b border-[rgba(26,28,41,0.06)]">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        <div class="md:px-8 lg:px-10 md:border-r md:border-[var(--color-growth-signal)]/40 first:md:pl-0 first:md:border-l-0">
          <h3 class="font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-3 leading-tight">The work is yours.<br />The visibility is ours.</h3>
          <p class="text-[15px] text-[var(--color-metric-steel)] leading-relaxed">You built it. We make sure the market sees it.</p>
        </div>
        <div class="md:px-8 lg:px-10 md:border-r md:border-[var(--color-growth-signal)]/40">
          <h3 class="font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-3 leading-tight">You built it.</h3>
          <p class="text-[15px] text-[var(--color-metric-steel)] leading-relaxed">We make sure the market sees it.</p>
        </div>
        <div class="md:px-8 lg:px-10 last:md:pr-0">
          <h3 class="font-display font-bold text-xl lg:text-2xl text-[var(--color-midnight-logic)] mb-3 leading-tight">Better doesn't mean chosen.</h3>
          <p class="text-[15px] text-[var(--color-metric-steel)] leading-relaxed">Chosen is what we build.</p>
        </div>
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
        We don't make your business worth choosing we make sure the market sees it's already worth choosing.
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.4  CASE STUDY WALL ═══ -->
  <section id="case-studies" class="bg-[var(--color-paper-soft)] py-20 lg:py-24">
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
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.5  INDUSTRIES GRID ═══ -->
  <section class="bg-[var(--color-paper)] py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="text-center mb-12 max-w-2xl mx-auto">
        <p class="eyebrow eyebrow-blue mb-3">Industries</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-[var(--color-midnight-logic)] tracking-tight leading-tight">We've solved this in:</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <?php foreach ($industries as $i => $ind): ?>
          <a href="/industries/<?php echo esc_attr($ind['slug']); ?>" class="group relative bg-[var(--color-paper-soft)] rounded-sm p-6 flex flex-col border border-[rgba(26,28,41,0.08)] hover:border-[var(--color-growth-signal)] hover:-translate-y-0.5 transition-all duration-200 min-h-[240px]">
            <span class="text-[10px] font-body font-medium text-[var(--color-strategic-blue)] mb-3"><?php echo sprintf('%02d', $i + 1); ?></span>
            <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] leading-tight mb-3"><?php echo esc_html($ind['name']); ?></h3>
            <p class="text-xs text-[var(--color-metric-steel)] leading-relaxed flex-1"><?php echo esc_html($ind['copy']); ?></p>
            <div class="mt-4 inline-flex items-center gap-1 text-[11px] font-body font-medium uppercase tracking-[0.08em] text-[var(--color-strategic-blue)] group-hover:text-[var(--color-growth-signal)] transition-colors">
              Explore
              <svg class="w-3 h-3 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.6  AUTHORITY ANCHORS ═══ -->
  <section class="relative bg-[var(--color-midnight-logic)] text-white overflow-hidden">
    <div class="circuit-overlay" aria-hidden="true"></div>
    <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <p class="eyebrow eyebrow-lime mb-3">Authority</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight">Trusted by the people who train the markets we serve.</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        <div class="border-l-2 border-[var(--color-growth-signal)] pl-6">
          <p class="eyebrow eyebrow-lime mb-3">Tax · Education</p>
          <h3 class="font-display font-bold text-xl text-white mb-2 leading-snug">Antonio Nava</h3>
          <p class="text-sm text-white/70 leading-relaxed mb-4">Founder, The NAVA Group Co · IRS Enrolled Agent · Stanford SLEO-Ed Fellow · #1 International Best-Selling Author</p>
          <p class="text-sm text-white/85 leading-relaxed">Mannie speaks annually at the Tax Colloquium — NAVA School of Business's flagship national training summit — to the Latino tax professional community gathered from across the United States.</p>
        </div>
        <div class="border-l-2 border-[var(--color-growth-signal)] pl-6">
          <p class="eyebrow eyebrow-lime mb-3">Business · Education</p>
          <h3 class="font-display font-bold text-xl text-white mb-2 leading-snug">Laura Elena Martinez</h3>
          <p class="text-sm text-white/70 leading-relaxed mb-4">Founder, Business Coaching Academy (BPPE-recognized) · Host, Simposio de Negocios · 24,000+ community</p>
          <p class="text-sm text-white/85 leading-relaxed">Mannie is the marketing instructor inside Laura Elena's BPPE-recognized 7-week Business Coaching Academy for Latino entrepreneurs — and the annual marketing speaker at her Simposio de Negocios.</p>
        </div>
        <div class="border-l-2 border-[var(--color-growth-signal)] pl-6">
          <p class="eyebrow eyebrow-lime mb-3">Healthcare · National</p>
          <h3 class="font-display font-bold text-xl text-white mb-2 leading-snug">National Healthcare Thought Leader</h3>
          <p class="text-sm text-white/70 leading-relaxed mb-4">Arizona · MD board-certified executive · Featured in national women's health summits and consumer health technology platforms</p>
          <p class="text-sm text-white/85 leading-relaxed">828 builds strategic content and brand foundations for a recognized leader in women's cardiovascular health.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ 6.7  FINAL CTA ═══ -->
  <section class="bg-[var(--color-midnight-logic)] text-white">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24 text-center">
      <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6">Ready to find out what the market is actually seeing about your business?</h2>
      <p class="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">We'll show you what the market is actually seeing about your business right now — and what to do about it. No pitch. No fluff. Just the diagnosis.</p>
      <a href="/contact" class="group inline-flex items-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-7 py-4 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200">
        Book a Strategy Call
        <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
      </a>
    </div>
  </section>

</main>

<?php get_footer(); ?>