<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$email_body = "Name: ".$_POST['name']." <br />Email: ".$_POST['email']."<br />Company: ".$_POST['company']."<br /> Message: ".$_POST['message'];

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.sendgrid.net';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'apikey';                 // SMTP username
    $mail->Password = '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';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('web-hello@darwintechnologiesllc.com', 'Website');
    $mail->addAddress('hello@darwintechnologiesllc.com', 'Hello');     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contact Request Web';
    $mail->Body    = $email_body;
    $mail->AltBody = $email_body;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
