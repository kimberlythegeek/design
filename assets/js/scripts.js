
// (function($){
//     $(window).load(function(){
//         $("#my-thumbs-list").mThumbnailScroller({
//           axis:"x" //change to "y" for vertical scroller
//         });
//     });
// })(jQuery);

$(document).ready(function(){

  $(window).on('load, resize', function mobileViewUpdate() {
      var viewportWidth = $(window).width();
      if (viewportWidth < 768) {
        $(window).scroll(function(){
          var scrollY = $(this).scrollTop();
          if (scrollY > 200) $('.site-header').addClass('smallnav');
          else $('.site-header').removeClass('smallnav');
        });
      } else $('.site-header').removeClass('smallnav');
  });

  $("button").mouseup(function(){
      $(this).blur();
  })


  $('.company').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#page').offset().top - 300
    }, 'slow');
  });

  $('.services').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#services').offset().top - 300
    }, 'slow');
  });

  $('.portfolio').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#portfolio').offset().top - 300
    }, 'slow');
  });

  $("input, textarea").on("keyup", function(){

    if($(this).val() != '') {
      $('.form-group.' + this.id).addClass('has-success');
      $('span.' + this.id).addClass('glyphicon-ok');

      $('.form-group.' + this.id).removeClass('has-error');
      $('span.' + this.id).removeClass('glyphicon-remove');
    } else {
      $('.form-group.' + this.id).addClass('has-error');
      $('span.' + this.id).addClass('glyphicon-remove');

      $('.form-group.' + this.id).removeClass('has-success');
      $('span.' + this.id).removeClass('glyphicon-ok');
    }

    if ($("textarea").val() != "" && $("#form-name").val() != "" && $("#form-phone").val() != "" && $("#form-email").val() != "") {
      $("#submit-form").removeAttr("disabled");
    }
  });
});
