<?php
namespace ITINERIS_ASSIGNMENT\App;

/**
 * The file that defines the core theme class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 * 
 */
class Setup {
	/**
	 * The unique identifier of this theme.
	 */
	protected $theme_name;

	/**
	 * The current version of the theme.
	 */
	protected $version;

	/**
	 * Define the core functionality of theme.
	 * @since    0.0.1
	 */
	public function __construct() {

		$this->version 		= defined( 'WP_STARTER_THEME_VERSION' ) ? WP_STARTER_THEME_VERSION : '0.0.1';
		$this->theme_name 	= defined( 'WP_STARTER_THEME_NAME' ) ? WP_STARTER_THEME_NAME : '0.0.1';
        
        $this->enqueue_theme_styles_scripts();
        $this->load_theme_textdomain();

        $course = new \ITINERIS_ASSIGNMENT\App\Course\RegisterCourse();

	}

	/**
	 * Load the theme text domain for translation.
	 *
	 * @since    0.0.1
	 */
	public function load_theme_textdomain() {

		load_theme_textdomain(
			$this->theme_name,
			false,
            get_template_directory() . '/languages/'
		);

	}

    public function enqueue_theme_styles_scripts() {
        // Enqueue Admin Styles And Scripts

        // add_action('admin_enqueue_scripts', function() {
        //     wp_enqueue_script(
        //         'wp-starter-theme-admin-scripts',
        //         get_template_directory_uri() . '/dist/js/admin.js',
        //         array(),
        //         $this->version
        //     );

        //     wp_enqueue_style(
        //         'wp-starter-theme-admin-styles',
        //         get_template_directory_uri() . '/dist/css/admin.css',
        //         array(),
        //         $this->version
        //     );
        // }, 10, 1);

        // Enqueue Styles And Scripts
        add_action('wp_enqueue_scripts', function() {
            wp_enqueue_style(
                'wp-starter-theme-styles',
                get_template_directory_uri() . '/dist/css/main.min.css',
                array(),
                $this->version
            );

            wp_enqueue_script(
                'wp-starter-theme-scripts',
                get_template_directory_uri() . '/dist/main.js',
                array(),
                $this->version,
                true
            );
        }, 10, 1);
    }

}