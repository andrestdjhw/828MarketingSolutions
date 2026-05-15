<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Brand fonts: Manrope as Nebulica alternative (body + buttons) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <?php
      // Logo URL placeholder — replace with actual WP media library URL
      // Example using WP media: $logo_url = wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full');
      // For now, set the URL of the logo uploaded to the WP Media Library here:
      $logo_url = '/wp-content/uploads/2026/05/828_Imagotipo_negro-copia-scaled.png'; // e.g., 'https://yoursite.com/wp-content/uploads/2026/05/828-logo.png'
      $home_url = esc_url(home_url('/'));
    ?>

    <!-- Navbar React mount point -->
    <div
      id="render-navbar-here"
      data-logo-url="<?php echo esc_url($logo_url); ?>"
      data-home-url="<?php echo $home_url; ?>"
    ></div>
    <!-- end navbar mount point -->