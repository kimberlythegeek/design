$(document).ready(function(){
  $('.company').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#company').offset().top
    }, 300);
  });
  $('.services').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#services').offset().top
    }, 300);
  });
  $('.contact').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 300);
  });
});