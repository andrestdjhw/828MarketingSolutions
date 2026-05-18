<?php
/**
 * Template Name: Case Studies
 *
 * Per brief Section 7.1:
 *   Hero: "Real businesses. Real transformations. No marketing speak."
 *   Filter bar by industry.
 *   Same card layout as homepage 6.4 — all 8 launch cards.
 *   Final CTA same as homepage 6.7.
 */

require_once get_theme_file_path('/inc/data.php');
get_header();

// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — paste a WP Media Library URL here.
// Leave as '' to use solid Midnight Logic + circuit-pattern fallback.
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = '/wp-content/uploads/2026/05/HomePageHero-scaled.png';

$case_studies = eight28_get_case_studies();

// Unique industries for the filter bar (in order they appear in case studies)
$filter_industries = [];
foreach ($case_studies as $cs) {
  if (!isset($filter_industries[$cs['industry_slug']])) {
    $filter_industries[$cs['industry_slug']] = $cs['industry'];
  }
}
?>

<main>

  <!-- ═══════════════════════════════════════════════════════════════════════ HERO ═══ -->
  <section class="relative bg-[var(--color-midnight-logic)] text-white overflow-hidden">

    <?php if (!empty($hero_bg_url)): ?>
      <img src="<?php echo esc_url($hero_bg_url); ?>" alt="" class="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
      <div class="absolute inset-0 bg-[var(--color-midnight-logic)]/25"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-midnight-logic)]/40 via-[var(--color-midnight-logic)]/55 to-[var(--color-midnight-logic)]/75"></div>
    <?php else: ?>
      <div class="circuit-overlay" aria-hidden="true"></div>
    <?php endif; ?>

    <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24 text-center">
      <p class="eyebrow eyebrow-lime mb-5">Case Studies</p>
      <h1 class="font-display font-bold text-[2.25rem] sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-6 max-w-4xl mx-auto">
        Real businesses. Real transformations. No marketing speak.
      </h1>
      <p class="text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
        Eight operators. Eight visibility transformations. All metrics in USD.
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ FILTER BAR ═══ -->
  <section class="bg-[var(--color-paper-soft)] border-b border-[rgba(26,28,41,0.06)] sticky top-20 lg:top-24 z-30 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4">
      <div class="flex items-center gap-2 overflow-x-auto" id="cs-filter-bar">
        <button
          type="button"
          data-filter="all"
          class="cs-filter-btn px-4 py-2 rounded-sm text-[11px] font-body font-medium uppercase tracking-[0.08em] border border-[var(--color-midnight-logic)] bg-[var(--color-midnight-logic)] text-white whitespace-nowrap transition-all duration-150"
        >
          All
        </button>
        <?php foreach ($filter_industries as $slug => $name): ?>
          <button
            type="button"
            data-filter="<?php echo esc_attr($slug); ?>"
            class="cs-filter-btn px-4 py-2 rounded-sm text-[11px] font-body font-medium uppercase tracking-[0.08em] border border-[rgba(26,28,41,0.15)] bg-white text-[var(--color-midnight-logic)] whitespace-nowrap hover:border-[var(--color-midnight-logic)] transition-all duration-150"
          >
            <?php echo esc_html($name); ?>
          </button>
        <?php endforeach; ?>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ GRID ═══ -->
  <section class="bg-[var(--color-paper-soft)] py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div id="cs-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <?php foreach ($case_studies as $i => $cs):
          $bg_class = ($i % 2 === 0) ? 'bg-white' : 'bg-[var(--color-paper-soft)] ring-1 ring-[rgba(26,28,41,0.08)]';
        ?>
          <div class="cs-card" data-industry="<?php echo esc_attr($cs['industry_slug']); ?>">
            <a href="/contact?client=<?php echo esc_attr(sprintf('case-%02d', $i + 1)); ?>" class="group <?php echo $bg_class; ?> rounded-sm p-6 flex flex-col border border-[rgba(26,28,41,0.08)] hover:border-[var(--color-growth-signal)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 h-full">
              <div class="flex items-center justify-between mb-4">
                <span class="text-[10px] font-body font-medium uppercase tracking-[0.15em] text-[var(--color-strategic-blue)]"><?php echo esc_html($cs['industry']); ?></span>
                <span class="text-[10px] font-body text-[var(--color-metric-steel)]"><?php echo esc_html($cs['location']); ?></span>
              </div>
              <div class="flex items-center gap-1.5 mb-4">
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
          </div>
        <?php endforeach; ?>
      </div>

      <!-- Empty state -->
      <p id="cs-empty" class="hidden text-center py-12 text-base text-[var(--color-metric-steel)]">
        No case studies match this filter yet. Try another industry or view all.
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ FINAL CTA ═══ -->
  <section class="bg-[var(--color-midnight-logic)] text-white">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24 text-center">
      <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6">Want to be the next transformation?</h2>
      <p class="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">We'll show you what the market is actually seeing about your business right now — and what to do about it. No pitch. No fluff. Just the diagnosis.</p>
      <a href="/contact" class="group inline-flex items-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-7 py-4 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200">
        Book a Strategy Call
        <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
      </a>
    </div>
  </section>

</main>

<!-- ─── Filter bar interactivity (vanilla JS, no React mount needed) ─── -->
<script>
(function() {
  var bar = document.getElementById('cs-filter-bar');
  var cards = document.querySelectorAll('.cs-card');
  var emptyEl = document.getElementById('cs-empty');
  if (!bar) return;

  bar.addEventListener('click', function(e) {
    var btn = e.target.closest('button.cs-filter-btn');
    if (!btn) return;
    var filter = btn.getAttribute('data-filter');

    // Toggle active styles
    bar.querySelectorAll('.cs-filter-btn').forEach(function(b) {
      b.classList.remove('bg-[var(--color-midnight-logic)]', 'text-white');
      b.classList.add('bg-white', 'text-[var(--color-midnight-logic)]', 'border-[rgba(26,28,41,0.15)]');
      b.classList.remove('border-[var(--color-midnight-logic)]');
    });
    btn.classList.remove('bg-white', 'text-[var(--color-midnight-logic)]', 'border-[rgba(26,28,41,0.15)]');
    btn.classList.add('bg-[var(--color-midnight-logic)]', 'text-white', 'border-[var(--color-midnight-logic)]');

    // Filter cards
    var visible = 0;
    cards.forEach(function(card) {
      var match = (filter === 'all' || card.getAttribute('data-industry') === filter);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    if (emptyEl) emptyEl.classList.toggle('hidden', visible > 0);
  });
})();
</script>

<?php get_footer(); ?>