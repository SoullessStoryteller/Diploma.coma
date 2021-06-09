<?php
require_once 'connect.php';
$fullname = filter_var(trim($_POST['fullname']),FILTER_SANITIZE_STRING);
$phone = filter_var(trim($_POST['phone']),FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']),FILTER_SANITIZE_STRING);
$specialty = filter_var(trim($_POST['specialty_choice']),FILTER_SANITIZE_STRING);
$class = filter_var(trim($_POST['class']),FILTER_SANITIZE_STRING);

mysqli_query($connect, "INSERT INTO `applications` (`fullname`, `phone`, `email`, `specialty`, `class`) VALUES('$fullname', '$phone', '$email', '$specialty', '$class')");
header("Index.html")
?>