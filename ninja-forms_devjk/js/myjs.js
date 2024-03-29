var placeSearch, autocomplete;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  postal_code: 'short_name',
  // country: 'long_name',
};
console.log(JSON.stringify(componentForm)); //before looping
// console.log('I am an object',Object.keys(componentForm));

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'), {types: ['geocode']});

  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete.setFields(['address_component']);

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);

}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm ) {
    if (document.getElementById(component) != null) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;

        // console.log(document.getElementById(component).value = '');
    }
    else {
        // console.log('null');
        componentForm[component] = "null";
    }

  }

  console.log(JSON.stringify(componentForm));//after looping and setting value to 'null'

  // for (var component in componentForm) {
  //   document.getElementById(component).value = '';
  //   document.getElementById(component).disabled = false;
  //
  // }

  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType] == 'long_name') {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
      console.log('Dino');
    }else if(componentForm[addressType] == 'short_name'){
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
      console.log('Cheese');
    }else{
      console.log('Null');
    }
  }

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  // for (var i = 0; i < place.address_components.length; i++) {
  //   var addressType = place.address_components[i].types[0];
  //   if (componentForm[addressType]) {
  //     var val = place.address_components[i][componentForm[addressType]];
  //     document.getElementById(addressType).value = val;
  //   }
  // }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle(
          {center: geolocation, radius: position.coords.accuracy});
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
