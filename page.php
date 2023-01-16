<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title><?php echo wp_title(); ?></title>
        <meta charset="utf-8">
        <?php wp_head(); ?>
    </head>
    <body>
        <?php the_content() ?>

        <?php 
        if ( is_front_page() ) {
            get_template_part('template_parts/courses_filter');
        }
        ?>

        <?php wp_footer(); ?>
    </body>
</html>
