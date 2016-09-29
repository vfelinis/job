<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$entityBody = file_get_contents('php://input');
	$user = json_decode($entityBody, true);
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("SELECT * FROM User where login = :login");
		$stmt->bindValue(':login', $user['login']);
		if ($stmt->execute()) {
			if ($stmt->fetch()) {
				echo '{ "showReg": true, "error": "Такой логин уже занят" }';
				exit();
			}
		}
		$stmt = $dbh->prepare("INSERT INTO User (login, password, role) VALUES (:login, :pass, 1)");
		$stmt->bindValue(':login', $user['login']);
		$stmt->bindParam(':pass', $user['pass']);
		if ($stmt->execute()) {
			echo '{ "showReg": false, "error": "" }';
		}
		else{
			echo '{ "showReg": true, "error": "Неизвестная ошибка" }';
		}
	} catch (PDOException $e) {
	    die();
	}
}