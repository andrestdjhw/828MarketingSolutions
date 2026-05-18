<?php
  // Logo for the dark footer — use the white/light version
  $footer_logo_url = '/wp-content/uploads/2026/05/828_Logotipo_blanco-scaled.png';
?>

<!-- Footer React mount point -->
<div
  id="render-footer-here"
  data-logo-url="<?php echo esc_url($footer_logo_url); ?>"
></div>
<!-- end footer mount point -->

<?php wp_footer(); ?>
</body>
</html>