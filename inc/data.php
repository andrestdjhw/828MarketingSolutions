<?php
/**
 * 828 Marketing Solutions — Shared template data
 * Single source of truth for case studies, industries, and authority anchors.
 * Loaded by templates via require_once.
 */

/* ─── 8 Launch Case Studies (anonymized per brief Section 9.2) ──────────── */
function eight28_get_case_studies() {
  return [
    [
      'industry' => 'Restaurants & Food', 'industry_slug' => 'restaurants', 'location' => 'Orange County',
      'phases'   => [1,2,3,4,5],
      'headline' => 'They built the restaurant. The market didn\'t see it. Here\'s what changed.',
      'challenge' => 'Quiet weeknights despite better food than competitors.',
      'transformation' => 'Full 5-Phase ecosystem — from positioning to paid acceleration.',
      'proof' => '225 conversions in 90 days at $19.59 CPL · $4,407 ad spend',
    ],
    [
      'industry' => 'Home Services & Trades', 'industry_slug' => 'home-services-and-trades', 'location' => 'Inland Empire',
      'phases'   => [1,2,3,4,5],
      'headline' => 'They had the crew. The market didn\'t see it. Here\'s what changed.',
      'challenge' => 'Referrals-only in a hyper-competitive landscape market.',
      'transformation' => 'Built the visibility engine. Predictable pipeline replaced word-of-mouth.',
      'proof' => '45 conversions in 90 days at $97.48 CPL · $4,387 ad spend',
    ],
    [
      'industry' => 'Janitorial & Commercial', 'industry_slug' => 'janitorial-commercial', 'location' => 'Southern California',
      'phases'   => [1,2,3,4,5],
      'headline' => 'They had the operation. The market didn\'t see it. Here\'s what changed.',
      'challenge' => 'Fragmented bidding model in a $112B undermarketed industry.',
      'transformation' => 'Positioned out of the bid race into a real B2B brand.',
      'proof' => '15 commercial-grade leads in 90 days at $97.36 CPL',
    ],
    [
      'industry' => 'Retail & Wholesale', 'industry_slug' => 'retail-wholesale-manufacturing', 'location' => 'North County',
      'phases'   => [1,2,3,4,5],
      'headline' => 'They had the product. The market saw "one of dozens." Here\'s what changed.',
      'challenge' => 'Commoditized in a category where everyone looked the same.',
      'transformation' => 'Phase 1 B2B repositioning. Named the wholesale buyer. Rebuilt the narrative.',
      'proof' => 'Full B2B market repositioning. Wholesale buyer narrative built.',
    ],
    [
      'industry' => 'Beauty, Wellness & Personal Care', 'industry_slug' => 'beauty-wellness', 'location' => 'Orange County',
      'phases'   => [1,2,3,4,5],
      'headline' => 'They built the practice. The market didn\'t see it. Here\'s what changed.',
      'challenge' => 'Independent practitioner with no professional brand or web presence.',
      'transformation' => 'Phases 1–4 complete. Strategic ideal-client framework + brand + web + daily presence.',
      'proof' => 'Phases 1–4 complete. Phase 5 launching June 2026.',
    ],
    [
      'industry' => 'Home Services & Trades', 'industry_slug' => 'home-services-and-trades', 'location' => 'North County',
      'phases'   => [1,2,3,4,5],
      'headline' => 'They had the reputation. The market didn\'t see it. Here\'s what changed.',
      'challenge' => 'Word-of-mouth only in a premium service area worth winning.',
      'transformation' => 'Built the qualified lead engine. Premium-area positioning made visible.',
      'proof' => '14 conversions in 90 days at $174.66 CPL · $2,445 ad spend',
    ],
    [
      'industry' => 'Home Services & Trades', 'industry_slug' => 'home-services-and-trades', 'location' => 'Orange County',
      'phases'   => [1,2,3,4,5],
      'headline' => 'They had the contractors. The market didn\'t see it. Here\'s what changed.',
      'challenge' => 'Subcontractor stuck on referrals, no proactive B2B pipeline.',
      'transformation' => 'Phase 4+5 unlocked active contractor relationships.',
      'proof' => '472 clicks in 90 days · 6 qualified contractor relationships · $3,725 spend',
    ],
    [
      'industry' => 'Home Services & Trades', 'industry_slug' => 'home-services-and-trades', 'location' => 'Albuquerque, NM',
      'phases'   => [1,2,3,4,5],
      'headline' => 'They had the roofing operation. The market didn\'t see it. Here\'s what changed.',
      'challenge' => 'Established operator without a brand to match the service quality.',
      'transformation' => 'Brand identity transformation in progress. Entering Phase 4 + 5.',
      'proof' => 'Brand identity in progress. P4 + P5 launching.',
    ],
  ];
}

