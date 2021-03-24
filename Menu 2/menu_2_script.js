
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

// Click on 'sortiment' ----------
$(document).on('click', '#products',(function(){
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
  $("#menuChild").toggle('slide');
  $("#menuChildBread").delay(420).effect('slide', { direction:'right'}, 500);
}))
// Click on 'tårtor'
$(document).on('click', '#cakes',(function(){
  $("#menuChild").toggle('slide');
  $("#menuChildCake").delay(420).effect('slide', { direction:'right'}, 500);
}))
// Click on 'dryck'
$(document).on('click', '#drinks',(function(){
  $("#menuChild").toggle('slide');
  $("#menuChildDrink").delay(420).effect('slide', { direction:'right'}, 500);
}))
// Back arrow second level ----------
$(document).on('click', '#backArrowChild',(function(){
  $("#menuChildBread").hide('slide', { direction:'right'});
  $("#menuChildCake").hide('slide', { direction:'right'});
  $("#menuChildDrink").hide('slide', { direction:'right'});
  $("#menuChild").delay(420).effect('slide', { direction:'left'}, 500);
}));
//Click on 'ljust bröd'

// Click on 'mörkt bröd'

// Click on 'cupcakes'
$(document).on('click', '#cupcakes',(function(){
  $("#menuChildCake").toggle('slide');
  $("#cupcakesChild").delay(420).effect('slide', { direction:'right'}, 500);
}))

// Click on 'gräddtårtor'
$(document).on('click', '#creamcakes',(function(){
  $("#menuChildCake").toggle('slide');
  $("#creamChild").delay(420).effect('slide', { direction:'right'}, 500);
}))
// Click on 'glasstårtor'
$(document).on('click', '#icecreamcakes',(function(){
  $("#menuChildCake").toggle('slide');
  $("#iceChild").delay(420).effect('slide', { direction:'right'}, 500);
}))
// Click on 'tårtor med tema'
$(document).on('click', '#themecakes',(function(){
  $("#menuChildCake").toggle('slide');
  $("#themeChild").delay(420).effect('slide', { direction:'right'}, 500);
}))
// Back arrow 'tårtor' level ----------
$(document).on('click', '#backArrowGrandchild',(function(){
  $("#cupcakesChild").hide('slide', { direction:'right'});
  $("#creamChild").hide('slide', { direction:'right'});
  $("#iceChild").hide('slide', { direction:'right'});
  $("#themeChild").hide('slide', { direction:'right'});
  $("#menuChildCake").delay(420).effect('slide', { direction:'left'}, 500);
}));