<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title><?php wp_title(); ?></title>
        <meta charset="utf-8">
        <?php wp_head(); ?>
    </head>
    <body>
        <?php get_template_part('template_parts/quote_with_image'); ?>
        <?php get_template_part('template_parts/courses_filter'); ?>

        <?php wp_footer(); ?>
    </body>
</html>
