<?php
session_start();
if(isset($_SESSION['logged_user'])){
	$user = ['id' => $_SESSION['logged_user']['id'],
			 'login' => $_SESSION['logged_user']['login'],
			 'zone' => $_SESSION['logged_user']['zone'],
			 'role' => $_SESSION['logged_user']['role']];
	echo json_encode($user);
}
else{
	echo '{}';
}