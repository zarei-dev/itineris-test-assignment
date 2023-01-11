<?php
namespace ITINERIS_ASSIGNMENT\App\Course;

class Course {
    public function __construct() {
        add_action( 'init', array( $this, 'register_post_type' ) );

        $MetaBoxes = new MetaBoxes();
    }

    public function register_post_type() {
        register_extended_post_type( 'course', [
            'show_in_feed' => true,
            'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
        ], [
            'singular' => 'Course',
            'plural'   => 'Courses',
            'slug'     => 'courses',
        ] );
    }
}