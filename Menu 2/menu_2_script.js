
// Toggle menu up & down
$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).on('click', '.navbar',(function(){
  $("#menu").slideToggle("fast");
    console.log("yo");
}));

// Single Page Application
document.getElementById("omOssSida").style="display:none";
document.getElementById("kontaktSida").style="display:none";

// Hide nested categories
document.getElementById("menuChild").style="display:none";
document.getElementById("menuChildBread").style="display:none";
document.getElementById("menuChildCake").style="display:none";
document.getElementById("menuChildDrink").style="display:none";
document.getElementById("cupcakesChild").style="display:none";
document.getElementById("creamChild").style="display:none";
document.getElementById("iceChild").style="display:none";
document.getElementById("themeChild").style="display:none";
document.getElementById("coldChild").style="display:none";
document.getElementById("hotChild").style="display:none";

// Test the menu 'sortiment'
$(document).on('click', '#products',(function(){
  //$("#menuChild").slide("right");
  $("#menuChild").effect('slide', { direction:'right'}, 500);
}));
