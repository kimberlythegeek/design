$(document).ready(function(){
  $('.company').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#company').position().top
    }, 300);
  });
  $('.services').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#services').position().top
    }, 300);
  });
  $('.contact').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#contact').position().top
    }, 300);
  });
});