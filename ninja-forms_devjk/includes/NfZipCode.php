<?php

if (!class_exists('NF_Abstracts_List')) {
    return;
}

class NfZipCode extends NF_Abstracts_Field
{
    protected $_name = 'nfZipCode';

    protected $_type = 'nfZipCode';

    protected $_aliases = array( 'input' );

    protected $_icon = 'map-marker';

    protected $_section = 'google-address';

    protected $_templates = 'nfZipCode';

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
        $this->_nicename = __( 'Google Zipcode', 'ninja-forms' );
        add_filter( 'ninja_forms_merge_tag_calc_value_' . $this->_type, array( $this, 'get_calc_value' ), 10, 2 );
    }
}
