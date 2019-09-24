<?php

if (!class_exists('NF_Abstracts_List')) {
    return;
}

class NfLocality extends NF_Abstracts_Field
{
    protected $_name = 'nfLocality';

    protected $_type = 'nfLocality';

    protected $_section = 'google-address';

    protected $_icon = 'map-marker';

    protected $_templates = 'nfLocality';

    protected $_test_value = 'Lorem ipsum';

    protected $_settings = array(
      'disable_browser_autocomplete',
      'label',
      'label_pos',
      'required',
      'placeholder',
      'default',
    );

    public function __construct()
    {

        parent::__construct();
        $this->_nicename = __( 'Google City', 'ninja-forms' );
        add_filter( 'ninja_forms_merge_tag_calc_value_' . $this->_type, array( $this, 'get_calc_value' ), 10, 2 );
    }












    // public function admin_form_element( $id, $value )
    // {
    //     $field = Ninja_Forms()->form()->get_field( $id );
    //
    //     $options = '';
    //     foreach( $field->get_setting( 'options' ) as $option ){
    //         $selected = ( is_array( $value ) && in_array( $option[ 'value' ], $value ) ) ? "selected" : '';
    //         $options .= "<option value='{$option[ 'value' ]}' $selected>{$option[ 'label' ]}</option>";
    //     }
    //
    //     return "<input class='widefat' name='fields[$id][]' id='' multiple>$options</select>";
    // }

    // public function apply_discount($value, $key)
    // {
    //     if ($key > 0) {
    //         return $value / 2;
    //     }
    //     return $value;
    // }
    // public function get_calc_value( $value, $field )
    // {
    //     $selected = explode( ',', $value );
    //     $values = array();
    //     if( isset( $field[ 'options' ] ) ) {
    //         foreach ($field['options'] as $option ) {
    //             if( ! isset( $option[ 'value' ] ) || ! in_array( $option[ 'value' ], $selected )  || ! isset( $option[ 'calc' ] ) ) continue;
    //             $converted = floatval($option[ 'calc' ]);
    //             array_push($values, $converted);
    //         }
    //     }
    //     rsort($values);
    //     $mapped = array_map(array($this, 'apply_discount'), $values, array_keys($values));
    //     return array_sum($mapped);
    // }
}
