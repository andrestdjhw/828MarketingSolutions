<?php
/**
 * Template Name: Terms & Conditions
 *
 * Standalone legal page for /terms-conditions.
 *
 * Content: 9-section baseline T&C for US-based marketing agency
 * (governing law = California). Covers acceptance, services description,
 * user responsibilities, IP, disclaimers, liability limits, indemnification,
 * dispute resolution, and amendments.
 *
 * IMPORTANT: This is a BASELINE draft. Manuel should have it reviewed by
 * qualified legal counsel before relying on it. The form's consent checkbox
 * already links here, so the page must exist and be substantive.
 */

get_header();

// ───────────────────────────────────────────────────────────────────────────
// Last-updated date — change when amended.
// ───────────────────────────────────────────────────────────────────────────
$last_updated = 'May 2026';

// ───────────────────────────────────────────────────────────────────────────
// Hero background image (leave '' for solid Midnight Logic + circuit pattern).
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = '/wp-content/uploads/2026/05/HomePageHero-scaled.png';

// ───────────────────────────────────────────────────────────────────────────
// TOC sections — sidebar nav stays in sync with article anchors.
// ───────────────────────────────────────────────────────────────────────────
$sections = [
  ['id' => 'acceptance',          'title' => '1. Acceptance of Terms'],
  ['id' => 'services',            'title' => '2. Description of Services'],
  ['id' => 'responsibilities',    'title' => '3. User Responsibilities'],
  ['id' => 'intellectual-property', 'title' => '4. Intellectual Property'],
  ['id' => 'disclaimers',         'title' => '5. Disclaimers'],
  ['id' => 'liability',           'title' => '6. Limitation of Liability'],
  ['id' => 'indemnification',     'title' => '7. Indemnification'],
  ['id' => 'governing-law',       'title' => '8. Governing Law & Disputes'],
  ['id' => 'changes',             'title' => '9. Changes to These Terms'],
  ['id' => 'contact',             'title' => '10. Contact Us'],
];
?>

