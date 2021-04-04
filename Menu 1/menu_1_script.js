// Toggle menu up & down
$(document).on('click', '.navbar',(function(){
  $(".menu").slideToggle("fast");
}));

// Close menu upon click on body
$(document).on('click', '.ark',(function(){
$(".menu").slideUp("fast");
}));

// Time stamp on start the task
function initialTime(){
var today = new Date();

var year = today.getFullYear();
var month = today.getDate();
var day = today.getDay();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var millisecond = today.getMilliseconds();

var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + ':' + millisecond;
document.getElementById("startTid").value = time;
}

// Time stamp when find target
function targetAquired(){
var end = new Date();

var year = end.getFullYear();
var month = end.getDate();
var day = end.getDay();
var hour = end.getHours();
var minute = end.getMinutes();
var second = end.getSeconds();
var millisecond = end.getMilliseconds();

var result = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + ':' + millisecond;
document.getElementById("slutTid").value = result;

document.getElementById("submit").click();
}

// Menu arrow and hierarchy toggle
var toggler = document.getElementsByClassName("arrow");
var i;
for (i = 0; i < toggler.length; i++) {
toggler[i].addEventListener("click", function() {
  this.parentElement.querySelector(".nested").classList.toggle("active");
  this.classList.toggle("arrow-down");
  this.appendChild(heart);
});
}

// Add HEART.svg to each end element
var heart = document.createElement('img');
heart.src ='HEART.svg';
heart.className = 'heart';

// Stop the menu from flashing grey
document.getElementById("startMenu").addEventListener("click", noFlash);
function noFlash(){
  document.getElementsByClassName("startMenu").style = "background-color:none;";
}

// Single Page Application
document.getElementById("omOssSida").style="display:none";
document.getElementById("kontaktSida").style="display:none";

// Start the test
$(document).on('click', '.startBtn',(function(){
document.getElementById("overlay").style.display = "none";
}));
