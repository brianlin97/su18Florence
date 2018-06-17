
$(".slider").on('mouseenter',function() {
  $(this).find('.slider-text').fadeToggle(1000);
});

$(".slider").on('mouseleave',function() {
  $(this).find('.slider-text').fadeToggle(150);
});

$("#slider-1").click(function() {
  $('#about-inner').fadeToggle(500);
});

$("#slider-2").click(function() {
  $('#lockerroom-inner').fadeToggle(500);
});

$("#slider-3").click(function() {
  $('#bed-inner').fadeToggle(500);
});

$("#slider-4").click(function() {
  $('#door-inner').fadeToggle(500);
});

$("#slider-5").click(function() {
  $('#factory-inner').fadeToggle(500);
});

$("#slider-6").click(function() {
  $('#farm-inner').fadeToggle(500);
  $(".header").delay(8000).fadeIn();
  $(".link").delay(8000).fadeIn();
  $("body").css("background","linear-gradient(to right, #0f2027, #203a43, #2c5364)");
});

$("#slider-7").click(function() {
  $('#automated-landscapes-inner').fadeToggle(500);
});

$("#slider-8").click(function() {
  $('#patent-inner').fadeToggle(500);
});

$("#farm-icon").click(function() {
  $(".header").css("opacity", "1");
  $(".link").css("opacity", "1");
  $("body").css("background", "linear-gradient(90deg,#ff8d4e, #c74700, #fe7034, #f27452)");
});

$("#slider-9").click(function() {
  $('#curator-inner').fadeToggle(500);
});

$("#slider-10").click(function() {
  $('#biennale-inner').fadeToggle(500);
});


$(".fa-times").click(function(){
  $('.inner').css('display', 'none');
});

$(function() {
  $(".header").delay(8000).fadeIn();
  $(".link").delay(8000).fadeIn();
});



$(".header").click(function(){
  $('#about-inner').fadeToggle(500);
  $('.background').css('background', 'linear-gradient(90deg,rgb(255, 141, 78), rgb(199, 71, 0))');
});



$("#slider").click(function() {

  // $('.background').css('background', 'linear-gradient(90deg,rgb(209, 17, 17), rgb(247, 148, 32))');
  // return false;
  // $('.background-change').css('opacity', '1').toggle(10000);
  // $('.background').css('opacity', '0').toggle(10000);
  $("body").animate({ backgroundColor:'blue' },1000);
});

$("#slider-6").click(function() {
  // $(".header").css("opacity", "0");
  // $(".link").css("opacity", "0");
  $(".header").css("opacity", "0");
  $(".link").css("opacity", "0");
});



$(document).ready(function(){

$(".image-right > img").each(function() {
  var minHeight = 400;

  var width = $(this).width();    // Current image width
  var height = $(this).height();  // Current image height

  if(height<minHeight) {
    $(this).css("max-width", "");
  }
});
});

/* Show something only after hovering over it for a certain amount of time
$(function() {
$("#SeeAllEvents").hide();
var timeoutId;
$("#NewsStrip").hover(function() {
if (!timeoutId) {
timeoutId = window.setTimeout(function() {
timeoutId = null;
$("#SeeAllEvents").slideDown('slow');
}, 1000);
}
},
function () {
if (timeoutId) {
window.clearTimeout(timeoutId);
timeoutId = null;
}
else {
$("#SeeAllEvents").slideUp('slow');
}
});
}); */
