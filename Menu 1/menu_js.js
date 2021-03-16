
// Toggle menu up & down
$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).on('click', '.navbar',(function(){
  $(".menu").slideToggle("fast");
    console.log("yo");
}));

// Menu arrow and hierarchy toggle
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

// Stop the menu from flashing grey
document.getElementById("startMenu").addEventListener("click", noFlash);
function noFlash(){
    document.getElementsByClassName("startMenu").style = "background-color:none;";
}

// Single Page Application
document.getElementById("omOssSida").style="display:none";
document.getElementById("kontaktSida").style="display:none";