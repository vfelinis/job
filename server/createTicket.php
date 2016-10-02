<?php
include('timeService.php');
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	if (!$_SESSION['logged_user']) {
		exit();
	}
	$data = $_POST;
	try {
		$date = TimeService::getCurDate();
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("INSERT INTO Ticket (status, type, theme, full_text, link, date, update_date, user) VALUES (:status, :type, :theme, :full_text, :link, :date, :update_date, :user)");
		$stmt->bindValue(':status', 'Новый', PDO::PARAM_STR);
		$stmt->bindValue(':type', $data['type'], PDO::PARAM_STR);
		$stmt->bindValue(':theme', $data['theme'], PDO::PARAM_STR);
		$stmt->bindValue(':full_text', $data['text'], PDO::PARAM_STR);
		$stmt->bindValue(':link', $data['link'], PDO::PARAM_STR);
		$stmt->bindValue(':date', $date, PDO::PARAM_STR);
		$stmt->bindValue(':update_date', $date, PDO::PARAM_STR);
		$stmt->bindValue(':user', $_SESSION['logged_user']['id'], PDO::PARAM_INT);
		$stmt->execute();
		$id = $dbh->lastInsertId();
		if($_FILES['files']['tmp_name'][0]){
			$files_name = $_FILES['files']['name'];
			$files_tmp = $_FILES['files']['tmp_name'];
			$root = realpath(dirname(__FILE__).'/..');
			$upload_dir = $root . DIRECTORY_SEPARATOR . 'files' . DIRECTORY_SEPARATOR . 'tickets' . DIRECTORY_SEPARATOR . $id . DIRECTORY_SEPARATOR;
			mkdir($upload_dir);
			for ($i = 0; $i < count($files_tmp); $i++) {
				$name = basename($files_name[$i]);
				$ext = pathinfo($name, PATHINFO_EXTENSION);
				$files .= "$name:";
				move_uploaded_file($files_tmp[$i], $upload_dir . "$i.$ext");
			}
			$files = chop($files, ':');
			$stmt = $dbh->prepare("UPDATE Ticket SET file = :files WHERE id = :id");
			$stmt->bindValue(':files', $files, PDO::PARAM_STR);
			$stmt->bindValue(':id', $id, PDO::PARAM_INT);
			$stmt->execute();
		}
		$res = ['showAdd' => false, 'id' => $id];
		echo json_encode($res);
	} catch (PDOException $e) {
		die();
	}
}