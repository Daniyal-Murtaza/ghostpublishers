<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = "support@ghostpublishers.com";
  $subject = "About Us Form (www.ghostpublishers.com)";
  
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  
  $message = "Name: " . $name . "\n";
  $message .= "Email: " . $email . "\n";
  $message .= "Phone: " . $phone . "\n";
  
  $headers = "From: " . $email;
  
  if (mail($to, $subject, $message, $headers)) {
    echo "Message sent successfully.";
  } else {
    echo "Failed to send message.";
  }
}
?>
