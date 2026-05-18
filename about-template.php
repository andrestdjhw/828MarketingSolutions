<?php
/**
 * Template Name: About
 *
 * Per brief Section 7.3:
 *   Hero: "We exist because the market is bigger than your competition realizes."
 *   Manuel's POV letter (~500 words placeholder)
 *   Team grid
 *   "What we believe" 3-5 principles (placeholder)
 *   Market opportunity block ($800B / 7.7% / $102B)
 *   Authority Anchors section (full version)
 *   Final CTA
 */

get_header();

// ───────────────────────────────────────────────────────────────────────────
// HERO BACKGROUND IMAGE — paste a WP Media Library URL here.
// Leave as '' to use solid Midnight Logic + circuit-pattern fallback.
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = '/wp-content/uploads/2026/05/HomePageHero-scaled.png';

// ───────────────────────────────────────────────────────────────────────────
// TEAM — edit names/roles here. Photos: when Manuel provides, change `photo_url`
// from empty string to '/wp-content/uploads/2026/05/team-paulina.jpg' etc.
// Fallback: initials in circle avatar (rendered automatically when photo_url is empty)
// ───────────────────────────────────────────────────────────────────────────
$team = [
  ['name' => 'Manuel Luna',     'role' => 'Founder & CEO',           'initials' => 'ML', 'photo_url' => ''],
  ['name' => 'Paulina',         'role' => 'COO',                     'initials' => 'P',  'photo_url' => ''],
  ['name' => 'Eunice',          'role' => 'Director of Strategy',    'initials' => 'E',  'photo_url' => ''],
  ['name' => 'Oscar',           'role' => 'Marketing & Sales',       'initials' => 'O',  'photo_url' => ''],
  ['name' => 'Valeria',         'role' => 'Content',                 'initials' => 'V',  'photo_url' => ''],
  ['name' => 'Angel',           'role' => 'Editor',                  'initials' => 'A',  'photo_url' => ''],
  ['name' => 'Daniel Galaviz',  'role' => 'Website Developer',       'initials' => 'DG', 'photo_url' => ''],
  ['name' => 'Advertising',     'role' => 'Paid Media',              'initials' => 'AD', 'photo_url' => ''],
  ['name' => 'GMB',             'role' => 'Local Presence',          'initials' => 'GM', 'photo_url' => ''],
];

