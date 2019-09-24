var nfMainAddress = Marionette.Object.extend({
  // field type is the name of whatever you named your textbox template

  fieldType: 'nfMainAddress',
  // Init Function
  initialize: function() {
    // Looks for the channel of the submit data
    Backbone.Radio.channel(this.fieldType).reply('get:submitData', this.getSubmitData);
  },

  getSubmitData: function(fieldData) {
    // If street_number is undefined fire this code
    if (typeof street_number === 'undefined') {// Type of looks to see if that element is on the DOM or not
      console.log('street_number is undefined');
      street_number = document.createElement('input'); // Then this defines the variable as a create element
      street_number.id = 'street_number'; // Then give the element an ID
      street_number.value = 'strawberries'; // then give the element a value
      console.log(street_number);
      console.log(street_number.value);
    }else{
      console.log('street number is defined');
    }

    // if route is undefined fire this code
    if (typeof route === 'undefined') { // Type of looks to see if that element is on the DOM or not
      console.log('route is undefined');
      route = document.createElement('input'); // Then this defines the variable as a create element
      route.id = 'route';  // Then give the element an ID
      route.value = 'orange'; // then give the element a value
      console.log(route);
      console.log(route.value);
    }else{
      console.log('route is defined');
    }

    // if locality is undefined fire this code
    if (typeof locality === 'undefined') { // Type of looks to see if that element is on the DOM or not
      console.log('route is undefined');
      locality = document.createElement('input'); // Then this defines the variable as a create element
      locality.id = 'locality';  // Then give the element an ID
      locality.value = 'peanut'; // then give the element a value
      console.log(locality);
      console.log(locality.value);
    }else{
      console.log('locality is defined');
    }
    // if administrative_area_level_1 is undefined fire this code
    if (typeof administrative_area_level_1 === 'undefined') { // Type of looks to see if that element is on the DOM or not
      console.log('route is undefined');
      administrative_area_level_1 = document.createElement('input'); // Then this defines the variable as a create element
      administrative_area_level_1.id = 'administrative_area_level_1';  // Then give the element an ID
      administrative_area_level_1.value = 'watermelon'; // then give the element a value
      console.log(administrative_area_level_1);
      console.log(administrative_area_level_1.value);
    }else{
      console.log('administrative_area_level_1 is defined');
    }

    if (typeof postal_code === 'undefined') { // Type of looks to see if that element is on the DOM or not
      console.log('postal_code is undefined');
      postal_code = document.createElement('input'); // Then this defines the variable as a create element
      postal_code.id = 'postal_code';  // Then give the element an ID
      postal_code.value = 'grapes'; // then give the element a value
      console.log(postal_code);
      console.log(postal_code.value);
    }else{
      console.log('postal_code is defined');
    }

    fieldData.value = street_number.value + ' ' + route.value + ' ' + locality.value + ',' + administrative_area_level_1.value + ',' + postal_code.value;

    console.log('This is Whole Address');
    console.log(fieldData);
    return fieldData;
  }

});

new nfMainAddress();

var nfStreetNumber = Marionette.Object.extend({
  // field type is the name of whatever you named your textbox template
  fieldType: 'nfAddress',
  // Init Function
  initialize: function() {
    // Looks for the channel of the submit data
    Backbone.Radio.channel(this.fieldType).reply('get:submitData', this.getSubmitData);
  },

  getSubmitData: function( fieldData ) {
    // changes the value once the submit button is hit.
    fieldData.value = street_number.value;
    // console.log('This is Street Number');
    // console.log(fieldData);
    return fieldData;

  }

});

new nfStreetNumber();


var nfAddressController = Marionette.Object.extend({
    // field type is the name of whatever you named your textbox template
  fieldType: 'nfRoute',

  initialize: function() {
    // Looks for the channel of the submit data
    Backbone.Radio.channel(this.fieldType).reply('get:submitData', this.getSubmitData);
  },

  getSubmitData: function( fieldData ) {
    // changes the value once the submit button is hit.
    fieldData.value = route.value;
    // console.log('This is Route');
    // console.log(fieldData);
    return fieldData;

  }

});

new nfAddressController();

var nfLocality = Marionette.Object.extend({
    // field type is the name of whatever you named your textbox template
  fieldType: 'nfLocality',

  initialize: function() {
    // Looks for the channel of the submit data
    Backbone.Radio.channel(this.fieldType).reply('get:submitData', this.getSubmitData);
  },

  getSubmitData: function( fieldData ) {
    // changes the value once the submit button is hit.
    fieldData.value = locality.value;
    // console.log('This is Locality');
    // console.log(fieldData);
    return fieldData;

  }

});

new nfLocality();

var nfState = Marionette.Object.extend({
    // field type is the name of whatever you named your textbox template
  fieldType: 'nfState',

  initialize: function() {
    // Looks for the channel of the submit data
    Backbone.Radio.channel(this.fieldType).reply('get:submitData', this.getSubmitData);
  },

  getSubmitData: function( fieldData ) {
    // changes the value once the submit button is hit.
    fieldData.value = administrative_area_level_1.value;
    // console.log('This is State');
    // console.log(fieldData);
    return fieldData;

  }

});

new nfState();


var nfZipCode = Marionette.Object.extend({
    // field type is the name of whatever you named your textbox template
  fieldType: 'nfZipCode',

  initialize: function() {
    // Looks for the channel of the submit data
    Backbone.Radio.channel(this.fieldType).reply('get:submitData', this.getSubmitData);
  },

  getSubmitData: function( fieldData) {
    // changes the value once the submit button is hit.
    fieldData.value = postal_code.value;
    // console.log(nfZipCode);
    // console.log(fieldData);
    return fieldData;

  }

});

new nfZipCode();
