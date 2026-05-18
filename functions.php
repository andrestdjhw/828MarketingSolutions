<?php
/* ═══════════════════════════════════════════════════════════════════════════
   828 Marketing Solutions — Theme functions
   v2-Final rebuild (May 17, 2026)
   ═══════════════════════════════════════════════════════════════════════════ */

// ─── Enqueue compiled assets ────────────────────────────────────────────────
function boilerplate_load_assets() {
  wp_enqueue_script(
    'ourmainjs',
    get_theme_file_uri('/build/index.js'),
    array('wp-element', 'react-jsx-runtime'),
    '2.0.0',
    true
  );
  wp_enqueue_style(
    'ourmaincss',
    get_theme_file_uri('/build/index.css'),
    array(),
    '2.0.0'
  );
}
add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

// ─── Theme support ──────────────────────────────────────────────────────────
function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
}
add_action('after_setup_theme', 'boilerplate_add_support');

// ─── Polylang awareness (only loads if Polylang is active) ──────────────────
function boilerplate_polylang_data() {
  if (!function_exists('pll_the_languages')) return;

  $languages = pll_the_languages(array('raw' => 1, 'hide_if_empty' => 0));
  if (empty($languages)) return;

  $data = array();
  foreach ($languages as $code => $lang) {
    $data[] = array(
      'code'    => strtoupper($code),
      'name'    => $lang['name'],
      'url'     => $lang['url'],
      'current' => !empty($lang['current_lang']),
    );
  }
  ?>
  <script>window.PLL_LANGUAGES = <?php echo wp_json_encode($data); ?>;</script>
  <?php
}
add_action('wp_head', 'boilerplate_polylang_data', 5);