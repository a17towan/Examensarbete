 // Local storage attempt
 function setup()
 {
    var userid=localStorage.getItem("userid");
    if(userid==null) userid=Math.ceil(Math.random()*1000000);
    localStorage.setItem("userid",userid);
    console.log(userid);
    document.getElementById("deltagareID").value = userid;
 }

// Toggle menu up & down
$(document).on('click', '.navbar',(function(){
  $("#menu").slideToggle("fast");
}));
// Close menu upon click on body
$(document).on('click', '.ark',(function(){
  $("#menu").slideUp("fast");
  
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

var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + '.' + millisecond;
//var test = today + millisecond;
document.getElementById("startTid").value = time;
}

// Single Page Application
document.getElementById("omOssSida").style="display:none";
document.getElementById("kontaktSida").style="display:none";

// Start the test
$(document).on('click', '.startBtn',(function(){
document.getElementById("overlay").style.display = "none";
}));


// Remove hearts
var heart = document.createElement('img');
heart.src ='HEART.svg';
heart.className = 'heart';

function removeHearts(){
  var loop = document.getElementsByTagName("li");
  for(var i = 0; i < loop.length; i++){
    if(loop[i].childNodes[1] != null){
      var childs = loop[i].childNodes[1];
      loop[i].removeChild(childs);
    }
  }
}

// Click on 'sortiment' ----------
$(document).on('click', '#products',(function(){
  this.appendChild(heart);
  $("#menuParent").toggle('slide');
  $("#menuChild").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Back arrow first level ----------
$(document).on('click', '.backArrow',(function(){
  $("#menuChild").toggle('slide', { direction:'right'});
  $("#menuParent").delay(420).effect('slide', { direction:'left'}, 500);
}));

// Click on 'bröd'
$(document).on('click', '#bread',(function(){
  this.appendChild(heart);
  $("#menuChild").toggle('slide');
  $("#menuChildBread").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Click on 'tårtor'
$(document).on('click', '#cakes',(function(){
  this.appendChild(heart);
  $("#menuChild").toggle('slide');
  $("#menuChildCake").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Click on 'dryck'
$(document).on('click', '#drinks',(function(){
  this.appendChild(heart);
  $("#menuChild").toggle('slide');
  $("#menuChildDrink").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Click on 'kakor'
$(document).on('click', '#cookies', (function(){
  this.appendChild(heart);
  $("#menuChild").toggle('slide');
  $("#menuChildCookie").delay(420).effect('slide', { direction:'right'}, 500);
}))

// Back arrow second level ----------
$(document).on('click', '.backArrowChild',(function(){
  $("#menuChildBread").hide('slide', { direction:'right'});
  $("#menuChildCake").hide('slide', { direction:'right'});
  $("#menuChildDrink").hide('slide', { direction:'right'});
  $("#menuChildCookie").hide('slide', { direction:'right'});
  $("#menuChild").delay(420).effect('slide', { direction:'left'}, 500);
  removeHearts();
}));

// Click on 'cupcakes'
$(document).on('click', '#cupcakes',(function(){
  this.appendChild(heart);
  $("#menuChildCake").toggle('slide');
  $("#lightBreadChild").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Click on 'gräddtårtor'
$(document).on('click', '#creamcakes',(function(){
  this.appendChild(heart);
  $("#menuChildCake").toggle('slide');
  $("#creamChild").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Click on 'glasstårtor'
$(document).on('click', '#icecreamcakes',(function(){
  this.appendChild(heart);
  $("#menuChildCake").toggle('slide');
  $("#iceChild").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Click on 'tårtor med tema'
$(document).on('click', '#themecakes',(function(){
  this.appendChild(heart);
  $("#menuChildCake").toggle('slide');
  $("#themeChild").delay(420).effect('slide', { direction:'right'}, 500);
}));

//Click on 'ljust bröd'
$(document).on('click', '#lightBread',(function(){
  this.appendChild(heart);
  $("#menuChildBread").toggle('slide');
  $("#lightBreadChild").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Click on 'mörkt bröd'
$(document).on('click', '#darkBread',(function(){
  this.appendChild(heart);
  $("#menuChildBread").toggle('slide');
  $("#darkBreadChild").delay(420).effect('slide', { direction:'right'}, 500);
}));

//Click on 'kalla drycker'
$(document).on('click', '#coldDrinks',(function(){
  this.appendChild(heart);
  $("#menuChildDrink").toggle('slide');
  $("#coldChild").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Click on 'varma drycker'
$(document).on('click', '#hotDrinks',(function(){
  this.appendChild(heart);
  $("#menuChildDrink").toggle('slide');
  $("#hotChild").delay(420).effect('slide', { direction:'right'}, 500);
}));

// Click on 'hårda kakor'
$(document).on('click', '#hardCookie', (function(){
  this.appendChild(heart);
  $("#menuChildCookie").toggle('slide');
  $("#hardCookieChild").delay(420).effect('slide', { direction:'right'}, 500);
}))

// Click on 'mjuka kakor'
$(document).on('click', '#softCookie', (function(){
  this.appendChild(heart);
  $("#menuChildCookie").toggle('slide');
  $("#softCookieChild").delay(420).effect('slide', { direction:'right'}, 500);
}))

// ----------------------------------->
// Back arrow 'tårtor' level ----------
$(document).on('click', '.backArrowCakes',(function(){
  this.appendChild(heart);
  $("#cupcakesChild").hide('slide', { direction:'right'});
  $("#creamChild").hide('slide', { direction:'right'});
  $("#iceChild").hide('slide', { direction:'right'});
  $("#themeChild").hide('slide', { direction:'right'});
  $("#menuChildCake").delay(420).effect('slide', { direction:'left'}, 500);
  removeHearts();
}));
// Back arrow 'bread' level ----------
$(document).on('click', '.backArrowBread',(function(){
  this.appendChild(heart);
  $("#lightBreadChild").hide('slide', { direction:'right'});
  $("#darkBreadChild").hide('slide', { direction:'right'});
  $("#menuChildBread").delay(420).effect('slide', { direction:'left'}, 500);
  removeHearts();
}));
// Back arrow 'drink' level ----------
$(document).on('click', '.backArrowDrinks',(function(){
  this.appendChild(heart);
  $("#coldChild").hide('slide', { direction:'right'});
  $("#hotChild").hide('slide', { direction:'right'});
  $("#menuChildDrink").delay(420).effect('slide', { direction:'left'}, 500);
  removeHearts();
}));
//Back arrow 'cookies' level ----------
$(document).on('click', '.backArrowCookies',(function(){
  this.appendChild(heart);
  $("#hardCookieChild").hide('slide', { direction:'right'});
  $("#softCookieChild").hide('slide', { direction:'right'});
  $("#menuChildCookie").delay(420).effect('slide', { direction:'left'}, 500);
  removeHearts();
}));
// ----------------------------------->