<?php

/**
 * @link              https://garden.university
 * @since             1.0.0
 * @package           ThreeD_Garden
 *
 * @wordpress-plugin
 * Plugin Name:       WP 3D Garden
 * Plugin URI:        https://garden.university/threed-garden-uri/
 * Description:       Design + manage your garden plants, beds + allotments in 3D
 * Version:           1.3.6
 * Author:            Marty McGee
 * Author URI:        https://garden.university
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       threedgarden
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class ThreeDGardenPlugin{
  
	private static $instance;
	 /*......*/

	static function threedgarden_get_instance()
	{
		if (!isset(self::$instance))
		{
			self::$instance = new self();
		}
		return self::$instance;
	}
	
	

	/**
	 * Register a post type for "plants"
	 *
	 * @link http://codex.wordpress.org/Function_Reference/register_post_type
	 */
	public function threedgarden_plants_init() {
		$labels = array(
			'name'               => _x( 'Plants', 'post type general name', 'threedgarden' ),
			'singular_name'      => _x( 'Plant', 'post type singular name', 'threedgarden' ),
			'menu_name'          => _x( 'Plants', 'admin menu', 'threedgarden' ),
			'name_admin_bar'     => _x( 'Plant', 'add new on admin bar', 'threedgarden' ),
			'add_new'            => _x( 'Add New', 'plant', 'threedgarden' ),
			'add_new_item'       => __( 'Add New Plant', 'threedgarden' ),
			'new_item'           => __( 'New Plant', 'threedgarden' ),
			'edit_item'          => __( 'Edit Plant', 'threedgarden' ),
			'view_item'          => __( 'View Plant', 'threedgarden' ),
			'all_items'          => __( 'All Plants', 'threedgarden' ),
			'search_items'       => __( 'Search Plants', 'threedgarden' ),
			'parent_item_colon'  => __( 'Parent Plants:', 'threedgarden' ),
			'not_found'          => __( 'No plants found.', 'threedgarden' ),
			'not_found_in_trash' => __( 'No plants found in Trash.', 'threedgarden' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Post type for plant notes and information.', 'threedgarden' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => false,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'plant' ),
			'capability_type'    => 'post',
			'show_in_rest'       => true,
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
			//'taxonomies'         => array('category', 'post_tag' )
		);

		register_post_type( 'plant', $args );
	}

	/**
	 * Update messages for "plants"
	 *
	 * See /wp-admin/edit-form-advanced.php
	 *
	 * @param array $messages Existing post update messages.
	 *
	 * @return array Amended post update messages with new CPT update messages.
	 */
	public function threedgarden_plant_updated_messages( $messages ) {
		$post             = get_post();
		$post_type        = get_post_type( $post );
		$post_type_object = get_post_type_object( $post_type );

		$messages['plant'] = array(
			0  => '', // Unused. Messages start at index 1.
			1  => __( 'Plant updated.', 'threedgarden' ),
			2  => __( 'Custom field updated.', 'threedgarden' ),
			3  => __( 'Custom field deleted.', 'threedgarden' ),
			4  => __( 'Plant updated.', 'threedgarden' ),
			/* translators: %s: date and time of the revision */
			5  => isset( $_GET['revision'] ) ? sprintf( __( 'Plant restored to revision from %s', 'threedgarden' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
			6  => __( 'Plant published.', 'threedgarden' ),
			7  => __( 'Plant saved.', 'threedgarden' ),
			8  => __( 'Plant submitted.', 'threedgarden' ),
			9  => sprintf(
				__( 'Plant scheduled for: <strong>%1$s</strong>.', 'threedgarden' ),
				// translators: Publish box date format, see http://php.net/date
				date_i18n( __( 'M j, Y @ G:i', 'threedgarden' ), strtotime( $post->post_date ) )
			),
			10 => __( 'Plant draft updated.', 'threedgarden' )
		);

		if ( $post_type_object->publicly_queryable ) {
			$permalink = get_permalink( $post->ID );

			$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), __( 'View plant', 'threedgarden' ) );
			$messages[ $post_type ][1] .= $view_link;
			$messages[ $post_type ][6] .= $view_link;
			$messages[ $post_type ][9] .= $view_link;

			$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
			$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), __( 'Preview plant', 'threedgarden' ) );
			$messages[ $post_type ][8]  .= $preview_link;
			$messages[ $post_type ][10] .= $preview_link;
		}

		return $messages;
	}

	// Create two taxonomies, Type and Season, for the post type "Plant"
	public function threedgarden_plant_taxonomies() {
		
		// Add Plant Type taxonomy, make it hierarchical (like categories)
		$labels = array(
			'name'              => _x( 'Plant Types', 'taxonomy general name' ),
			'singular_name'     => _x( 'Plant Type', 'taxonomy singular name' ),
			'search_items'      => __( 'Search Plant Types' ),
			'all_items'         => __( 'All Plant Types' ),
			'parent_item'       => __( 'Parent Plant Type' ),
			'parent_item_colon' => __( 'Parent Plant Type:' ),
			'edit_item'         => __( 'Edit Plant Type' ),
			'update_item'       => __( 'Update Plant Type' ),
			'add_new_item'      => __( 'Add New Plant Type' ),
			'new_item_name'     => __( 'New Plant Type Name' ),
			'menu_name'         => __( 'Plant Types' ),
		);
		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'show_in_rest'      => true,
			'rewrite'           => array( 'slug' => 'plant_type' ),
		);
		register_taxonomy( 'plant_type', array( 'plant' ), $args );

		// Add Plant Season taxonomy, make it non-hierarchical (like tags)
		$labels = array(
			'name'                       => _x( 'Plant Seasons', 'taxonomy general name' ),
			'singular_name'              => _x( 'Plant Season', 'taxonomy singular name' ),
			'search_items'               => __( 'Search Plant Seasons' ),
			'popular_items'              => __( 'Popular Plant Seasons' ),
			'all_items'                  => __( 'All Plant Seasons' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Plant Season' ),
			'update_item'                => __( 'Update Plant Season' ),
			'add_new_item'               => __( 'Add New Plant Season' ),
			'new_item_name'              => __( 'New Plant Season Name' ),
			'separate_items_with_commas' => __( 'Separate plant seasons with commas' ),
			'add_or_remove_items'        => __( 'Add or remove plant seasons' ),
			'choose_from_most_used'      => __( 'Choose from the most used plant seasons' ),
			'not_found'                  => __( 'No plant seasons found.' ),
			'menu_name'                  => __( 'Plant Seasons' ),
		);
		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'show_in_rest'          => true,
			'rewrite'               => array( 'slug' => 'plant_season' ),
		);
		register_taxonomy( 'plant_season', 'plant', $args );
	}

	/**
	 * Register a post type for "allotments"
	 *
	 * @link http://codex.wordpress.org/Function_Reference/register_post_type
	 */
	public function threedgarden_allotments_init() {
		$labels = array(
			'name'               => _x( 'Allotments', 'post type general name', 'threedgarden' ),
			'singular_name'      => _x( 'Allotment', 'post type singular name', 'threedgarden' ),
			'menu_name'          => _x( 'Allotments', 'admin menu', 'threedgarden' ),
			'name_admin_bar'     => _x( 'Allotment', 'add new on admin bar', 'threedgarden' ),
			'add_new'            => _x( 'Add New', 'allotment', 'threedgarden' ),
			'add_new_item'       => __( 'Add New Allotment', 'threedgarden' ),
			'new_item'           => __( 'New Allotment', 'threedgarden' ),
			'edit_item'          => __( 'Edit Allotment', 'threedgarden' ),
			'view_item'          => __( 'View Allotment', 'threedgarden' ),
			'all_items'          => __( 'All Allotments', 'threedgarden' ),
			'search_items'       => __( 'Search Allotments', 'threedgarden' ),
			'parent_item_colon'  => __( 'Parent Allotments:', 'threedgarden' ),
			'not_found'          => __( 'No allotments found.', 'threedgarden' ),
			'not_found_in_trash' => __( 'No allotments found in Trash.', 'threedgarden' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Post type for allotment notes and information.', 'threedgarden' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => false,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'allotment' ),
			'capability_type'    => 'post',
			'show_in_rest'       => true,
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
			//'taxonomies'         => array('category', 'post_tag' )
		);

		register_post_type( 'allotment', $args );
	}

	/**
	 * Update messages for "allotments"
	 *
	 * See /wp-admin/edit-form-advanced.php
	 *
	 * @param array $messages Existing post update messages.
	 *
	 * @return array Amended post update messages with new CPT update messages.
	 */
	public function threedgarden_allotment_updated_messages( $messages ) {
		$post             = get_post();
		$post_type        = get_post_type( $post );
		$post_type_object = get_post_type_object( $post_type );

		$messages['allotment'] = array(
			0  => '', // Unused. Messages start at index 1.
			1  => __( 'Allotment updated.', 'threedgarden' ),
			2  => __( 'Custom field updated.', 'threedgarden' ),
			3  => __( 'Custom field deleted.', 'threedgarden' ),
			4  => __( 'Allotment updated.', 'threedgarden' ),
			/* translators: %s: date and time of the revision */
			5  => isset( $_GET['revision'] ) ? sprintf( __( 'Allotment restored to revision from %s', 'threedgarden' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
			6  => __( 'Allotment published.', 'threedgarden' ),
			7  => __( 'Allotment saved.', 'threedgarden' ),
			8  => __( 'Allotment submitted.', 'threedgarden' ),
			9  => sprintf(
				__( 'Allotment scheduled for: <strong>%1$s</strong>.', 'threedgarden' ),
				// translators: Publish box date format, see http://php.net/date
				date_i18n( __( 'M j, Y @ G:i', 'threedgarden' ), strtotime( $post->post_date ) )
			),
			10 => __( 'Allotment draft updated.', 'threedgarden' )
		);

		if ( $post_type_object->publicly_queryable ) {
			$permalink = get_permalink( $post->ID );

			$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), __( 'View allotment', 'threedgarden' ) );
			$messages[ $post_type ][1] .= $view_link;
			$messages[ $post_type ][6] .= $view_link;
			$messages[ $post_type ][9] .= $view_link;

			$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
			$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), __( 'Preview allotment', 'threedgarden' ) );
			$messages[ $post_type ][8]  .= $preview_link;
			$messages[ $post_type ][10] .= $preview_link;
		}

		return $messages;
	}

	// Create two taxonomies, Type and Season, for the post type "Allotment"
	public function threedgarden_allotment_taxonomies() {
		
		// Add Allotment Type taxonomy, make it hierarchical (like categories)
		$labels = array(
			'name'              => _x( 'Allotment Types', 'taxonomy general name' ),
			'singular_name'     => _x( 'Allotment Type', 'taxonomy singular name' ),
			'search_items'      => __( 'Search Allotment Types' ),
			'all_items'         => __( 'All Allotment Types' ),
			'parent_item'       => __( 'Parent Allotment Type' ),
			'parent_item_colon' => __( 'Parent Allotment Type:' ),
			'edit_item'         => __( 'Edit Allotment Type' ),
			'update_item'       => __( 'Update Allotment Type' ),
			'add_new_item'      => __( 'Add New Allotment Type' ),
			'new_item_name'     => __( 'New Allotment Type Name' ),
			'menu_name'         => __( 'Allotment Types' ),
		);
		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'show_in_rest'      => true,
			'rewrite'           => array( 'slug' => 'allotment_type' ),
		);
		register_taxonomy( 'allotment_type', array( 'allotment' ), $args );

		// Add Allotment Season taxonomy, make it non-hierarchical (like tags)
		$labels = array(
			'name'                       => _x( 'Allotment Seasons', 'taxonomy general name' ),
			'singular_name'              => _x( 'Allotment Season', 'taxonomy singular name' ),
			'search_items'               => __( 'Search Allotment Seasons' ),
			'popular_items'              => __( 'Popular Allotment Seasons' ),
			'all_items'                  => __( 'All Allotment Seasons' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Allotment Season' ),
			'update_item'                => __( 'Update Allotment Season' ),
			'add_new_item'               => __( 'Add New Allotment Season' ),
			'new_item_name'              => __( 'New Allotment Season Name' ),
			'separate_items_with_commas' => __( 'Separate allotment seasons with commas' ),
			'add_or_remove_items'        => __( 'Add or remove allotment seasons' ),
			'choose_from_most_used'      => __( 'Choose from the most used allotment seasons' ),
			'not_found'                  => __( 'No allotment seasons found.' ),
			'menu_name'                  => __( 'Allotment Seasons' ),
		);
		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'show_in_rest'          => true,
			'rewrite'               => array( 'slug' => 'allotment_season' ),
		);
		register_taxonomy( 'allotment_season', 'allotment', $args );
	}

	/**
	 * Register a post type for "beds"
	 *
	 * @link http://codex.wordpress.org/Function_Reference/register_post_type
	 */
	public function threedgarden_beds_init() {
		$labels = array(
			'name'               => _x( 'Beds', 'post type general name', 'threedgarden' ),
			'singular_name'      => _x( 'Bed', 'post type singular name', 'threedgarden' ),
			'menu_name'          => _x( 'Beds', 'admin menu', 'threedgarden' ),
			'name_admin_bar'     => _x( 'Bed', 'add new on admin bar', 'threedgarden' ),
			'add_new'            => _x( 'Add New', 'bed', 'threedgarden' ),
			'add_new_item'       => __( 'Add New Bed', 'threedgarden' ),
			'new_item'           => __( 'New Bed', 'threedgarden' ),
			'edit_item'          => __( 'Edit Bed', 'threedgarden' ),
			'view_item'          => __( 'View Bed', 'threedgarden' ),
			'all_items'          => __( 'All Beds', 'threedgarden' ),
			'search_items'       => __( 'Search Beds', 'threedgarden' ),
			'parent_item_colon'  => __( 'Parent Beds:', 'threedgarden' ),
			'not_found'          => __( 'No beds found.', 'threedgarden' ),
			'not_found_in_trash' => __( 'No beds found in Trash.', 'threedgarden' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Post type for bed notes and information.', 'threedgarden' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => false,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'bed' ),
			'capability_type'    => 'post',
			'show_in_rest'       => true,
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
			//'taxonomies'         => array('category', 'post_tag' )
		);

		register_post_type( 'bed', $args );
	}

	/**
	 * Update messages for "beds"
	 *
	 * See /wp-admin/edit-form-advanced.php
	 *
	 * @param array $messages Existing post update messages.
	 *
	 * @return array Amended post update messages with new CPT update messages.
	 */
	public function threedgarden_bed_updated_messages( $messages ) {
		$post             = get_post();
		$post_type        = get_post_type( $post );
		$post_type_object = get_post_type_object( $post_type );

		$messages['bed'] = array(
			0  => '', // Unused. Messages start at index 1.
			1  => __( 'Bed updated.', 'threedgarden' ),
			2  => __( 'Custom field updated.', 'threedgarden' ),
			3  => __( 'Custom field deleted.', 'threedgarden' ),
			4  => __( 'Bed updated.', 'threedgarden' ),
			/* translators: %s: date and time of the revision */
			5  => isset( $_GET['revision'] ) ? sprintf( __( 'Bed restored to revision from %s', 'threedgarden' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
			6  => __( 'Bed published.', 'threedgarden' ),
			7  => __( 'Bed saved.', 'threedgarden' ),
			8  => __( 'Bed submitted.', 'threedgarden' ),
			9  => sprintf(
				__( 'Bed scheduled for: <strong>%1$s</strong>.', 'threedgarden' ),
				// translators: Publish box date format, see http://php.net/date
				date_i18n( __( 'M j, Y @ G:i', 'threedgarden' ), strtotime( $post->post_date ) )
			),
			10 => __( 'Bed draft updated.', 'threedgarden' )
		);

		if ( $post_type_object->publicly_queryable ) {
			$permalink = get_permalink( $post->ID );

			$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), __( 'View bed', 'threedgarden' ) );
			$messages[ $post_type ][1] .= $view_link;
			$messages[ $post_type ][6] .= $view_link;
			$messages[ $post_type ][9] .= $view_link;

			$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
			$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), __( 'Preview bed', 'threedgarden' ) );
			$messages[ $post_type ][8]  .= $preview_link;
			$messages[ $post_type ][10] .= $preview_link;
		}

		return $messages;
	}

	// Create two taxonomies, Type and Soil, for the post type "Bed"
	public function threedgarden_bed_taxonomies() {
		
		// Add Bed Type taxonomy, make it hierarchical (like categories)
		$labels = array(
			'name'              => _x( 'Bed Types', 'taxonomy general name' ),
			'singular_name'     => _x( 'Bed Type', 'taxonomy singular name' ),
			'search_items'      => __( 'Search Bed Types' ),
			'all_items'         => __( 'All Bed Types' ),
			'parent_item'       => __( 'Parent Bed Type' ),
			'parent_item_colon' => __( 'Parent Bed Type:' ),
			'edit_item'         => __( 'Edit Bed Type' ),
			'update_item'       => __( 'Update Bed Type' ),
			'add_new_item'      => __( 'Add New Bed Type' ),
			'new_item_name'     => __( 'New Bed Type Name' ),
			'menu_name'         => __( 'Bed Types' ),
		);
		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'show_in_rest'      => true,
			'rewrite'           => array( 'slug' => 'bed_type' ),
		);
		register_taxonomy( 'bed_type', array( 'bed' ), $args );

		// Add Bed Soil taxonomy, make it non-hierarchical (like tags)
		$labels = array(
			'name'                       => _x( 'Bed Soils', 'taxonomy general name' ),
			'singular_name'              => _x( 'Bed Soil', 'taxonomy singular name' ),
			'search_items'               => __( 'Search Bed Soils' ),
			'popular_items'              => __( 'Popular Bed Soils' ),
			'all_items'                  => __( 'All Bed Soils' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Bed Soil' ),
			'update_item'                => __( 'Update Bed Soil' ),
			'add_new_item'               => __( 'Add New Bed Soil' ),
			'new_item_name'              => __( 'New Bed Soil Name' ),
			'separate_items_with_commas' => __( 'Separate bed soils with commas' ),
			'add_or_remove_items'        => __( 'Add or remove bed soils' ),
			'choose_from_most_used'      => __( 'Choose from the most used bed soils' ),
			'not_found'                  => __( 'No bed soils found.' ),
			'menu_name'                  => __( 'Bed Soils' ),
		);
		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'show_in_rest'          => true,
			'rewrite'               => array( 'slug' => 'bed_soil' ),
		);
		register_taxonomy( 'bed_soil', 'bed', $args );
	}

	/**
	 * Register a post type for "planting plans"
	 *
	 * @link http://codex.wordpress.org/Function_Reference/register_post_type
	 */
	public function threedgarden_planting_plans_init() {
		$labels = array(
			'name'               => _x( 'Planting Plans', 'post type general name', 'threedgarden' ),
			'singular_name'      => _x( 'Planting Plan', 'post type singular name', 'threedgarden' ),
			'menu_name'          => _x( 'Planting Plans', 'admin menu', 'threedgarden' ),
			'name_admin_bar'     => _x( 'Planting Plan', 'add new on admin bar', 'threedgarden' ),
			'add_new'            => _x( 'Add New', 'planting_plan', 'threedgarden' ),
			'add_new_item'       => __( 'Add New Planting Plan', 'threedgarden' ),
			'new_item'           => __( 'New Planting Plan', 'threedgarden' ),
			'edit_item'          => __( 'Edit Planting Plan', 'threedgarden' ),
			'view_item'          => __( 'View Planting Plan', 'threedgarden' ),
			'all_items'          => __( 'All Planting Plans', 'threedgarden' ),
			'search_items'       => __( 'Search Planting Plans', 'threedgarden' ),
			'parent_item_colon'  => __( 'Parent Planting Plans:', 'threedgarden' ),
			'not_found'          => __( 'No planting plans found.', 'threedgarden' ),
			'not_found_in_trash' => __( 'No planting plans found in Trash.', 'threedgarden' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Post type for planting plan notes and information.', 'threedgarden' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => false,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'planting_plan' ),
			'capability_type'    => 'post',
			'show_in_rest'       => true,
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
			//'taxonomies'         => array('category', 'post_tag' )
		);

		register_post_type( 'planting_plan', $args );
	}

	/**
	 * Update messages for "planting plans"
	 *
	 * See /wp-admin/edit-form-advanced.php
	 *
	 * @param array $messages Existing post update messages.
	 *
	 * @return array Amended post update messages with new CPT update messages.
	 */
	public function threedgarden_planting_plan_updated_messages( $messages ) {
		$post             = get_post();
		$post_type        = get_post_type( $post );
		$post_type_object = get_post_type_object( $post_type );

		$messages['planting_plan'] = array(
			0  => '', // Unused. Messages start at index 1.
			1  => __( 'Planting Plan updated.', 'threedgarden' ),
			2  => __( 'Custom field updated.', 'threedgarden' ),
			3  => __( 'Custom field deleted.', 'threedgarden' ),
			4  => __( 'Planting Plan updated.', 'threedgarden' ),
			/* translators: %s: date and time of the revision */
			5  => isset( $_GET['revision'] ) ? sprintf( __( 'Planting Plan restored to revision from %s', 'threedgarden' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
			6  => __( 'Planting Plan published.', 'threedgarden' ),
			7  => __( 'Planting Plan saved.', 'threedgarden' ),
			8  => __( 'Planting Plan submitted.', 'threedgarden' ),
			9  => sprintf(
				__( 'Planting Plan scheduled for: <strong>%1$s</strong>.', 'threedgarden' ),
				// translators: Publish box date format, see http://php.net/date
				date_i18n( __( 'M j, Y @ G:i', 'threedgarden' ), strtotime( $post->post_date ) )
			),
			10 => __( 'Planting Plan draft updated.', 'threedgarden' )
		);

		if ( $post_type_object->publicly_queryable ) {
			$permalink = get_permalink( $post->ID );

			$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), __( 'View planting plan', 'threedgarden' ) );
			$messages[ $post_type ][1] .= $view_link;
			$messages[ $post_type ][6] .= $view_link;
			$messages[ $post_type ][9] .= $view_link;

			$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
			$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), __( 'Preview planting plan', 'threedgarden' ) );
			$messages[ $post_type ][8]  .= $preview_link;
			$messages[ $post_type ][10] .= $preview_link;
		}

		return $messages;
	}

	// Create two taxonomies, Type and Soil, for the post type "Planting Plan"
	public function threedgarden_planting_plan_taxonomies() {
		
		// Add Planting Plan Type taxonomy, make it hierarchical (like categories)
		$labels = array(
			'name'              => _x( 'Planting Plan Types', 'taxonomy general name' ),
			'singular_name'     => _x( 'Planting Plan Type', 'taxonomy singular name' ),
			'search_items'      => __( 'Search Planting Plan Types' ),
			'all_items'         => __( 'All Planting Plan Types' ),
			'parent_item'       => __( 'Parent Planting Plan Type' ),
			'parent_item_colon' => __( 'Parent Planting Plan Type:' ),
			'edit_item'         => __( 'Edit Planting Plan Type' ),
			'update_item'       => __( 'Update Planting Plan Type' ),
			'add_new_item'      => __( 'Add New Planting Plan Type' ),
			'new_item_name'     => __( 'New Planting Plan Type Name' ),
			'menu_name'         => __( 'Planting Plan Types' ),
		);
		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'show_in_rest'      => true,
			'rewrite'           => array( 'slug' => 'planting_plan_type' ),
		);
		register_taxonomy( 'planting_plan_type', array( 'planting_plan' ), $args );

		// Add Planting Plan Soil taxonomy, make it non-hierarchical (like tags)
		$labels = array(
			'name'                       => _x( 'Planting Plan Soils', 'taxonomy general name' ),
			'singular_name'              => _x( 'Planting Plan Soil', 'taxonomy singular name' ),
			'search_items'               => __( 'Search Planting Plan Soils' ),
			'popular_items'              => __( 'Popular Planting Plan Soils' ),
			'all_items'                  => __( 'All Planting Plan Soils' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Planting Plan Soil' ),
			'update_item'                => __( 'Update Planting Plan Soil' ),
			'add_new_item'               => __( 'Add New Planting Plan Soil' ),
			'new_item_name'              => __( 'New Planting Plan Soil Name' ),
			'separate_items_with_commas' => __( 'Separate planting plan soils with commas' ),
			'add_or_remove_items'        => __( 'Add or remove planting plan soils' ),
			'choose_from_most_used'      => __( 'Choose from the most used planting plan soils' ),
			'not_found'                  => __( 'No planting plan soils found.' ),
			'menu_name'                  => __( 'Planting Plan Soils' ),
		);
		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'show_in_rest'          => true,
			'rewrite'               => array( 'slug' => 'planting_plan_soil' ),
		);
		register_taxonomy( 'planting_plan_soil', 'planting_plan', $args );
	}


	

	// register plugin settings
	public function threedgarden_register_settings() {
		/*
		register_setting( 
			string   $option_group, 
			string   $option_name, 
			callable $sanitize_callback
		);
		*/
		register_setting( 
			'threedgarden_options', 
			'threedgarden_options', 
			array($this, 'threedgarden_callback_validate_options')
		);
		/*
		add_settings_section( 
			string   $id, 
			string   $title, 
			callable $callback, 
			string   $page
		);
		*/
		add_settings_section( 
			'threedgarden_section_login', 
			'Customize Login Page', 
			array($this, 'threedgarden_callback_section_login'), 
			'threedgarden'
		);
		add_settings_section( 
			'threedgarden_section_admin', 
			'Customize Admin Area', 
			array($this, 'threedgarden_callback_section_admin'), 
			'threedgarden'
		);

		/*
		add_settings_field(
			string   $id,
			string   $title,
			callable $callback,
			string   $page,
			string   $section = 'default',
			array    $args = []
		);
		*/
		add_settings_field(
			'custom_url',
			'Custom URL',
			array($this, 'threedgarden_callback_field_text'),
			'threedgarden',
			'threedgarden_section_login',
			[ 'id' => 'custom_url', 'label' => 'Custom URL for the login logo link' ]
		);
		add_settings_field(
			'custom_title',
			'Custom Title',
			array($this, 'threedgarden_callback_field_text'),
			'threedgarden',
			'threedgarden_section_login',
			[ 'id' => 'custom_title', 'label' => 'Custom title attribute for the logo link' ]
		);
		add_settings_field(
			'custom_style',
			'Custom Style',
			array($this, 'threedgarden_callback_field_radio'),
			'threedgarden',
			'threedgarden_section_login',
			[ 'id' => 'custom_style', 'label' => 'Custom CSS for the Login screen' ]
		);
		add_settings_field(
			'custom_message',
			'Custom Message',
			array($this, 'threedgarden_callback_field_textarea'),
			'threedgarden',
			'threedgarden_section_login',
			[ 'id' => 'custom_message', 'label' => 'Custom text and/or markup' ]
		);
		add_settings_field(
			'custom_footer',
			'Custom Footer',
			array($this, 'threedgarden_callback_field_text'),
			'threedgarden',
			'threedgarden_section_admin',
			[ 'id' => 'custom_footer', 'label' => 'Custom footer text' ]
		);
		add_settings_field(
			'custom_toolbar',
			'Custom Toolbar',
			array($this, 'threedgarden_callback_field_checkbox'),
			'threedgarden',
			'threedgarden_section_admin',
			[ 'id' => 'custom_toolbar', 'label' => 'Remove new post and comment links from the Toolbar' ]
		);
		add_settings_field(
			'custom_scheme',
			'Custom Scheme',
			array($this, 'threedgarden_callback_field_select'),
			'threedgarden',
			'threedgarden_section_admin',
			[ 'id' => 'custom_scheme', 'label' => 'Default color scheme for new users' ]
		);

	}

	// validate plugin settings
	public function threedgarden_callback_validate_options($input) {
		// todo: add validation functionality..
		//return $input;
		// custom url
		if ( isset( $input['custom_url'] ) ) {
			$input['custom_url'] = esc_url( $input['custom_url'] );
		}
		
		// custom title
		if ( isset( $input['custom_title'] ) ) {
			$input['custom_title'] = sanitize_text_field( $input['custom_title'] );
		}
		
		// custom style
		$radio_options = array(
			'enable'  => 'Enable custom styles',
			'disable' => 'Disable custom styles'
		);
		
		if ( ! isset( $input['custom_style'] ) ) {
			$input['custom_style'] = null;
		}
		if ( ! array_key_exists( $input['custom_style'], $radio_options ) ) {
			$input['custom_style'] = null;
		}
		
		// custom message
		if ( isset( $input['custom_message'] ) ) {
			$input['custom_message'] = wp_kses_post( $input['custom_message'] );
		}
		
		// custom footer
		if ( isset( $input['custom_footer'] ) ) {
			$input['custom_footer'] = sanitize_text_field( $input['custom_footer'] );
		}
		
		// custom toolbar
		if ( ! isset( $input['custom_toolbar'] ) ) {
			$input['custom_toolbar'] = null;
		}
		
		$input['custom_toolbar'] = ($input['custom_toolbar'] == 1 ? 1 : 0);
		
		// custom scheme
		$select_options = array(
			'default'   => 'Default',
			'light'     => 'Light',
			'dark'      => 'Dark',
		);
		
		if ( ! isset( $input['custom_scheme'] ) ) {
			$input['custom_scheme'] = null;
		}
		
		if ( ! array_key_exists( $input['custom_scheme'], $select_options ) ) {
			$input['custom_scheme'] = null;
		}
		
		return $input;
	}
	// callback: login section
	public function threedgarden_callback_section_login() {
		echo '<p>These settings enable you to customize the WP Login screen.</p>';
	}
	// callback: admin section
	public function threedgarden_callback_section_admin() {
		echo '<p>These settings enable you to customize the WP Admin Area.</p>';
	}
	// callback: text field
	public function threedgarden_callback_field_text( $args ) {
		// todo: add callback functionality..
		//echo 'This will be a text field.';
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
	
		$id    = isset( $args['id'] )    ? $args['id']    : '';
		$label = isset( $args['label'] ) ? $args['label'] : '';
		
		$value = isset( $options[$id] ) ? sanitize_text_field( $options[$id] ) : '';
		
		echo '<input id="threedgarden_options_'. $id .'" name="threedgarden_options['. $id .']" type="text" size="40" value="'. $value .'"><br />';
		echo '<label for="threedgarden_options_'. $id .'">'. $label .'</label>';
		
	}
	// callback: radio field
	public function threedgarden_callback_field_radio( $args ) {
		// todo: add callback functionality..
		//echo 'This will be a radio field.';
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
	
		$id    = isset( $args['id'] )    ? $args['id']    : '';
		$label = isset( $args['label'] ) ? $args['label'] : '';
		
		$selected_option = isset( $options[$id] ) ? sanitize_text_field( $options[$id] ) : '';
		
		$radio_options = array(
			
			'enable'  => 'Enable custom styles',
			'disable' => 'Disable custom styles'
			
		);
		
		foreach ( $radio_options as $value => $label ) {
			
			$checked = checked( $selected_option === $value, true, false );
			
			echo '<label><input name="threedgarden_options['. $id .']" type="radio" value="'. $value .'"'. $checked .'> ';
			echo '<span>'. $label .'</span></label><br />';
			
		}
	}
	// callback: textarea field
	public function threedgarden_callback_field_textarea( $args ) {
		// todo: add callback functionality..
		//echo 'This will be a textarea.';
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
	
		$id    = isset( $args['id'] )    ? $args['id']    : '';
		$label = isset( $args['label'] ) ? $args['label'] : '';
		
		$allowed_tags = wp_kses_allowed_html( 'post' );
		
		$value = isset( $options[$id] ) ? wp_kses( stripslashes_deep( $options[$id] ), $allowed_tags ) : '';
		
		echo '<textarea id="threedgarden_options_'. $id .'" name="threedgarden_options['. $id .']" rows="5" cols="50">'. $value .'</textarea><br />';
		echo '<label for="threedgarden_options_'. $id .'">'. $label .'</label>';
	}
	// callback: checkbox field
	public function threedgarden_callback_field_checkbox( $args ) {
		// todo: add callback functionality..
		//echo 'This will be a checkbox.';
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
	
		$id    = isset( $args['id'] )    ? $args['id']    : '';
		$label = isset( $args['label'] ) ? $args['label'] : '';
		
		$checked = isset( $options[$id] ) ? checked( $options[$id], 1, false ) : '';
		
		echo '<input id="threedgarden_options_'. $id .'" name="threedgarden_options['. $id .']" type="checkbox" value="1"'. $checked .'> ';
		echo '<label for="threedgarden_options_'. $id .'">'. $label .'</label>';
	}
	// callback: select field
	public function threedgarden_callback_field_select( $args ) {
		// todo: add callback functionality..
		//echo 'This will be a select menu.';
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
	
		$id    = isset( $args['id'] )    ? $args['id']    : '';
		$label = isset( $args['label'] ) ? $args['label'] : '';
		
		$selected_option = isset( $options[$id] ) ? sanitize_text_field( $options[$id] ) : '';
		
		$select_options = array(
			'default'   => 'Default',
			'light'     => 'Light',
			'dark'      => 'Dark',
		);
		
		echo '<select id="threedgarden_options_'. $id .'" name="threedgarden_options['. $id .']">';
		
		foreach ( $select_options as $value => $option ) {
			$selected = selected( $selected_option === $value, true, false );
			echo '<option value="'. $value .'"'. $selected .'>'. $option .'</option>';
		}
		
		echo '</select> <label for="threedgarden_options_'. $id .'">'. $label .'</label>';
	}



	// default plugin options
	public function threedgarden_options_default() {

		return array(
			'custom_url'     => 'https://garden.university/',
			'custom_title'   => 'Powered by Company Juice',
			'custom_style'   => 'disable',
			'custom_message' => '<p class="custom-message">My custom message</p>',
			'custom_footer'  => 'Special message for users',
			'custom_toolbar' => false,
			'custom_scheme'  => 'default',
		);

	}



	// custom login logo url
	public function threedgarden_custom_login_url( $url ) {
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
		
		if ( isset( $options['custom_url'] ) && ! empty( $options['custom_url'] ) ) {
			$url = esc_url( $options['custom_url'] );
		}
		
		return $url;
	}
	// custom login logo title
	public function threedgarden_custom_login_title( $title ) {
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
		
		if ( isset( $options['custom_title'] ) && ! empty( $options['custom_title'] ) ) {
			$title = esc_attr( $options['custom_title'] );
		}
		
		return $title;
	}
	// custom login styles
	public function threedgarden_custom_login_styles() {

		$styles = false;
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
		
		if ( isset( $options['custom_style'] ) && ! empty( $options['custom_style'] ) ) {
			$styles = sanitize_text_field( $options['custom_style'] );
		}
		
		if ( 'enable' === $styles ) {
			/*
			wp_enqueue_style( 
				string           $handle, 
				string           $src = '', 
				array            $deps = array(), 
				string|bool|null $ver = false, 
				string           $media = 'all' 
			)
			wp_enqueue_script( 
				string           $handle, 
				string           $src = '', 
				array            $deps = array(), 
				string|bool|null $ver = false, 
				bool             $in_footer = false 
			)
			*/
			wp_enqueue_style( 
				'threedgarden', 
				plugin_dir_url( dirname( __FILE__ ) ) . 'threed-garden/public/css/threed-garden-public-custom.css', 
				array(), 
				null, 
				'screen' 
			);
			wp_enqueue_script( 
				'threedgarden', 
				plugin_dir_url( dirname( __FILE__ ) ) . 'threed-garden/public/js/threed-garden-public-custom.js', 
				array(), 
				null, 
				true 
			);
		}
	}
	// custom login message
	public function threedgarden_custom_login_message( $message ) {
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
		
		if ( isset( $options['custom_message'] ) && ! empty( $options['custom_message'] ) ) {
			$message = wp_kses_post( $options['custom_message'] ) . $message;
		}
		
		return $message;
	}
	// custom admin footer
	public function threedgarden_custom_admin_footer( $message ) {
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
		
		if ( isset( $options['custom_footer'] ) && ! empty( $options['custom_footer'] ) ) {
			$message = sanitize_text_field( $options['custom_footer'] );
		}
		
		return $message;
	}
	// custom toolbar items
	public function threedgarden_custom_admin_toolbar() {
		
		$toolbar = false;
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
		
		if ( isset( $options['custom_toolbar'] ) && ! empty( $options['custom_toolbar'] ) ) {
			$toolbar = (bool) $options['custom_toolbar'];
		}
		
		if ( $toolbar ) {
			global $wp_admin_bar;
			
			$wp_admin_bar->remove_menu( 'comments' );
			$wp_admin_bar->remove_menu( 'new-content' );
		}
	}
	// custom admin color scheme
	public function threedgarden_custom_admin_scheme( $user_id ) {
		
		$scheme = 'default';
		$options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
		
		if ( isset( $options['custom_scheme'] ) && ! empty( $options['custom_scheme'] ) ) {
			$scheme = sanitize_text_field( $options['custom_scheme'] );
		}
		
		$args = array( 'ID' => $user_id, 'admin_color' => $scheme );
		
		wp_update_user( $args );
	}
	// custom admin styles
	public function threedgarden_custom_admin_styles() {

		// $styles = false;
		// $options = get_option( 'threedgarden_options', $this->threedgarden_options_default() );
		
		// if ( isset( $options['custom_style'] ) && ! empty( $options['custom_style'] ) ) {
		// 	$styles = sanitize_text_field( $options['custom_style'] );
		// }
		
		// if ( 'enable' === $styles ) {
			/*
			wp_enqueue_style( 
				string           $handle, 
				string           $src = '', 
				array            $deps = array(), 
				string|bool|null $ver = false, 
				string           $media = 'all' 
			)
			wp_enqueue_script( 
				string           $handle, 
				string           $src = '', 
				array            $deps = array(), 
				string|bool|null $ver = false, 
				bool             $in_footer = false 
			)
			*/
			wp_enqueue_style( 
				'threedgarden', 
				plugin_dir_url( dirname( __FILE__ ) ) . 'threed-garden/admin/css/threedgarden-admin.css', 
				array(), 
				null, 
				'screen' 
			);
			wp_enqueue_script( 
				'threedgarden', 
				plugin_dir_url( dirname( __FILE__ ) ) . 'threed-garden/admin/js/threedgarden-admin.js', 
				array(), 
				null, 
				true 
			);
		// }
	}



	// do stuff on uninstall
	public function threedgarden_on_uninstall() {
		if ( ! current_user_can( 'activate_plugins' ) ) return;

		delete_option( 'threedgarden_posts_per_page', 10 );
		delete_option( 'threedgarden_show_welcome_page', true );
	}

	/**
	 * run plugin init
	 */
	public function threedgarden_plugin_init()
	{	
		// if ( is_admin() ) {
		register_uninstall_hook( __FILE__, array($this, 'threedgarden_on_uninstall') );
		
		add_action( 'init', array($this, 'threedgarden_plants_init') );
		add_filter( 'post_updated_messages', array($this, 'threedgarden_plant_updated_messages') );
		add_action( 'init', array($this, 'threedgarden_plant_taxonomies'), 0 );
		add_action( 'init', array($this, 'threedgarden_allotments_init') );
		add_filter( 'post_updated_messages', array($this, 'threedgarden_allotment_updated_messages') );
		add_action( 'init', array($this, 'threedgarden_allotment_taxonomies'), 0 );
		add_action( 'init', array($this, 'threedgarden_beds_init') );
		add_filter( 'post_updated_messages', array($this, 'threedgarden_bed_updated_messages') );
		add_action( 'init', array($this, 'threedgarden_bed_taxonomies'), 0 );
		add_action( 'init', array($this, 'threedgarden_planting_plans_init') );
		add_filter( 'post_updated_messages', array($this, 'threedgarden_planting_plan_updated_messages') );
		add_action( 'init', array($this, 'threedgarden_planting_plan_taxonomies'), 0 );


		add_action( 'admin_init', array($this, 'threedgarden_register_settings') );
		// }
		
		add_filter( 'login_headerurl', array($this, 'threedgarden_custom_login_url') );
		add_filter( 'login_headertitle', array($this, 'threedgarden_custom_login_title') );
		add_filter( 'login_message', array($this, 'threedgarden_custom_login_message') );
		add_filter( 'admin_footer_text', array($this, 'threedgarden_custom_admin_footer') );
		add_action( 'wp_before_admin_bar_render', array($this, 'threedgarden_custom_admin_toolbar'), 999 );
		add_action( 'user_register', array($this, 'threedgarden_custom_admin_scheme') );

		//add_action( 'login_enqueue_scripts', array($this, 'threedgarden_custom_login_styles') );
		//add_action( 'admin_enqueue_scripts', array($this, 'threedgarden_custom_admin_styles') );
	}

}

/**
 * engage wp plugin
 */
$ThreeDGardenPlugin = ThreeDGardenPlugin::threedgarden_get_instance();
$ThreeDGardenPlugin->threedgarden_plugin_init();








/**
 * **********************************************************************************************
 */



/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'THREED_GARDEN_VERSION', '1.3.6' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-threed-garden-activator.php
 */
function activate_threed_garden() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-threed-garden-activator.php';
	ThreeD_Garden_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-threed-garden-deactivator.php
 */
function deactivate_threed_garden() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-threed-garden-deactivator.php';
	ThreeD_Garden_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_threed_garden' );
register_deactivation_hook( __FILE__, 'deactivate_threed_garden' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-threed-garden.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_threed_garden() {

	$plugin = new ThreeD_Garden();
	$plugin->run();

}
run_threed_garden();