/* ─── 8 Industries (order locked per brief Section 6.5) ─────────────────── */
function eight28_get_industries() {
  return [
    [
      'name'  => 'Home Services & Trades',
      'slug'  => 'home-services-and-trades',
      'image' => '/wp-content/uploads/2026/05/HomeServicesTrades828.png', // e.g. '/wp-content/uploads/2026/05/industry-home-services.jpg'
      'copy'  => 'When the operator is better than the market sees — that\'s the gap we close. Roofing. Drywall. Landscape. Painting. Tree service. We\'ve built the visibility engine for the operators who actually do the work.',
    ],
    [
      'name'  => 'Restaurants & Food Service',
      'slug'  => 'restaurants',
      'image' => '/wp-content/uploads/2026/05/RestaurantesComidas828.png',
      'copy'  => 'A full house is not the same as a full restaurant. We build the strategy that brings the right diners, on the right nights, paying the right ticket — for operators who already know how to feed them.',
    ],
    [
      'name'  => 'Beauty, Wellness & Personal Care',
      'slug'  => 'beauty-wellness',
      'image' => '/wp-content/uploads/2026/05/RetailWholesaleManufacturer.png',
      'copy'  => 'When the practitioner is real, the brand needs to be real too. We build the positioning that makes wellness operators choosable — beyond word-of-mouth and into market authority.',
    ],
    [
      'name'  => 'Janitorial & Commercial Services',
      'slug'  => 'janitorial-commercial',
      'image' => '/wp-content/uploads/2026/05/JanitorialIndustries.png',
      'copy'  => 'The $112B commercial cleaning industry is fragmented, undermarketed, and ready for the operator who treats it like a real business. We build the system that gets you out of the bid race.',
    ],
    [
      'name'  => 'Retail, Wholesale & Manufacturing',
      'slug'  => 'retail-wholesale-manufacturing',
      'image' => '/wp-content/uploads/2026/05/image.png',
      'copy'  => 'When "one of dozens" is the market\'s default frame, the only path out is a B2B narrative that names the buyer specifically. We built it for a tortilleria. We can build it for you.',
    ],
    [
      'name'  => 'Financial / Tax / Accounting',
      'slug'  => 'financial-tax-accounting',
      'image' => '/wp-content/uploads/2026/05/FinancialAccounting828.png',
      'copy'  => 'We work with the people who train the Latino tax industry. CPAs, EAs, wealth advisors, bookkeepers, tax resolution specialists — operators who serve a community that English-first agencies don\'t understand.',
    ],
    [
      'name'  => 'Healthcare & Specialty Services',
      'slug'  => 'healthcare-specialty',
      'image' => '/wp-content/uploads/2026/05/HealthIndustries828.png',
      'copy'  => 'Cardiovascular health. Women\'s health. Specialty providers. We build the brand and content infrastructure for healthcare operators who serve patient communities the system has overlooked.',
    ],
    [
      'name'  => 'Professional Services & B2B',
      'slug'  => 'professional-services-b2b',
      'image' => '/wp-content/uploads/2026/05/ProfesionalServicesB2bB828.png',
      'copy'  => 'B2B services are not consumer marketing. The buyer is sharper, the cycle is longer, the trust signals are different. We build for operators who sell to other operators — and need their visibility to match.',
    ],
  ];
}

/* ─── 5-Phase Ecosystem (per brief Section 2.3) ─────────────────────────── */
function eight28_get_phases() {
  return [
    [
      'num'   => 1,
      'name'  => 'Intelligence',
      'label' => 'Industry Intelligence Report',
      'voice' => 'First, we figure out exactly why the market isn\'t seeing you.',
      'bullets' => [
        'Competitive landscape analysis',
        'Market positioning audit',
        'Ideal client framework',
        'Visibility gap diagnosis',
      ],
      'deliverable' => 'A 30-page diagnostic report with the exact gaps that are costing you visibility — and the order to fix them.',
      'timeline' => '2–3 weeks',
      'next' => 'You decide which phase to attack first based on the diagnosis.',
    ],
    [
      'num'   => 2,
      'name'  => 'Brand',
      'label' => 'Brand Identity',
      'voice' => 'Then we make sure what they see reflects what you actually are.',
      'bullets' => [
        'Visual identity system',
        'Brand voice and messaging',
        'Logo, color, typography',
        'Brand book delivered',
      ],
      'deliverable' => 'A complete brand identity system that matches the quality of the operation you actually run.',
      'timeline' => '4–6 weeks',
      'next' => 'Brand applied across web, ads, and content from this point on.',
    ],
    [
      'num'   => 3,
      'name'  => 'Website',
      'label' => 'Website',
      'voice' => 'Then we build the home that captures every visitor.',
      'bullets' => [
        'Strategic website design',
        'Bilingual EN/ES support',
        'Conversion-optimized funnels',
        'Mobile-first build',
      ],
      'deliverable' => 'A website built to convert — not to look pretty.',
      'timeline' => '4–8 weeks',
      'next' => 'Live website becomes the destination for every Phase 4 + 5 effort.',
    ],
    [
      'num'   => 4,
      'name'  => 'Presence',
      'label' => 'Internet Presence',
      'voice' => 'Then we put you in front of the right people, every day.',
      'bullets' => [
        'Daily social content',
        'Google Business optimization',
        'SEO foundation',
        'Reputation management',
      ],
      'deliverable' => 'Daily visibility infrastructure: social, search, reviews, GMB.',
      'timeline' => 'Ongoing monthly retainer',
      'next' => 'Compounds with Phase 5 paid acceleration.',
    ],
    [
      'num'   => 5,
      'name'  => 'Acceleration',
      'label' => 'Paid Ads Management',
      'voice' => 'Then we accelerate.',
      'bullets' => [
        'Google Ads + LSA management',
        'Meta + LinkedIn campaigns',
        'Conversion tracking',
        'Weekly optimization',
      ],
      'deliverable' => 'Predictable, measurable pipeline of qualified leads — reported in USD.',
      'timeline' => 'Ongoing monthly retainer',
      'next' => 'Quarterly strategic reviews. Continuous optimization.',
    ],
  ];
}