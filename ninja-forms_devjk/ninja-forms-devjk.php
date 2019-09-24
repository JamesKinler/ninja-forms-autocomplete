<?php if ( ! defined( 'ABSPATH' ) ) exit;
/**
 * Plugin Name: Google Ninja Forms Extend
 * Description: Google Auto Completes in Ninjaforms
 * Version: 1.0
 * Author: James Kinler
 */

 // Register the php classes
include plugin_dir_path(__FILE__) . '/includes/NfMainAddress.php';
include plugin_dir_path(__FILE__) . '/includes/NfAddress.php';
include plugin_dir_path(__FILE__) . '/includes/NfRoute.php';
include plugin_dir_path(__FILE__) . '/includes/NfLocality.php';
include plugin_dir_path(__FILE__) . '/includes/NfState.php';
include plugin_dir_path(__FILE__) . '/includes/NfZipCode.php';


final class NF_JK_PLUGIN {
    public function __construct(){
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ));
        add_action('wp_footer', array($this, 'your_function'));


         //Add the new list
        add_filter('ninja_forms_register_fields', function($fields){
            $fields['nfMainAddress'] = new NfMainAddress();
            return $fields;
        });


        add_filter('ninja_forms_register_fields', function($fields){
            $fields['nfAddress'] = new NfAddress();
            return $fields;
        });

        add_filter('ninja_forms_register_fields', function($fields){
            $fields['nfRoute'] = new NfRoute();
            return $fields;
        });

        add_filter('ninja_forms_register_fields', function($fields){
            $fields['nfLocality'] = new NfLocality();
            return $fields;
        });

        add_filter('ninja_forms_register_fields', function($fields){
            $fields['nfState'] = new NfState();
            return $fields;
        });

        add_filter('ninja_forms_register_fields', function($fields){
            $fields['nfZipCode'] = new NfZipCode();
            return $fields;
        });

        add_filter( 'ninja_forms_field_template_file_paths', 'custom_field_file_path' );
        function custom_field_file_path( $paths ){
          // looks for the templates file in the includes templates
          $paths[] =  plugin_dir_path(__FILE__) . '/includes/Templates/';
        return $paths;
        }
        // this adds a hook to add a new section to ninja forms admin page
        add_filter( 'ninja_forms_field_type_sections', array( $this, 'add_section' ) );
    }

    // Adds a new section
    public function add_section( $sections )
    {
        $sections[ 'google-address' ] = array(
            'id' => 'google-address',
            'nicename' => __( 'Google Address API Fields', 'ninja-forms-ua' ),
            'fieldTypes' => array(),
        );

        return $sections;
    }
    // public function your_function(){
    //   echo '<p>I am in the footer yay!</p>';
    // }
    // Register the JS
    public function enqueue_scripts(){
      wp_enqueue_script( 'my-js', plugin_dir_url( __FILE__ ) . 'js/myjs.js', array( 'nf-front-end', 'jquery-core', 'jquery' ),true);
      wp_enqueue_script( 'custom-js', plugin_dir_url( __FILE__ ) . 'js/custom.js', array( 'nf-front-end', 'jquery-core', 'jquery' ),true);
      wp_enqueue_script( 'input-js', plugin_dir_url( __FILE__ ) . 'js/myInputs.js', array( 'nf-front-end', 'jquery-core', 'jquery' ),true);
    }
}

new NF_JK_PLUGIN();
