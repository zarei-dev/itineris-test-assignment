<?php

define('WP_STARTER_THEME_VERSION', '0.0.1');
define('WP_STARTER_THEME_NAME', 'itineris-test-assignment');

// Register The Auto Loader
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
} else {
    wp_die(__('You must run `composer install` in the theme directory.', 'itineris-test-assignment'));
}

// Setup The Theme
$Setup = new \ITINERIS_ASSIGNMENT\App\Setup();

add_theme_support('post-thumbnails');
