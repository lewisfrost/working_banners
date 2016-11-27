

<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link href="css/style.css" type="text/css" rel="stylesheet" />
</head>
<body>
<div class="main-container">
<div class="left-panel">
<div class="logo"><img src="images/logo.png" width="180" height="61" alt=""></div>
<h1>YOUR INVITATION</h1>
<p>TO JOIN US ON DECEMBER 14TH, FROM 4PM AT,
ONE UNDER LIME, 1 LEADENHALL PLACE, LONDON, EC3 7DX
Thank you for registering your details and look forward to you
joining us for a few complimentary festive drinks.</p>
<form name="contactform" method="post" action="index.php">
 
<ul>
<li><label for="name">Name</label><input id="name" type="text" name="name" /></li>
<li><label for="jobtitle">Job Title</label><input id="jobtitle" type="text" name="jobtitle" /></li>
<li><label for="email">Email</label><input id="email" type="email" name="email" /></li>
<li><label for="mobile">Mobile</label><input id="mobile" type="number" name="mobile" /></li>
<li><label for="company">Company</label><input id="company" type="text" name="company" /></li>
<li><input type="submit" value="Send" name="submit"></li>

</ul>
 
</form>
<p>We look forward to serving you from our new address at
<span>Birchin Court 20 Birchin Lane London EC3V 9DU</span> and
working with you to make 2017 an successful year.</p>

</div>
<div class="right-panel"><img src="images/banner.jpg" width="353" height="517" alt=""></div>
</div>
<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "satyajeetdeo@gmail.com";
 
    $email_subject = "Your email subject line";
 
     
 
     
 
    function died($error) {
 
        // your error code can go here
 
 
 
         echo '<div class="error-container">'.$error.'</div> ';
 
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['name']) ||
 
        !isset($_POST['jobtitle']) ||
 
        !isset($_POST['email']) ||
 
        !isset($_POST['mobile']) ||
 
        !isset($_POST['company'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $name = $_POST['name']; // required
 
    $jobtitle = $_POST['jobtitle']; // required
 
    $email_from = $_POST['email']; // required
 
    $mobile = $_POST['mobile']; // not required
 
    $company = $_POST['company']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
 
    $error_message .= 'The  Name you entered does not appear to be valid.<br />';
 
  }
 
  if(!preg_match($string_exp,$jobtitle)) {
 
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
 
  }
 
  if(strlen($company) < 2) {
 
    $error_message .= 'The Company you entered do not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
 
    $email_message .= "Job Title: ".clean_string($jobtitle)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Mobile: ".clean_string($mobile)."\n";
 
    $email_message .= "Company: ".clean_string($company)."\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->
 
 
 
<div class="error-container success">Thank you for contacting us. We will be in touch with you very soon.</div>
 
 
 
<?php
 
}
 
?>

</body>

</html>
