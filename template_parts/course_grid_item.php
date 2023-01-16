<?php
use ITINERIS_ASSIGNMENT\App\Course\Course;
$course = new Course( get_the_ID() );
?>
<div class="w-full md:w-6/12 lg:w-4/12 px-4">
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-custom">
        <?php
        if ( has_post_thumbnail() ) {
            ?>
            <div class="text-center">
                <img src="<?php echo get_the_post_thumbnail_url( get_the_ID(), 'medium' ); ?>" alt="<?php the_title(); ?>" class="w-full h-36 object-cover">
            </div>
            <?php
        }
        ?>
        <div class="p-4 flex-auto">
            <h4 class="text-xl font-semibold mb-2 gradient-effect">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </h4>
            <div class="flex flex-wrap" style="color:#252B39">
                <?php
                $course_types = $course->get_course_type();
                if ( ! empty( $course_types ) ) {
                    ?>
                    <div class="text-gray-500 text-base font-normal pr-6">
                        <?php echo esc_html( $course_types ); ?>
                    </div>
                    <?php
                }

                if ( !empty( $course->get_duration() ) ) {
                    ?>
                    <div class="text-gray-500 text-base font-normal pr-6">
                        <?php echo esc_html( $course->get_duration() ); ?>
                    </div>
                    <?php
                }
                ?>
            </div>
        </div>
        <?php
        $campus_short_names = $course->get_two_letter_name_of_campuses();

        if ( ! empty( $campus_short_names ) ) {
            ?>
            <div class="flex flex-wrap relative overflow-visible px-1.5 py-1" style="background-color:#F5F5F5;">
                <?php
                foreach ( $campus_short_names as $short_name ) {
                    ?>
                    <div>
                        <button data-tooltip-target="tooltip-<?php echo $short_name['tooltip_id']; ?>" type="button" class="button-tooltip w-7 h-7 m-1.5 rounded-full text-white text-xs font-bold"><?php echo $short_name['campus_short']; ?></button>
                        <div id="tooltip-<?php echo $short_name['tooltip_id']; ?>" role="tooltip" class="tooltip hidden">
                            <?php echo $short_name['campus_name']; ?>
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                    <?php
                }
                ?>
            </div>
            <?php
        }
        ?>
    </div>
</div>
                        