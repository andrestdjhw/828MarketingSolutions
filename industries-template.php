<?php
/**
 * Template Name: Industries (Index)
 *
 * Per brief Section 7.4:
 *   Hero: "We've solved this in:"
 *   8 tiles, each linking to /industries/{slug}.
 *   Only restaurants ships fully at launch; others stub.
 */

require_once get_theme_file_path('/inc/data.php');
get_header();

// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — paste a WP Media Library URL here.
// Leave as '' to use solid Midnight Logic + circuit-pattern fallback.
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = '/wp-content/uploads/2026/05/HomePageHero-scaled.png';

$industries = eight28_get_industries();
?>

<main>

  <!-- ═══════════════════════════════════════════════════════════════════════ HERO ═══ -->
  <section class="relative bg-[var(--color-midnight-logic)] text-white overflow-hidden">

    <?php if (!empty($hero_bg_url)): ?>
      <img src="<?php echo esc_url($hero_bg_url); ?>" alt="" class="absolute inset-0 w-full h-full object-cover object-center" aria-hidden="true" />
      <div class="absolute inset-0 bg-[var(--color-midnight-logic)]/15"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-midnight-logic)]/40 via-[var(--color-midnight-logic)]/55 to-[var(--color-midnight-logic)]/75"></div>
    <?php else: ?>
      <div class="circuit-overlay" aria-hidden="true"></div>
    <?php endif; ?>

    <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28 text-center">
      <p class="eyebrow eyebrow-lime mb-5">Industries</p>
      <h1 class="font-display font-bold text-[2.25rem] sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-6 max-w-4xl mx-auto">
        We've solved this in:
      </h1>
      <p class="text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto">
        Eight categories. Same emotion. Same diagnosis. Different operations.
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ GRID ═══ -->
  <section class="bg-[var(--color-paper-soft)] py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        <?php foreach ($industries as $i => $ind): ?>
          <a
            href="/industries/<?php echo esc_attr($ind['slug']); ?>"
            class="group relative bg-white rounded-sm p-7 flex flex-col border border-[rgba(26,28,41,0.08)] hover:border-[var(--color-growth-signal)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 min-h-[300px]"
          >
            <span class="text-[10px] font-body font-medium text-[var(--color-strategic-blue)] mb-4 tracking-[0.15em]">
              <?php echo sprintf('%02d', $i + 1); ?>
            </span>

            <h3 class="font-display font-bold text-xl lg:text-[22px] text-[var(--color-midnight-logic)] leading-tight mb-4">
              <?php echo esc_html($ind['name']); ?>
            </h3>

            <p class="text-[13px] text-[var(--color-metric-steel)] leading-relaxed flex-1">
              <?php echo esc_html($ind['copy']); ?>
            </p>

            <div class="mt-5 pt-4 border-t border-[rgba(26,28,41,0.08)] flex items-center justify-between">
              <span class="text-[11px] font-body font-medium uppercase tracking-[0.08em] text-[var(--color-strategic-blue)] group-hover:text-[var(--color-growth-signal)] transition-colors">
                Explore the industry
              </span>
              <svg class="w-4 h-4 text-[var(--color-strategic-blue)] group-hover:text-[var(--color-growth-signal)] transform transition-all duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ POV BLOCK ═══ -->
  <section class="bg-[var(--color-paper)] py-20 lg:py-24">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
      <p class="eyebrow eyebrow-blue mb-4">Why eight, not one</p>
      <p class="font-display text-xl lg:text-2xl text-[var(--color-midnight-logic)] leading-relaxed">
        828 doesn't segment by industry. We segment by emotion. These eight categories are proof the same diagnosis applies broadly — not gates the visitor must pass.
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ FINAL CTA ═══ -->
  <section class="bg-[var(--color-midnight-logic)] text-white">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24 text-center">
      <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6">
        Your industry isn't the gate. The diagnosis is.
      </h2>
      <p class="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
        We start every engagement with the Industry Intelligence Report — the diagnostic that tells us exactly why the market isn't seeing you yet.
      </p>
      <a href="/contact" class="group inline-flex items-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-7 py-4 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200">
        Book a Strategy Call
        <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
      </a>
    </div>
  </section>

</main>

<?php get_footer(); ?>