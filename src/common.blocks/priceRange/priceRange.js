$(document).ready(function(){
    $( ".priceRange__slider" ).slider({
      range: true,
      min: 0,
      max: 150,
      values: [ 0, 150 ],
      slide: function( event, ui ) {
        $( ".priceMin" ).val( ui.values[ 0 ] );
        $( ".priceMax" ).val( ui.values[ 1 ] );
      }
    });
    $( ".priceMin" ).val( $( ".priceRange__slider" ).slider( "values", 0 ) );
    $( ".priceMax" ).val( $( ".priceRange__slider" ).slider( "values", 1 ) );
  } 
);