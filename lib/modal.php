<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $msg = $_POST['msg'];
  $to = 'acodeabovedesign@gmail.com';
  $subject = 'An Inquiry for A Code Above';

  $body = "From: $name\nEmail: $email\nPhone: <a href='tel:+1$phone'>$phone</a>\nMessage: $msg";



?>

<?php

if (isset($_POST['submit'])){

  $recaptcha = '';
  if (isset($_POST['g-recaptcha-response'])) $recaptcha = $_POST['g-recaptcha-response'];

  if (!$recaptcha) {
      echo
      '<div class="form-response alert alert-danger alert-dismissible col-lg-6 col-lg-offset-3 text-center" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>Oops!</strong> The reCAPTCHA was not completed correctly.
      </div>';
  } else {
    $secret = include_once 'verify.php';
    $decode = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$recaptcha."&remoteip=".$_SERVER["REMOTE_ADDR"]);
    $response = json_decode($decode, true);

    if ($response['success'] != false) {

      require_once 'swiftmailer/lib/swift_required.php';
      require_once 'transport.php';

      $mailer = Swift_Mailer::newInstance($transport);

      $message = Swift_Message::newInstance()
        ->setSubject($subject)
        ->setFrom(array($email => $name))
        ->setTo(array($to => 'A Code Above'))
        ->setBody($msg)
        ;

      if(!$mailer->send($message, $failures)){
        echo '<div class="form-response alert alert-warning alert-dismissible col-lg-6 col-lg-offset-3 text-center" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Uh-oh!</strong> Something went wrong. Please try again.
        </div>';
      } else {
        echo
        '<div class="form-response alert alert-success alert-dismissible col-lg-6 col-lg-offset-3 text-center" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Success!</strong> Your message has been sent!
        </div>';
      }
    }
  }
}
?>

<div class="modal fade contact-modal" tabindex="-1" role="dialog" aria-labelledby="contactModal">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content text-center">

      <h3 class="title">Questions? Send us a Message!</h3>

      <form method="post" action="">

        <div class="form-group has-feedback form-name">
          <label for="form-name">Name <span class="req">(required)</span></label>
          <div class="input-group">
            <div class="input-group-addon"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></div>
            <input id="form-name" class="form-control" name="name" placeholder="Name">
            <span class="glyphicon form-control-feedback form-name" aria-hidden="true"></span>
          </div><!-- .input-group -->
        </div><!-- .form-group -->

        <div class="form-group has-feedback form-phone">
          <label for="form-phone">Phone Number <span class="req">(required)</span></label>
          <div class="input-group">
            <div class="input-group-addon"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span></div>
            <input type="tel" id="form-phone" class="form-control" name="phone" placeholder="(123) 456-7890">
            <span class="glyphicon form-control-feedback form-phone" aria-hidden="true"></span>
          </div><!-- .input-group -->
        </div><!-- .form-group -->

        <div class="form-group has-feedback form-email">
          <label for="form-email">Email Address <span class="req">(required)</span></label>
          <input type="email" id="form-email" class="form-control" name="email" placeholder="Email Address">
          <span class="glyphicon form-control-feedback form-email" aria-hidden="true"></span>
        </div>

        <div class="form-group has-feedback form-msg">
          <label for="form-msg">Message <span class="req">(required)</span></label>
          <textarea id="form-msg" class="form-control" name="msg" placeholder="Message"></textarea>
        </div>

        <?php include 'recaptcha.php'; ?>
        <div class="text-center submit-form">
          <button id="submit-form" type="submit" class="btn btn-default btn-primary" name="submit" disabled="disabled">Submit</button>
        </div>
      </form>
    </div><!-- .modal-content -->
  </div><!-- .modal-dialog -->
</div><!-- .contact-modal -->

