<?php
require_once 'connect.php';
$fullname = filter_var(trim($_POST['fullname']),FILTER_SANITIZE_STRING);
$phone = filter_var(trim($_POST['phone']),FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']),FILTER_SANITIZE_STRING);
$specialty = filter_var(trim($_POST['specialty']),FILTER_SANITIZE_STRING);
$class = filter_var(trim($_POST['classnum']),FILTER_SANITIZE_STRING);

echo $fullname;
echo $phone;
echo $email;
echo $specialty;
echo $class;

mysqli_query($connect, "INSERT INTO `applications` (`fullname`, `phone`, `email`, `specialty`, `class`) VALUES('$fullname', '$phone', '$email', '$specialty', '$class')");
?>