<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$data = $_POST;
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("SELECT * FROM User where login = :login");
		$stmt->bindValue(':login', $data['login']);
		if ($stmt->execute()) {
		  $find_user = $stmt->fetch();
		}
	} catch (PDOException $e) {
	    die();
	}
	if (password_verify($data['pass'], $find_user['password'])) {
		$user = ['id' => $find_user['id'], 'login' => $find_user['login'], 'zone' => $find_user['zone'], 'role' => $find_user['role']];
		$_SESSION['logged_user'] = $user;
		echo json_encode(['user' => $user, 'error' => '']);
	}
	else{
		echo '{ "user": {}, "error": "Неправильный логин или пароль" }';
	}
}