<?php
/**
 * Template Name: Privacy Policy
 *
 * Standalone legal page for /privacy-policy.
 *
 * Content: 10-section baseline privacy policy for US-based marketing agency,
 * covering CCPA (California), GDPR (EU users), and general best practices.
 * Includes explicit disclosure of third-party processors:
 *   - HubSpot (CRM + form submissions)
 *   - Google reCAPTCHA v3 (anti-spam)
 *   - Google Analytics (planned)
 *
 * IMPORTANT: This is a BASELINE draft. Manuel should have it reviewed by
 * qualified legal counsel before relying on it. The form's consent checkbox
 * already links here, so the page must exist and be substantive.
 */

get_header();

// ───────────────────────────────────────────────────────────────────────────
// Last-updated date — change when the policy is amended.
// ───────────────────────────────────────────────────────────────────────────
$last_updated = 'May 2026';

// ───────────────────────────────────────────────────────────────────────────
// Hero background image (leave '' for solid Midnight Logic + circuit pattern).
// ───────────────────────────────────────────────────────────────────────────
$hero_bg_url = '/wp-content/uploads/2026/05/HomePageHero-scaled.png';

// ───────────────────────────────────────────────────────────────────────────
// TOC sections — kept here as a single source of truth so the sidebar nav
// stays in sync with the article anchors.
// ───────────────────────────────────────────────────────────────────────────
$sections = [
  ['id' => 'introduction',        'title' => '1. Introduction'],
  ['id' => 'information-we-collect', 'title' => '2. Information We Collect'],
  ['id' => 'how-we-use',          'title' => '3. How We Use Your Information'],
  ['id' => 'sharing',             'title' => '4. Information Sharing & Third Parties'],
  ['id' => 'cookies',             'title' => '5. Cookies & Tracking Technologies'],
  ['id' => 'retention',           'title' => '6. Data Retention'],
  ['id' => 'your-rights',         'title' => '7. Your Rights'],
  ['id' => 'international',       'title' => '8. International Users'],
  ['id' => 'children',            'title' => '9. Children\'s Privacy'],
  ['id' => 'changes',             'title' => '10. Changes to This Policy'],
  ['id' => 'contact',             'title' => '11. Contact Us'],
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
        Privacy Policy
      </h1>

      <div class="w-16 h-px bg-[var(--color-growth-signal)] mb-6"></div>

      <p class="text-sm lg:text-base text-white/70 leading-relaxed max-w-2xl">
        This Privacy Policy explains how 828 Marketing Solutions, LLC collects, uses, and protects your information when you interact with our website and services.
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

        <!-- ARTICLE — main content -->
        <article class="lg:col-span-9 max-w-3xl">

          <!-- 1. Introduction -->
          <section id="introduction" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">1. Introduction</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>828 Marketing Solutions, LLC ("828," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy applies to all information collected through our website at <a href="https://828marketingsolutions.com" class="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)]">828marketingsolutions.com</a> and any related services, communications, or interactions with our team.</p>
              <p>By using our website or submitting information through any form on this site, you acknowledge that you have read and understood this policy.</p>
            </div>
          </section>

          <!-- 2. Information We Collect -->
          <section id="information-we-collect" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">2. Information We Collect</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>We collect information in the following ways:</p>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">2.1 Information you provide directly</h3>
              <p>When you fill out a contact form, request a strategy call, or otherwise communicate with us, you may provide:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Identity information: first name, last name</li>
                <li>Contact information: email address, phone number</li>
                <li>Business information: company name, website URL, city, state/region, annual revenue range</li>
                <li>Service interests and growth challenges you share with us</li>
                <li>Any message or additional context you submit through our forms</li>
              </ul>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">2.2 Information collected automatically</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Device and browser information (browser type, operating system, screen resolution)</li>
                <li>Usage data (pages visited, time spent, referring URLs)</li>
                <li>IP address and approximate geolocation (city/region level)</li>
                <li>Anti-spam fraud scores from Google reCAPTCHA when you submit forms</li>
              </ul>
            </div>
          </section>

          <!-- 3. How We Use -->
          <section id="how-we-use" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">3. How We Use Your Information</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Respond to your inquiries and provide the marketing services you request</li>
                <li>Schedule and conduct strategy calls or consultations</li>
                <li>Send relevant communications about our services (with your consent)</li>
                <li>Improve our website and service offerings</li>
                <li>Detect and prevent fraud, spam, and abuse</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
              <p>We do not sell your personal information to third parties. We do not use your information for advertising targeting on third-party platforms without your explicit consent.</p>
            </div>
          </section>

          <!-- 4. Sharing -->
          <section id="sharing" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">4. Information Sharing &amp; Third Parties</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>We share your information only with the following categories of third parties, and only as needed to operate our business:</p>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">4.1 Service providers</h3>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li><strong>HubSpot, Inc.</strong> — We use HubSpot as our customer relationship management (CRM) platform. Form submissions are transmitted to HubSpot and stored there. See <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" class="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)]">HubSpot's Privacy Policy</a>.</li>
                <li><strong>Google LLC (reCAPTCHA)</strong> — We use Google reCAPTCHA v3 to protect our forms from spam and abuse. reCAPTCHA collects hardware and software information to provide fraud-prevention services. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)]">Google's Privacy Policy</a>.</li>
                <li><strong>Web hosting and email providers</strong> — Our website is hosted by trusted infrastructure providers who process data on our behalf under data processing agreements.</li>
              </ul>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">4.2 Legal compliance</h3>
              <p>We may disclose your information if required by law, subpoena, court order, or other legal process, or to protect our rights, property, or safety, or that of others.</p>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">4.3 Business transfers</h3>
              <p>If 828 Marketing Solutions is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before any such transfer.</p>
            </div>
          </section>

          <!-- 5. Cookies -->
          <section id="cookies" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">5. Cookies &amp; Tracking Technologies</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>Our website uses cookies and similar technologies for the following purposes:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li><strong>Essential cookies</strong> — Required for the site to function (session, security).</li>
                <li><strong>Analytics cookies</strong> — Help us understand how visitors use the site so we can improve it.</li>
                <li><strong>Anti-spam cookies</strong> — Set by Google reCAPTCHA to detect bot traffic.</li>
              </ul>
              <p>You can control cookies through your browser settings. Blocking some cookies may affect your experience on the site, including the ability to submit forms.</p>
            </div>
          </section>

          <!-- 6. Retention -->
          <section id="retention" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">6. Data Retention</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>We retain personal information only for as long as needed to fulfill the purposes outlined in this policy or as required by law. Specifically:</p>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Form submissions and CRM records: retained for as long as there is an active or potential business relationship, then archived or deleted.</li>
                <li>Server logs and analytics data: typically retained for 12&ndash;26 months.</li>
                <li>Records required for tax, accounting, or legal compliance: retained for the period mandated by applicable law (typically 7 years).</li>
              </ul>
              <p>You can request deletion of your information at any time (see Section 7).</p>
            </div>
          </section>

          <!-- 7. Your Rights -->
          <section id="your-rights" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">7. Your Rights</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">7.1 California residents (CCPA / CPRA)</h3>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Right to know what personal information we collect and how we use it</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to opt out of the sale or sharing of your information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">7.2 EU / UK residents (GDPR)</h3>
              <ul class="list-disc pl-6 space-y-1.5 marker:text-[var(--color-growth-signal)]">
                <li>Right of access to your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
              </ul>

              <h3 class="font-display font-bold text-lg text-[var(--color-midnight-logic)] mt-6 mb-2">7.3 How to exercise your rights</h3>
              <p>To exercise any of these rights, email us at <a href="mailto:privacy@828marketingsolutions.com" class="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)]">privacy@828marketingsolutions.com</a>. We will respond within 30 days (or as required by applicable law).</p>
            </div>
          </section>

          <!-- 8. International -->
          <section id="international" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">8. International Users</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>828 Marketing Solutions is based in the United States. If you access our website from outside the U.S., your information will be transferred to and processed in the United States, where data protection laws may differ from those in your country.</p>
              <p>By using our website, you consent to this transfer. We take reasonable steps to ensure your information is protected in accordance with this policy regardless of where it is processed.</p>
            </div>
          </section>

          <!-- 9. Children -->
          <section id="children" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">9. Children's Privacy</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>Our services are directed exclusively to businesses and adult professionals. We do not knowingly collect personal information from children under 13 years of age. If you believe a child has provided us with personal information, please contact us at <a href="mailto:privacy@828marketingsolutions.com" class="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)]">privacy@828marketingsolutions.com</a> and we will delete it.</p>
            </div>
          </section>

          <!-- 10. Changes -->
          <section id="changes" class="scroll-mt-24 mb-12">
            <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">10. Changes to This Policy</h2>
            <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify you by email or through a prominent notice on our website.</p>
              <p>We encourage you to review this policy periodically.</p>
            </div>
          </section>

          <!-- 11. Contact -->
          <section id="contact" class="scroll-mt-24">
            <div class="bg-white rounded-md border-l-2 border-[var(--color-growth-signal)] p-6 lg:p-8">
              <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-4">11. Contact Us</h2>
              <div class="space-y-4 text-[15px] text-[var(--color-midnight-logic)]/80 leading-relaxed">
                <p>Questions, requests, or concerns about this Privacy Policy or our handling of your information?</p>
                <div class="space-y-2 mt-4">
                  <p>
                    <span class="eyebrow eyebrow-blue inline-block w-16">Email</span>
                    <a href="mailto:privacy@828marketingsolutions.com" class="text-[var(--color-midnight-logic)] font-medium underline hover:text-[var(--color-growth-signal)]">info@828marketingsolutions.com</a>
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
       FINAL CTA — Back to home / View Terms
       ════════════════════════════════════════════════════════════════════ -->
  <section class="bg-white py-16 lg:py-20 border-t border-[rgba(26,28,41,0.08)]">
    <div class="w-full max-w-3xl mx-auto px-5 sm:px-8 text-center">
      <p class="eyebrow eyebrow-blue mb-3">Related</p>
      <h2 class="font-display font-bold text-2xl lg:text-3xl text-[var(--color-midnight-logic)] mb-6">
        Need to read more?
      </h2>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="/terms-conditions" class="group inline-flex items-center justify-center gap-2 bg-[var(--color-growth-signal)] text-[var(--color-midnight-logic)] px-6 py-3 rounded-sm font-body font-medium text-[13px] uppercase tracking-[0.05em] hover:brightness-95 transition-all duration-200 min-w-[200px]">
          Terms &amp; Conditions
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