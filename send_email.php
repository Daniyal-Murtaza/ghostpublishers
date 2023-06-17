
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set up email content
  $to = 'support@ghostpublishers.com';
  $subject = 'New Form Submission';
  $body = "Name: $name\nEmail: $email\n\n$message";

  // Send email
  if (mail($to, $subject, $body)) {
    // JavaScript code to display a window alert
    echo '<script type="text/javascript">
            window.alert("Email sent successfully!");
            window.location.href = "index.html"; // Redirect to another page if needed
          </script>';
  } else {
    echo '<script type="text/javascript">
            window.alert("Failed to send email.");
            window.history.back(); // Go back to the previous page
          </script>';
  }
}
?>

