<?php
include('dbConfig.php');
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$data = $_POST;
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', DbConfig::$user, DbConfig::$pass);
		$stmt = $dbh->prepare("SELECT * FROM User where login = :login");
		$stmt->bindValue(':login', $data['login']);
		if ($stmt->execute()) {
			if ($stmt->fetch()) {
				echo '{ "showReg": true, "error": "Такой логин уже занят" }';
				exit();
			}
		}
		$stmt = $dbh->prepare("INSERT INTO User (login, password, role, zone) VALUES (:login, :pass, 1, 0)");
		$stmt->bindValue(':login', $data['login']);
		$hash_pass = password_hash($data['pass'], PASSWORD_DEFAULT);
		$stmt->bindParam(':pass', $hash_pass);
		if ($stmt->execute()) {
			echo '{ "showReg": false, "error": "" }';
		}
		else{
			echo '{ "showReg": true, "error": "Неизвестная ошибка" }';
		}
	} catch (PDOException $e) {
	    exit();
	}
}