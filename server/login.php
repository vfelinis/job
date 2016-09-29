<?php
session_start();
//session_write_close();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$entityBody = file_get_contents('php://input');
	$user = json_decode($entityBody, true);
	$find_user = null;
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("SELECT * FROM User where login = :login");
		$stmt->bindValue(':login', $user['login']);
		if ($stmt->execute()) {
		  $find_user = $stmt->fetch();
		}
	} catch (PDOException $e) {
	    die();
	}
	if ($find_user['password'] == $user['pass']) {
		$_SESSION['logged_user'] = $find_user;
		echo json_encode(['user' => ['id' => $find_user['id'], 'login' => $find_user['login'], 'role' => $find_user['role']], 'error' => '']);
	}
	else{
		echo '{ "user": {}, "error": "Неправильный логин или пароль" }';
	}
}