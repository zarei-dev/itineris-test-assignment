<?php
namespace ITINERIS_ASSIGNMENT\App\Course;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Course
 * This Class is responsible for registering the course post type, taxonomies and meta boxes.
 * @package ITINERIS_ASSIGNMENT\App\Course
 * @since 0.0.1
 */
class RegisterCourse {
    public function __construct() {
        add_action( 'init', array( $this, 'register_post_type' ) );
        add_action( 'init', array( $this, 'register_taxonomies' ) );

        // This will register the meta boxes
        $MetaBoxes = new MetaBoxes();
    }

    public function register_post_type() {
        register_extended_post_type( 'course', [
            'show_in_feed' => true,
            'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
            'admin_cols' => [
                'course_type' => [
                    'taxonomy' => 'course_type'
                ],
                'campus' => [
                    'taxonomy' => 'campus'
                ],
            ],
            'admin_filters' => [
                'course_type' => [
                    'taxonomy' => 'course_type'
                ],
                'campus' => [
                    'taxonomy' => 'campus'
                ],
            ],
        ], [
            'singular' => 'Course',
            'plural'   => 'Courses',
            'slug'     => 'courses',
        ] );
    }

    public function register_taxonomies() {
        // register course type and campus taxonomy
        register_extended_taxonomy( 'course_type', 'course', [
            'show_in_feed' => true,
            'show_admin_column' => true,
            'show_in_rest' => true,
            'meta_box' => 'radio',
            'hierarchical' => true,
        ], [
            'singular' => 'Course Type',
            'plural'   => 'Course Types',
            'slug'     => 'course-types',
        ] );

        register_extended_taxonomy( 'campus', 'course', [
            'show_in_feed' => true,
            'show_admin_column' => true,
            'show_in_rest' => true,
            'meta_box' => 'simple',
            'hierarchical' => true,
        ], [
            'singular' => 'Campus',
            'plural'   => 'Campuses',
            'slug'     => 'campuses',
        ] );
    }
}