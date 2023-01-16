<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

?>
<form class="filter-courses" action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
    <input type="hidden" name="post_type" value="course">
    <div class="mb-4 accordion is-open">
        <div class="flex justify-between items-center px-4 py-6 accordion-title">
            <h3 class="font-bold text-base">Filter by campus</h3>
            <button class="text-gray-600 focus:outline-none focus:text-gray-800 rotate-180 transition-all bg-transparent">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </div>
        <div class="p-5 accordion-data">
            <?php
            $campuses = get_terms( array(
                'taxonomy' => 'campus',
                'hide_empty' => false,
            ) );

            $selected_campus = isset( $_GET['campus'] ) ? $_GET['campus'] : array();
            
            foreach ( $campuses as $campus ) {
                $margin = end( $campuses ) === $campus ? 'mb-0' : 'mb-3';
                $checked = in_array( $campus->slug, $selected_campus ) ? 'checked' : '';

                ?>
                <div class="flex items-center <?php echo $margin; ?>">
                    <input type="checkbox" name="campus[]" value="<?php echo esc_attr( $campus->slug ); ?>" id="campus-<?php echo esc_attr( $campus->slug ); ?>" class="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out" <?php echo $checked; ?>>
                    <label for="campus-<?php echo esc_attr( $campus->slug ); ?>" class="ml-2 block text-sm leading-5 text-gray-900"><?php echo esc_html( $campus->name ); ?></label>
                </div>
                <?php
            }
            ?>

        </div>
    </div>
    <div class="mb-4 accordion is-open">
        <div class="flex justify-between items-center px-4 py-6 accordion-title">
            <h3 class="font-bold text-base">Filter by course type</h3>
            <button class="text-gray-600 focus:outline-none focus:text-gray-800 rotate-180 transition-all bg-transparent">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
        </div>
        <div class="p-5 accordion-data">
            <?php
            $course_types = get_terms( array(
                'taxonomy' => 'course_type',
                'hide_empty' => false,
            ) );

            $selected_course_type = isset( $_GET['course_type'] ) ? $_GET['course_type'] : array();

            foreach ( $course_types as $course_type ) {
                $margin = end( $course_types ) === $course_type ? 'mb-0' : 'mb-3';
                $checked = in_array( $course_type->slug, $selected_course_type ) ? 'checked' : '';
                ?>
                <div class="flex items-center <?php echo $margin; ?>">
                    <input type="checkbox" name="course_type[]" value="<?php echo esc_attr( $course_type->slug ); ?>" id="course_type-<?php echo esc_attr( $course_type->slug ); ?>" class="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out" <?php echo $checked; ?>>
                    <label for="course_type-<?php echo esc_attr( $course_type->slug ); ?>" class="ml-2 block text-sm leading-5 text-gray-900"><?php echo esc_html( $course_type->name ); ?></label>
                </div>
                <?php
            }

            ?>
        </div>
    </div>

    <!-- Submit button -->
    <div class="flex justify-start">
        <button type="submit" class="text-white font-bold text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline">Apply now</button>
    </div>
</form>