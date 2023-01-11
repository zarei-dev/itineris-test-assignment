<?php
namespace ITINERIS_ASSIGNMENT\App\Course;

/**
 * MetaBoxes
 * This Class is responsible for registering the meta boxes for the course post type.
 * @package ITINERIS_ASSIGNMENT\App\Course
 * @since 0.0.1
 */
class MetaBoxes {
    public function __construct() {
        add_action( 'add_meta_boxes', array( $this, 'add_meta_boxes' ) );
        add_action( 'save_post', array( $this, 'save_meta_boxes' ) );
    }

    public function add_meta_boxes() {
        add_meta_box(
            'course_meta_box',
            __( 'Course Details', 'itineris-test-assignment' ),
            array( $this, 'render_meta_box' ),
            'course',
            'side',
            'default'
        );
    }
    
    public function render_meta_box( $post ) {
        $course_code = get_post_meta( $post->ID, 'course_code', true );
        $course_duration = get_post_meta( $post->ID, 'course_duration', true );

        wp_nonce_field( 'course_meta_box', 'course_meta_box_nonce' );
        ?>
        <div class="course-meta-box">
            <div class="course-meta-box__field">
                <label for="course_code"><?php _e( 'Course Code', 'itineris-test-assignment' ); ?></label>
                <input type="text" id="course_code" name="course_code" value="<?php echo esc_attr( $course_code ); ?>" required>
            </div>
            <div class="course-meta-box__field">
                <label for="course_duration"><?php _e( 'Course Duration', 'itineris-test-assignment' ); ?></label>
                <input type="number" id="course_duration" name="course_duration" value="<?php echo esc_attr( $course_duration ); ?>" required>
            </div>
        </div>
        <style>
            .course-meta-box {
                display: flex;
                flex-direction: column;
            }
            .course-meta-box__field {
                margin-bottom: 1rem;
            }
            .course-meta-box__field label {
                display: block;
                margin-bottom: 0.5rem;
            }
            .course-meta-box__field input {
                width: 100%;
            }
        </style>
        <?php    
    }

    public function save_meta_boxes( $post_id ) {
        if ( ! isset( $_POST['course_meta_box_nonce'] ) ) {
            return;
        }

        if ( ! wp_verify_nonce( $_POST['course_meta_box_nonce'], 'course_meta_box' ) ) {
            return;
        }

        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
            return;
        }

        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return;
        }
        
        if ( isset( $_POST['course_code'] ) ) {
            update_post_meta( $post_id, 'course_code', sanitize_text_field( $_POST['course_code'] ) );
        }

        if ( isset( $_POST['course_duration'] ) ) {
            update_post_meta( $post_id, 'course_duration', sanitize_text_field( $_POST['course_duration'] ) );
        }
    }
}