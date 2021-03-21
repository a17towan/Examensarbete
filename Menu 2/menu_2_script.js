
// Toggle menu up & down
$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).on('click', '.navbar',(function(){
  $(".menu").slideToggle("fast");
    console.log("yo");
}));

// Single Page Application
document.getElementById("omOssSida").style="display:none";
document.getElementById("kontaktSida").style="display:none";