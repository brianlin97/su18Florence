<!-- Javascript for the arrow effects -->
$('.hi-icon').click(function (){
  $(this).addClass('hi-icon-active');
  setTimeout(function() {
    $('.hi-icon').removeClass('hi-icon-active');
  }, 600);
});
