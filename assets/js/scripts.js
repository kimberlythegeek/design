$(document).ready(function(){

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