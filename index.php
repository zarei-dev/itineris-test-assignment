<!DOCTYPE html>
<html lang="en">
    <head>
        <title>WP Starter Theme</title>
        <meta charset="utf-8">
        <?php wp_head(); ?>
    </head>
    <body>
        <h1 class="text-xl text-center">WP Starter Theme</h1>

        <?php get_template_part('template_parts/courses_filter'); ?>

        <?php wp_footer(); ?>
    </body>
</html>
