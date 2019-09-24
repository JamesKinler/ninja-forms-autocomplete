// Create a new object for custom validation of a custom field.
var mySubmitController = Marionette.Object.extend( {

  initialize: function() {
    this.listenTo( Backbone.Radio.channel( 'forms' ), 'forms:loaded');
    var footer= document.getElementsByTagName('footer')[0];
     var script= document.createElement('script');
     script.type= 'text/javascript';
     script.src= "https://maps.googleapis.com/maps/api/js?key=AIzaSyBqqPhA3o3eRJtQSi3dsmssGfUXOUuZftA&libraries=places&callback=initAutocomplete";
     footer.appendChild(script);
},
 });



// On Document Ready...
jQuery( document ).ready( function( $ ) {
    console.log('Loaded Jquery');
    // Instantiate our custom field's controller, defined above.
    new mySubmitController();
});