<main id="primary">

  <!-- ═══════════════════════════════════════════════════════════════════════
       HERO — Midnight Logic, eyebrow + headline + last updated
       ════════════════════════════════════════════════════════════════════ -->
  <section class="relative bg-[var(--color-midnight-logic)] text-white overflow-hidden">
    <?php if ($hero_bg_url): ?>
      <div class="absolute inset-0">
        <img src="<?php echo esc_url($hero_bg_url); ?>" alt="" class="w-full h-full object-cover opacity-25" />
        <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-midnight-logic)]/20 via-[var(--color-midnight-logic)]/10 to-[var(--color-midnight-logic)]"></div>
      </div>
    <?php else: ?>
      <div class="absolute inset-0 circuit-overlay opacity-30" aria-hidden="true"></div>
    <?php endif; ?>

    <div class="relative w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-24">
      <p class="eyebrow eyebrow-lime mb-5">Legal</p>

      <h1 class="font-display font-bold text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.05] tracking-tight text-white mb-6">
        Terms &amp; Conditions
      </h1>

      <div class="w-16 h-px bg-[var(--color-growth-signal)] mb-6"></div>

      <p class="text-sm lg:text-base text-white/70 leading-relaxed max-w-2xl">
        These Terms &amp; Conditions govern your use of the 828 Marketing Solutions website and services. Please read them carefully.
      </p>

      <p class="mt-6 text-[12px] uppercase tracking-[0.12em] text-white/50 font-body">
        Last updated: <?php echo esc_html($last_updated); ?>
      </p>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════
       CONTENT — sticky TOC sidebar on desktop, prose on the right
       ════════════════════════════════════════════════════════════════════ -->
  <section class="bg-[var(--color-paper-soft)] py-16 lg:py-20">
    <div class="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

        <!-- TOC SIDEBAR — sticky on desktop -->
        <aside class="lg:col-span-3">
          <div class="lg:sticky lg:top-24">
            <p class="eyebrow eyebrow-blue mb-4">On this page</p>
            <nav class="flex flex-col gap-2">
              <?php foreach ($sections as $s): ?>
                <a href="#<?php echo esc_attr($s['id']); ?>" class="text-[13px] text-[var(--color-metric-steel)] hover:text-[var(--color-midnight-logic)] transition-colors duration-150 leading-snug">
                  <?php echo esc_html($s['title']); ?>
                </a>
              <?php endforeach; ?>
            </nav>
          </div>
        </aside>

        <!-- ARTICLE -->
        <article class="lg:col-span-9 max-w-3xl">

          <!-- 1. Acceptance -->
          <section id="acceptance" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">1. Acceptance of Terms</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>Welcome to 828 Marketing Solutions, LLC ("828," "we," "us," or "our"). By accessing or using our website at <a href="https://828marketingsolutions.com" class="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)]">828marketingsolutions.com</a>, submitting any form, or engaging our services, you agree to be bound by these Terms &amp; Conditions and our <a href="/privacy-policy" class="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)]">Privacy Policy</a>.</p>
              <p>If you do not agree with any part of these terms, please do not use our website or services.</p>
              <p>These terms constitute a legal agreement between you (whether acting personally or on behalf of an entity) and 828 Marketing Solutions, LLC.</p>
            </div>
          </section>

          <!-- 2. Services -->
          <section id="services" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">2. Description of Services</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>828 Marketing Solutions provides strategic marketing services to businesses, including but not limited to:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Market intelligence and industry research</li>
                <li>Brand identity and positioning</li>
                <li>Website development and search engine optimization</li>
                <li>Social media management</li>
                <li>Paid advertising strategy and execution</li>
                <li>Pitch deck and capabilities development</li>
              </ul>
              <p>This website provides information about our services, allows you to request consultations, and may be used to share educational content. The specific terms of any engagement between 828 and a client are governed by a separate written agreement (Statement of Work or service contract).</p>
              <p>Nothing on this website constitutes a binding offer to provide services. All engagements are subject to mutual agreement on scope, fees, and timeline.</p>
            </div>
          </section>

          <!-- 3. User Responsibilities -->
          <section id="responsibilities" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">3. User Responsibilities</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>When using our website, you agree to:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Provide accurate, current, and complete information when submitting forms or communicating with us</li>
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to any part of the website, our systems, or other users' data</li>
                <li>Not use automated tools (bots, scrapers, etc.) to extract data from this website without our written permission</li>
                <li>Not introduce malware, viruses, or any other malicious code</li>
                <li>Not impersonate any person or entity</li>
                <li>Not use the website in any way that could damage, disable, overburden, or impair our infrastructure</li>
              </ul>
              <p>We reserve the right to refuse service, terminate access, or remove content at our sole discretion if these responsibilities are violated.</p>
            </div>
          </section>

          <!-- 4. Intellectual Property -->
          <section id="intellectual-property" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">4. Intellectual Property</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-4 mb-2">4.1 Our content</h3>
              <p>All content on this website &mdash; including text, graphics, logos, photographs, illustrations, design, code, and the 828 Marketing Solutions name and brand &mdash; is the property of 828 Marketing Solutions, LLC or its licensors, and is protected by U.S. and international copyright, trademark, and other intellectual property laws.</p>
              <p>You may not reproduce, distribute, modify, transmit, publish, or create derivative works from any content on this website without our prior written consent, except for personal, non-commercial use.</p>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">4.2 Your submissions</h3>
              <p>By submitting information, ideas, or feedback to us through this website, you grant 828 Marketing Solutions a non-exclusive, royalty-free, worldwide license to use that information for the purpose of providing and improving our services. You represent that you have the right to submit such information.</p>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">4.3 Trademarks</h3>
              <p>"828 Marketing Solutions" and our logos are trademarks of 828 Marketing Solutions, LLC. Other trademarks displayed on this website (e.g., client logos shown with permission) are the property of their respective owners.</p>
            </div>
          </section>

          <!-- 5. Disclaimers -->
          <section id="disclaimers" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">5. Disclaimers</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p class="font-medium text-[var(--color-midnight-logic)]">THE WEBSITE AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
              <p>To the fullest extent permitted by applicable law, 828 Marketing Solutions disclaims all warranties, including but not limited to:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                <li>Warranties that the website will be uninterrupted, secure, error-free, or free of viruses or other harmful components</li>
                <li>Warranties regarding the accuracy, reliability, completeness, or timeliness of any content</li>
              </ul>
              <p>Case studies, statistics, and performance metrics displayed on this website reflect past results for specific clients in specific circumstances. They do not constitute a guarantee or prediction of future results for any other client or engagement.</p>
              <p>Any reliance you place on information from this website is strictly at your own risk.</p>
            </div>
          </section>

          <!-- 6. Liability -->
          <section id="liability" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">6. Limitation of Liability</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p class="font-medium text-[var(--color-midnight-logic)]">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, 828 MARKETING SOLUTIONS AND ITS OFFICERS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
              <p>This includes, without limitation, damages for:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Loss of profits, revenue, business, or anticipated savings</li>
                <li>Loss of data, goodwill, or reputation</li>
                <li>Business interruption</li>
                <li>Any damages arising from your use of, or inability to use, this website</li>
              </ul>
              <p>Our aggregate liability for any claims related to this website, regardless of the cause of action, shall not exceed one hundred U.S. dollars (USD $100), or the amount you have paid us in fees during the six (6) months preceding the claim, whichever is greater.</p>
              <p>Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you in full.</p>
            </div>
          </section>

          <!-- 7. Indemnification -->
          <section id="indemnification" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">7. Indemnification</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>You agree to indemnify, defend, and hold harmless 828 Marketing Solutions, LLC and its officers, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Your use of this website</li>
                <li>Your violation of these Terms &amp; Conditions</li>
                <li>Your violation of any rights of any third party</li>
                <li>Any content you submit or share through this website</li>
              </ul>
            </div>
          </section>

          <!-- 8. Governing Law -->
          <section id="governing-law" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">8. Governing Law &amp; Disputes</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>These Terms &amp; Conditions are governed by the laws of the State of California, United States, without regard to its conflict-of-laws principles.</p>
              <p>Any dispute, claim, or controversy arising out of or relating to these terms or your use of our website shall be resolved exclusively in the state or federal courts located in Orange County, California. You and 828 Marketing Solutions consent to the personal jurisdiction of those courts.</p>
              <p>If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
              <p>Our failure to enforce any right or provision of these terms does not constitute a waiver of that right or provision.</p>
            </div>
          </section>

          <!-- 9. Changes -->
          <section id="changes" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">9. Changes to These Terms</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>We reserve the right to modify these Terms &amp; Conditions at any time. When we make changes, we will update the "Last updated" date at the top of this page.</p>
              <p>For material changes, we will provide reasonable notice (such as a notice on our website or, where appropriate, an email to clients with active engagements).</p>
              <p>Your continued use of the website after changes take effect constitutes your acceptance of the revised terms. If you do not agree with the changes, please stop using the website.</p>
            </div>
          </section>

          <!-- 10. Contact -->
          <section id="contact" class="scroll-mt-24">
            <div class="bg-white rounded-md border-l-2 border-[var(--color-growth-signal)] p-6 lg:p-8">
              <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">10. Contact Us</h2>
              <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
                <p>Questions about these Terms &amp; Conditions?</p>
                <div class="space-y-2 mt-4">
                  <p>
                    <span class="eyebrow eyebrow-blue inline-block w-16">Email</span>
                    <a href="mailto:legal@828marketingsolutions.com" class="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)]">legal@828marketingsolutions.com</a>
                  </p>
                  <p>
                    <span class="eyebrow eyebrow-blue inline-block w-16">Mail</span>
                    828 Marketing Solutions, LLC<br />
                    <span class="ml-16 block">Irvine, California, United States</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

        </article>
      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════════════════
       FINAL CTA — Back to home / View Privacy
       ════════════════════════════════════════════════════════════════════ -->
  <section class="bg-white py-16 lg:py-20 border-t border-[rgba(26,28,41,0.08)]">
    <div class="w-full max-w-3xl mx-auto px-5 sm:px-8 text-center">
      <p class="eyebrow eyebrow-blue mb-3">Related</p>
      <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-6">
        Need to read more?
      </h2>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="/privacy-policy" class="group inline-flex items-center justify-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-6 py-3 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200 min-w-[200px]">
          Privacy Policy
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </a>
        <a href="/" class="group inline-flex items-center justify-center gap-2 bg-transparent text-[var(--color-midnight-logic)] px-6 py-3 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] border border-[var(--color-midnight-logic)]/20 hover:border-[var(--color-midnight-logic)] transition-all duration-200 min-w-[200px]">
          Back to Home
        </a>
      </div>
    </div>
  </section>

</main>

<?php
get_footer();