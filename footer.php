<?php
  // Logo URL — uploaded to WP Media Library
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