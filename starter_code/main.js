// $('.readless').hide();

$('.readmore a').click(function() {
  event.preventDefault();
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  console.log('test');
});

$('.readless').click(function(){
  event.preventDefault();
  $('#show-this-on-click').slideUp();
  $('.readmore').show();
})

$('.learnmore').click(function(){
  event.preventDefault();
  $('.hide').slideDown();
  $('.learnmore').hide();

})
