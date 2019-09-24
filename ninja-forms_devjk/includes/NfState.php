<?php

if (!class_exists('NF_Abstracts_List')) {
    return;
}

class NfState extends NF_Abstracts_Field
{
    protected $_name = 'nfState';

    protected $_type = 'nfState';

    protected $_aliases = array( 'input' );

    protected $_section = 'google-address';

    protected $_icon = 'map-marker';

    protected $_templates = 'nfState';

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
        $this->_nicename = __( 'Google State', 'ninja-forms' );
        add_filter( 'ninja_forms_merge_tag_calc_value_' . $this->_type, array( $this, 'get_calc_value' ), 10, 2 );
    }

}
