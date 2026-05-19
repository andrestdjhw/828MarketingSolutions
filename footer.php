<?php
  // Logo for the dark footer — use the white/light version
  $footer_logo_url = '/wp-content/uploads/2026/05/828_Logotipo_blanco-scaled.png';

  // ───────────────────────────────────────────────────────────────────────────
  // FOOTER BACKGROUND IMAGE — paste a WP Media Library URL here.
  // Leave as '' to use the default CSS circuit-pattern fallback.
  // ───────────────────────────────────────────────────────────────────────────
  $footer_bg_url = '/wp-content/uploads/2026/05/EstampadoFooter828-scaled.png'; // e.g. '/wp-content/uploads/2026/05/footer-estampado.png'
?>

<!-- Footer React mount point. `display: contents` lets the rendered <footer>
     behave as a direct child of <body> for layout/sticky purposes. -->
<div
  id="render-footer-here"
  style="display: contents;"
  data-logo-url="<?php echo esc_url($footer_logo_url); ?>"
  data-bg-url="<?php echo esc_url($footer_bg_url); ?>"
></div>
<!-- end footer mount point -->

<!-- Chatbot828 React mount point. Renders a fixed-position FAB
     bottom-right of the viewport on every page. -->
<div id="render-chatbot-here"></div>
<!-- end chatbot mount point -->

<?php wp_footer(); ?>
</body>
</html>