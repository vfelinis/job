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
		$_SESSION['logged_user'] = $find_user;
		echo json_encode(['user' => ['id' => $find_user['id'], 'login' => $find_user['login'], 'role' => $find_user['role']], 'error' => '']);
	}
	else{
		echo '{ "user": {}, "error": "Неправильный логин или пароль" }';
	}
}