// ───────────────────────────────────────────────────────────────────────────
// PRINCIPLES — replace placeholder copy with Manuel's actual principles.
// 3-5 short principles. Keep each headline under 10 words.
// ───────────────────────────────────────────────────────────────────────────
$principles = [
  [
    'title' => 'The work comes first.',
    'body'  => 'We only take on operators who have already built something real. We don\'t fix bad operations — we make great ones visible.',
  ],
  [
    'title' => 'Data is the diagnosis.',
    'body'  => 'Every engagement starts with Phase 1: the Industry Intelligence Report. Strategy without diagnosis is guessing.',
  ],
  [
    'title' => 'Visibility, not virality.',
    'body'  => 'We don\'t chase trends or viral moments. We build the system that makes the right people see you, consistently.',
  ],
  [
    'title' => 'USD or nothing.',
    'body'  => 'Every metric we report is normalized to US dollars. No vanity numbers. No currency tricks. Real money, real results.',
  ],
  [
    'title' => 'Bilingual is not optional.',
    'body'  => 'The Hispanic market thinks in two languages. So do we. Every strategy, every campaign, every report — fluent in both.',
  ],
];
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
      <p class="eyebrow eyebrow-lime mb-5">About</p>
      <h1 class="font-display font-bold text-[2rem] sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-[1.1] tracking-tight text-white mb-6 max-w-4xl mx-auto">
        We exist because the market is bigger than your competition realizes.
      </h1>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ MANUEL'S POV LETTER ═══ -->
  <section class="bg-[var(--color-paper)] py-20 lg:py-24">
    <div class="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">

      <div class="mb-10">
        <p class="eyebrow eyebrow-blue mb-3">From the founder</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-[var(--color-midnight-logic)] tracking-tight leading-tight">
          A letter from Manuel.
        </h2>
      </div>

      <!--
        ═══════════════════════════════════════════════════════════════════════
        POV LETTER PLACEHOLDER — Manuel writes this himself (~500 words).
        Replace the paragraphs below with the final letter when delivered.
        Per brief Section 7.3: 4–6 paragraphs.
        ═══════════════════════════════════════════════════════════════════════
      -->
      <div class="space-y-5 text-base lg:text-[17px] text-[var(--color-midnight-logic)] leading-relaxed font-body">
        <p class="font-display text-xl lg:text-2xl text-[var(--color-midnight-logic)] leading-snug italic mb-2">
          [POV LETTER — Manuel writes this]
        </p>

        <p>
          [Paragraph 1 — The moment Manuel realized the agency had to exist. The pattern he kept seeing in Hispanic-market operators: they built something real, the market wasn't seeing it, and they were tired of guessing why. ~80 words.]
        </p>

        <p>
          [Paragraph 2 — Why most marketing agencies don't solve this. They sell tactics. They sell deliverables. They don't sell visibility for businesses that already deserve it. ~80 words.]
        </p>

        <p>
          [Paragraph 3 — The 5-Phase Ecosystem as the answer. Intelligence → Brand → Website → Presence → Acceleration. The diagnostic comes first. The treatment comes second. ~80 words.]
        </p>

        <p>
          [Paragraph 4 — Who 828 is for. Not segmented by industry or company size. Segmented by emotion. The operator who has outworked their competition but isn't winning the market they deserve. ~80 words.]
        </p>

        <p>
          [Paragraph 5 — The Romans 8:28 foundation. "All things work together for good when aligned with a purpose." Why this matters to the work. ~60 words.]
        </p>

        <p class="font-display font-bold text-lg text-[var(--color-midnight-logic)]">
          — Manuel Luna<br />
          <span class="font-body font-normal text-sm text-[var(--color-metric-steel)]">Founder & CEO, 828 Marketing Solutions</span>
        </p>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ WHAT WE BELIEVE ═══ -->
  <section class="bg-[var(--color-paper-soft)] py-20 lg:py-24">
    <div class="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

      <div class="text-center mb-12 max-w-2xl mx-auto">
        <p class="eyebrow eyebrow-blue mb-3">What we believe</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-[var(--color-midnight-logic)] tracking-tight leading-tight">
          Five principles that hold the work together.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <?php foreach ($principles as $i => $p): ?>
          <div class="bg-white rounded-sm p-6 border-l-4 border-[var(--color-growth-signal)]">
            <p class="eyebrow eyebrow-lime mb-3"><?php echo sprintf('Principle %02d', $i + 1); ?></p>
            <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] leading-tight mb-3">
              <?php echo esc_html($p['title']); ?>
            </h3>
            <p class="text-sm text-[var(--color-metric-steel)] leading-relaxed">
              <?php echo esc_html($p['body']); ?>
            </p>
          </div>
        <?php endforeach; ?>
      </div>

      <p class="text-center text-xs text-[var(--color-metric-steel)] italic mt-6">
        Principles above are placeholder. Manuel writes the final version.
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ TEAM GRID ═══ -->
  <section class="bg-[var(--color-paper)] py-20 lg:py-24">
    <div class="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

      <div class="text-center mb-12 max-w-2xl mx-auto">
        <p class="eyebrow eyebrow-blue mb-3">The team</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-[var(--color-midnight-logic)] tracking-tight leading-tight">
          The operators behind the operators.
        </h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
        <?php foreach ($team as $member): ?>
          <div class="text-center">
            <?php if (!empty($member['photo_url'])): ?>
              <div class="aspect-square w-full max-w-[180px] mx-auto mb-4 overflow-hidden rounded-sm bg-[var(--color-paper-soft)]">
                <img src="<?php echo esc_url($member['photo_url']); ?>" alt="<?php echo esc_attr($member['name']); ?>" class="w-full h-full object-cover" />
              </div>
            <?php else: ?>
              <!-- Initials avatar fallback -->
              <div class="aspect-square w-full max-w-[180px] mx-auto mb-4 rounded-sm bg-[var(--color-midnight-logic)] flex items-center justify-center">
                <span class="font-display font-bold text-3xl lg:text-4xl text-[var(--color-growth-signal)]">
                  <?php echo esc_html($member['initials']); ?>
                </span>
              </div>
            <?php endif; ?>

            <h3 class="font-display font-bold text-base lg:text-lg text-[var(--color-midnight-logic)] leading-tight mb-1">
              <?php echo esc_html($member['name']); ?>
            </h3>
            <p class="text-xs text-[var(--color-metric-steel)] uppercase tracking-[0.08em]">
              <?php echo esc_html($member['role']); ?>
            </p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ MARKET OPPORTUNITY ═══ -->
  <section class="relative bg-[var(--color-deep-insight)] text-white overflow-hidden">
    <div class="circuit-overlay" aria-hidden="true"></div>
    <div class="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">

      <div class="text-center mb-12 max-w-3xl mx-auto">
        <p class="eyebrow eyebrow-lime mb-3">Market Opportunity</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight">
          Why 828 exists, and why now.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

        <div class="text-center">
          <p class="font-display font-bold text-5xl lg:text-6xl text-[var(--color-growth-signal)] mb-3 tracking-tight">
            $800B
          </p>
          <h3 class="font-display font-bold text-base text-white mb-2">
            Hispanic-owned business contribution
          </h3>
          <p class="text-sm text-white/70 leading-relaxed">
            Annual contribution of Hispanic-owned businesses to the US economy.
          </p>
        </div>

        <div class="text-center md:border-l md:border-r md:border-white/15 md:px-8">
          <p class="font-display font-bold text-5xl lg:text-6xl text-[var(--color-growth-signal)] mb-3 tracking-tight">
            7.7%
          </p>
          <h3 class="font-display font-bold text-base text-white mb-2">
            Growth rate vs 0.46%
          </h3>
          <p class="text-sm text-white/70 leading-relaxed">
            Hispanic-owned business growth rate, versus 0.46% for all US businesses.
          </p>
        </div>

        <div class="text-center">
          <p class="font-display font-bold text-5xl lg:text-6xl text-[var(--color-growth-signal)] mb-3 tracking-tight">
            $102B
          </p>
          <h3 class="font-display font-bold text-base text-white mb-2">
            Visibility gap
          </h3>
          <p class="text-sm text-white/70 leading-relaxed">
            Estimated annual revenue Hispanic-market operators lose to better-marketed competitors.
          </p>
        </div>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ AUTHORITY ANCHORS (FULL) ═══ -->
  <section class="bg-[var(--color-midnight-logic)] text-white relative overflow-hidden">
    <div class="circuit-overlay" aria-hidden="true"></div>
    <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">

      <div class="text-center mb-12 max-w-3xl mx-auto">
        <p class="eyebrow eyebrow-lime mb-3">Authority</p>
        <h2 class="font-display font-bold text-3xl lg:text-4xl text-white tracking-tight leading-tight">
          Trusted by the people who train the markets we serve.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

        <div class="border-l-2 border-[var(--color-growth-signal)] pl-6">
          <p class="eyebrow eyebrow-lime mb-3">Tax · Education</p>
          <h3 class="font-display font-bold text-xl text-white mb-2 leading-snug">Antonio Nava</h3>
          <p class="text-sm text-white/70 leading-relaxed mb-4">
            Founder, The NAVA Group Co · IRS Enrolled Agent · Stanford SLEO-Ed Fellow · Fellow of the National Tax Practice Institute · #1 International Best-Selling Author
          </p>
          <p class="text-sm text-white/85 leading-relaxed mb-3">
            Antonio Nava is the national instructor who trains Latino tax professionals across the United States and internationally (most recently Madrid; September 2026 next).
          </p>
          <p class="text-sm text-white/85 leading-relaxed">
            Mannie speaks annually at the Tax Colloquium — NAVA School of Business's flagship national training summit — to the Latino tax professional community gathered from across the country.
          </p>
        </div>

        <div class="border-l-2 border-[var(--color-growth-signal)] pl-6">
          <p class="eyebrow eyebrow-lime mb-3">Business · Education</p>
          <h3 class="font-display font-bold text-xl text-white mb-2 leading-snug">Laura Elena Martinez</h3>
          <p class="text-sm text-white/70 leading-relaxed mb-4">
            California's most influential Latino business educator · Business Coaching Academy (BPPE-recognized) · Host, Simposio de Negocios · 24,000+ community
          </p>
          <p class="text-sm text-white/85 leading-relaxed mb-3">
            Mannie has two ongoing roles in Laura Elena's ecosystem: annual speaker at the Simposio de Negocios, and marketing class instructor inside the BPPE-recognized 7-week Business Coaching Academy.
          </p>
          <p class="text-sm text-white/85 leading-relaxed">
            Together, the relationship reaches Latino entrepreneurs from across the state of California.
          </p>
        </div>

        <div class="border-l-2 border-[var(--color-growth-signal)] pl-6">
          <p class="eyebrow eyebrow-lime mb-3">Healthcare · National</p>
          <h3 class="font-display font-bold text-xl text-white mb-2 leading-snug">National Healthcare Thought Leader</h3>
          <p class="text-sm text-white/70 leading-relaxed mb-4">
            Arizona · MD board-certified executive · Featured in national women's health summits and consumer health technology platforms
          </p>
          <p class="text-sm text-white/85 leading-relaxed">
            828 builds strategic content and brand foundations for a recognized national leader in women's cardiovascular health — supporting board governance, AI healthcare applications, and consumer-facing wellness platforms.
          </p>
        </div>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════ FINAL CTA ═══ -->
  <section class="bg-[var(--color-midnight-logic)] text-white border-t border-white/10">
    <div class="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24 text-center">
      <h2 class="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6">
        Ready to find out what the market is actually seeing?
      </h2>
      <p class="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
        No pitch. No fluff. Just the diagnosis.
      </p>
      <a href="/contact" class="group inline-flex items-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-7 py-4 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200">
        Book a Strategy Call
        <svg class="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
      </a>
    </div>
  </section>

</main>

<?php get_footer(); ?>