<?php
session_start();
if(isset($_SESSION['logged_user'])){
	echo json_encode(['id' => $_SESSION['logged_user']['id'], 'login' => $_SESSION['logged_user']['login'], 'role' => $_SESSION['logged_user']['role']]);
}
else{
	echo '{}';
}