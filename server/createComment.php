<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	if (!$_SESSION['logged_user']) {
		exit();
	}
	$data = $_POST;
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
	    $stmt = $dbh->prepare("SELECT * FROM Ticket WHERE id = :ticket_id");
		$stmt->bindValue(':ticket_id', $data['ticket_id'], PDO::PARAM_INT);
		$stmt->execute();
		$row = $stmt->fetch();
		if ($_SESSION['logged_user']['id'] != $row['user'] XOR $_SESSION['logged_user']['role'] == 2) {
			exit();
		}
		$stmt = $dbh->prepare("INSERT INTO Comment (text, file, user, ticket) VALUES (:text, :file, :user, :ticket)");
		$stmt->bindValue(':text', $data['text'], PDO::PARAM_STR);
		$stmt->bindValue(':file', $_FILES['file']['name'], PDO::PARAM_STR);
		$stmt->bindValue(':user', $_SESSION['logged_user']['id'], PDO::PARAM_INT);
		$stmt->bindValue(':ticket', $data['ticket_id'], PDO::PARAM_INT);
		$stmt->execute();
		$id = $dbh->lastInsertId();
		if ($_FILES['file']['tmp_name']) {
			$files_tmp = $_FILES['file']['tmp_name'];
			$root = realpath(dirname(__FILE__).'/..');
			$upload_dir = $root . DIRECTORY_SEPARATOR . 'files' . DIRECTORY_SEPARATOR . 'comments' . DIRECTORY_SEPARATOR;
			$name = basename($_FILES['file']['name']);
			$ext = pathinfo($name, PATHINFO_EXTENSION);
			move_uploaded_file($files_tmp, $upload_dir . "$id.$ext");
		}
	} catch (PDOException $e) {
		die();
	}
}