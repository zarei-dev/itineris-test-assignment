<?php
namespace ITINERIS_ASSIGNMENT\App\Course;

/**
 * Course
 * This Class can be used to get the course data.
 * @package ITINERIS_ASSIGNMENT\App\Course
 * @since 0.0.1
 */
class Course {
    private $post_id;
    private $campus;
    private $duration;
    private $course_type;


    public function __construct( $post_id ) {
        $this->post_id = $post_id;
        
        $this->duration = get_post_meta( $this->post_id, 'course_duration', true );


        // Set all campuses
        $terms = get_the_terms( $this->post_id, 'campus' );
        if ( $terms && ! is_wp_error( $terms ) ) {
            $this->campus = $terms;
        }


        // Set all course types
        $terms = get_the_terms( $this->post_id, 'course_type' );
        if ( $terms && ! is_wp_error( $terms ) ) {
            $this->course_type = $terms;
        }

    }

    public function get_duration() {
        return $this->duration;
    }

    public function get_two_letter_name_of_campuses() : array {

        $campuses = $this->campus;

        if ( empty($campuses) ) {
            return [];
        }

        $campus_short_names = [];

        foreach ( $campuses as $term ) {
            $campus_name = $term->name;
            $words = preg_split("/[\s,_-]+/", $campus_name);
            
            $campus_short = "";
            foreach ($words as $w) {
                $campus_short .= mb_substr($w, 0, 1);
                if ( strlen($campus_short) >= 2 ) {
                    break;
                }
            }

            $tooltip_id = preg_replace('/\W+/','',strtolower(strip_tags($campus_name)));

            $campus_short_names[] = [
                'campus_name' => $campus_name,
                'campus_short' => $campus_short,
                'tooltip_id' => $tooltip_id,
                'campus_id' => $term->term_id,
                'campus_slug' => $term->slug,
                'campus_link' => get_term_link( $term->term_id, 'campus' ),
            ];
        }

        return $campus_short_names;
    }

    public function get_course_type() : string {


        if ( !$this->course_type && is_wp_error( $this->course_type ) ) {
            return '';
        }


        $course_type = array();
        foreach ( $this->course_type as $term ) {
            $course_type[] = $term->name;
        }
        $course_type = join( ", ", $course_type );

        return $course_type;
        
    }
}