<?php
/**
 * Template Name: How We Work
 *
 * Per brief Section 7.2:
 *   Hero: "The 828 5-Phase Ecosystem"
 *   Subhead: "How we take a business from invisible to chosen."
 *   Full-page vertical flow of all 5 phases.
 *   Callout between Phase 3 and Phase 4.
 *   Final CTA: "Start with Phase 1."
 */

require_once get_theme_file_path('/inc/data.php');
get_header();

// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — paste a WP Media Library URL here.
// Leave as '' to use solid Midnight Logic + circuit-pattern fallback.
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = '/wp-content/uploads/2026/05/HomePageHero-scaled.png';

$phases = eight28_get_phases();
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
      <p class="eyebrow eyebrow-lime mb-5">How We Work</p>
      <h1 class="font-display font-bold text-[2.25rem] sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-white mb-6 max-w-4xl mx-auto">
        The 828 <span class="text-[var(--color-growth-signal)]">5-Phase Ecosystem.</span>
      </h1>
      <p class="text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
        How we take a business from invisible to chosen.
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ PHASES ═══ -->
  <?php foreach ($phases as $i => $phase):
    $is_last = ($i === count($phases) - 1);
    $bg_alt = ($i % 2 === 0); // alternating backgrounds
    $section_bg = $bg_alt ? 'bg-[var(--color-paper)]' : 'bg-[var(--color-paper-soft)]';
  ?>
    <section class="<?php echo $section_bg; ?> py-20 lg:py-24 border-b border-[rgba(26,28,41,0.05)] relative">
      <div class="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          <!-- LEFT: number + name -->
          <div class="lg:col-span-4">
            <div class="sticky top-28">
              <div class="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[var(--color-midnight-logic)] text-[var(--color-growth-signal)] mb-6">
                <span class="font-display font-bold text-2xl lg:text-3xl"><?php echo sprintf('%02d', $phase['num']); ?></span>
              </div>
              <p class="eyebrow eyebrow-blue mb-2">Phase <?php echo $phase['num']; ?></p>
              <h2 class="font-display font-bold text-3xl lg:text-4xl text-[var(--color-midnight-logic)] tracking-tight leading-tight mb-3">
                <?php echo esc_html($phase['name']); ?>
              </h2>
              <p class="text-sm text-[var(--color-metric-steel)] font-medium">
                <?php echo esc_html($phase['label']); ?>
              </p>
            </div>
          </div>

          <!-- RIGHT: content -->
          <div class="lg:col-span-8 space-y-8">

            <!-- Customer-voice description -->
            <div>
              <p class="font-display text-xl lg:text-2xl text-[var(--color-midnight-logic)] leading-snug italic">
                "<?php echo esc_html($phase['voice']); ?>"
              </p>
            </div>

            <!-- What's included (bullets) -->
            <div>
              <p class="eyebrow eyebrow-blue mb-4">What's included</p>
              <ul class="space-y-2.5">
                <?php foreach ($phase['bullets'] as $b): ?>
                  <li class="flex items-start gap-3 text-base text-[var(--color-midnight-logic)] leading-relaxed">
                    <span class="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-growth-signal)]/15 mt-1 shrink-0">
                      <svg class="w-2.5 h-2.5 text-[var(--color-growth-signal)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span><?php echo esc_html($b); ?></span>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>

            <!-- Deliverable -->
            <div class="bg-white rounded-sm p-6 border-l-4 border-[var(--color-growth-signal)]">
              <p class="eyebrow eyebrow-lime mb-2">The Deliverable</p>
              <p class="text-base text-[var(--color-midnight-logic)] leading-relaxed">
                <?php echo esc_html($phase['deliverable']); ?>
              </p>
            </div>

            <!-- Timeline + Next -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <p class="eyebrow eyebrow-blue mb-2">Timeline</p>
                <p class="text-base font-display font-bold text-[var(--color-midnight-logic)]">
                  <?php echo esc_html($phase['timeline']); ?>
                </p>
              </div>
              <div>
                <p class="eyebrow eyebrow-blue mb-2">What comes next</p>
                <p class="text-sm text-[var(--color-metric-steel)] leading-relaxed">
                  <?php echo esc_html($phase['next']); ?>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <?php if ($phase['num'] === 3): ?>
      <!-- ═══ Callout between Phase 3 and Phase 4 (brief 7.2) ═══ -->
      <section class="bg-[var(--color-midnight-logic)] text-white relative overflow-hidden">
        <div class="circuit-overlay" aria-hidden="true"></div>
        <div class="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16 text-center">
          <div class="gs-divider w-16 mx-auto mb-6"></div>
          <p class="font-display text-xl lg:text-2xl text-white leading-snug">
            Most clients start with <span class="text-[var(--color-growth-signal)]">Phase 1</span> — the Industry Intelligence Report. It's the diagnosis before the treatment.
          </p>
          <div class="gs-divider w-16 mx-auto mt-6"></div>
        </div>
      </section>
    <?php endif; ?>
  <?php endforeach; ?>


  <!-- ═══════════════════════════════════════════════════════════════════════ FINAL CTA ═══ -->
  <section class="bg-[var(--color-midnight-logic)] text-white">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24 text-center">
      <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6">
        Start with <span class="text-[var(--color-growth-signal)]">Phase 1.</span>
      </h2>
      <p class="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
        The Industry Intelligence Report is the diagnostic gate. We figure out exactly why the market isn't seeing you — and the order to fix it.
      </p>
      <a href="/contact" class="group inline-flex items-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-7 py-4 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200">
        Book a Strategy Call
        <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
      </a>
    </div>
  </section>

</main>

<?php get_footer(); ?>