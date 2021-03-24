
// Toggle menu up & down
$(document).on('click', '.navbar',(function(){
  $("#menu").slideToggle("fast");
}));
// Close menu upon click on body
$(document).on('click', '.ark',(function(){
  $("#menu").slideUp("fast");
  
}));

// Single Page Application
document.getElementById("omOssSida").style="display:none";
document.getElementById("kontaktSida").style="display:none";

// Remove hearts
var heart = document.createElement('img');
heart.src ='HEART.svg';
heart.className = 'heart';

function removeHearts(){
  var loop = document.getElementsByTagName("li");
  for(var i = 0; i < loop.length; i++){
    if(loop[i].childNodes[1] != null){
      var hey = loop[i].childNodes[1];
      loop[i].removeChild(hey);
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
$(document).on('click', '#backArrow',(function(){
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

// Back arrow second level ----------
$(document).on('click', '#backArrowChild',(function(){
  $("#menuChildBread").hide('slide', { direction:'right'});
  $("#menuChildCake").hide('slide', { direction:'right'});
  $("#menuChildDrink").hide('slide', { direction:'right'});
  $("#menuChild").delay(420).effect('slide', { direction:'left'}, 500);
  removeHearts();
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

// Back arrow 'tårtor' level ----------
$(document).on('click', '#backArrowGrandchild',(function(){
  $("#cupcakesChild").hide('slide', { direction:'right'});
  $("#creamChild").hide('slide', { direction:'right'});
  $("#iceChild").hide('slide', { direction:'right'});
  $("#themeChild").hide('slide', { direction:'right'});
  $("#menuChildCake").delay(420).effect('slide', { direction:'left'}, 500);
  removeHearts();
}));