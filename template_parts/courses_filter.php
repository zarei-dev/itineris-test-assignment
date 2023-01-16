<?php
use ITINERIS_ASSIGNMENT\App\Course\Course;
?>

<div class="container mx-auto px-4" id="course-filter-section">
    <!-- main -->
    <div class="flex flex-wrap">
        <div class="w-full lg:w-3/12 px-4 it-filters">
            <?php get_template_part( 'template_parts/side_filter' ); ?>
        </div>
        <div class="w-full lg:w-9/12 px-4">
            <!-- Courses Grid -->
            <div class="flex flex-wrap -mx-4">
                <?php
                

                $args = array(
                    'post_type' => 'course',
                    'posts_per_page' => -1,
                    'orderby' => 'date',
                    'order' => 'DESC',
                );

                if ( isset( $_GET['campus'] ) ) {
                    $args['tax_query'][] = array(
                        'taxonomy' => 'campus',
                        'field' => 'slug',
                        'terms' => $_GET['campus'],
                    );
                }

                if ( isset( $_GET['course_type'] ) ) {
                    $args['tax_query'][] = array(
                        'taxonomy' => 'course_type',
                        'field' => 'slug',
                        'terms' => $_GET['course_type'],
                    );
                }
                
                $query = new \WP_Query( $args );
                
                if ( $query->have_posts() ) {
                    while ( $query->have_posts() ) {
                        $query->the_post();

                        get_template_part( 'template_parts/course_grid_item' );
                    }
                }
                wp_reset_postdata();
                ?>
                
        </div>
    </div>



</div>