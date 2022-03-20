<?php


echo "<pre>"
    print_r($_POST);
echo "</pre>";
$name= $_POST['name'];
$email= $_POST['email'];
$subject= "New WL member";
$message= $_POST['message'];


$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "fatfacenft@gmail.com";

mail($recipient, $subject, $message, $mailheader)
or die("Error")

echo"messahe send";
?>
