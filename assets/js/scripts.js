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



  // if($(window).width() < 768){
  //   $(window).scroll(function(){
  //     var scrollY = $(this).scrollTop();
  //     if (scrollY > 200) $('.site-header').addClass('smallnav');
  //     else $('.site-header').removeClass('smallnav');
  //   });
  // }
  //
  //
  //
  // var deviceWidth = $(window).width();
  //
  // deviceWidth.addListener(function(changed) {
  //   if($(window).width() < 768){
  //     $(window).scroll(function(){
  //       var scrollY = $(this).scrollTop();
  //       if (scrollY > 200) $('.site-header').addClass('smallnav');
  //       else $('.site-header').removeClass('smallnav');
  //     });
  //   } else {
  //       $('.site-header').removeClass('smallnav');
  //   }
  // });


  $("button").mouseup(function(){
      $(this).blur();
  })


  $('.company').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#page').position().top
    }, 300);
  });

  $('.services').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#services').position().top
    }, 300);
  });

  $("input, textarea").on("keyup", function(){

    if($(this).val() != '') {
      $('.' + this.id).addClass('has-success');
      $('.' + this.id).addClass('glyphicon-ok');

      $('.' + this.id).removeClass('has-error');
      $('.' + this.id).removeClass('glyphicon-remove');
    } else {
      $('.' + this.id).addClass('has-error');
      $('.' + this.id).addClass('glyphicon-remove');

      $('.' + this.id).removeClass('has-success');
      $('.' + this.id).removeClass('glyphicon-ok');
    }

    if ($("textarea").val() != "" && $("#form-name").val() != "" && $("#form-phone").val() != "" && $("#form-email").val() != "") {
      $("#submit-form").removeAttr("disabled");
    }
  });
});