<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Fonts (Helvetica + Nebulica) load via @font-face in /build/index.css
         No Google Fonts external link needed. -->

    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>

    <?php
      // Logo URL — uploaded to WP Media Library.
      // Replace with the URL of your logo from the Media Library.
      $logo_url = '/wp-content/uploads/2026/05/828_Imagotipo_negro-copia-scaled.png';
      $home_url = esc_url(home_url('/'));
    ?>

    <!-- Navbar React mount point.
         `display: contents` makes this wrapper invisible to layout —
         the React children (topbar + navbar) become direct children of <body>
         for layout purposes, so position:sticky on the navbar works against
         the full viewport instead of being constrained to this div's height. -->
    <div
      id="render-navbar-here"
      style="display: contents;"
      data-logo-url="<?php echo esc_url($logo_url); ?>"
      data-home-url="<?php echo $home_url; ?>"
    ></div>
    <!-- end navbar mount point -->