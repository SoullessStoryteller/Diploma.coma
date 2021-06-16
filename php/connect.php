<?php
$connect = mysqli_connect('localhost','root','','it_college');
if(!$connect){
    die("Database connection error");
}
$charset = 'utf8';
mysqli_set_charset($connect, $charset);
session_start();
?>