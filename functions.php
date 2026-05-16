<?php

function boilerplate_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element', 'react-jsx-runtime'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'boilerplate_load_assets');

function boilerplate_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'boilerplate_add_support');

// ═══════════════════════════════════════════════════════════════════════════
// TEMPORARY DEBUG — remove after diagnosing the home template issue
// Logs to the HTML which template WordPress decided to load
// ═══════════════════════════════════════════════════════════════════════════
add_filter('template_include', function ($template) {
  if (!is_admin()) {
    // Stash the chosen template path on a global so we can echo it later
    global $boilerplate_debug_template;
    $boilerplate_debug_template = $template;
  }
  return $template;
}, 9999);

add_action('wp_head', function () {
  global $boilerplate_debug_template;
  $assigned = is_page() ? get_page_template_slug(get_the_ID()) : '(not a page)';
  $front_id = get_option('page_on_front');
  $show_on  = get_option('show_on_front');
  echo "\n<!-- BOILERPLATE_DEBUG_START\n";
  echo "  template_include resolved to: " . esc_html($boilerplate_debug_template) . "\n";
  echo "  is_front_page(): " . (is_front_page() ? 'true' : 'false') . "\n";
  echo "  is_home(): " . (is_home() ? 'true' : 'false') . "\n";
  echo "  is_page(): " . (is_page() ? 'true' : 'false') . "\n";
  echo "  current page ID: " . (is_page() ? get_the_ID() : 'N/A') . "\n";
  echo "  assigned page template slug: '" . esc_html($assigned) . "'\n";
  echo "  show_on_front option: '" . esc_html($show_on) . "'\n";
  echo "  page_on_front ID: " . esc_html($front_id) . "\n";
  echo "BOILERPLATE_DEBUG_END -->\n";
}, 1);