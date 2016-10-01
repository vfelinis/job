<?php
session_start();
if(isset($_GET['ticket_id'])){
	$ticket_id = $_GET['ticket_id'];
	if (!$_SESSION['logged_user']) {
		exit();
	}
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("SELECT * FROM Ticket where id = :ticket_id");
		$stmt->bindValue(':ticket_id', $ticket_id, PDO::PARAM_INT);
		$stmt->execute();
		$row = $stmt->fetch();
		if ($_SESSION['logged_user']['id'] != $row['user']) {
			exit();
		}
		$files = split(':', $row['file']);
		$ticket = [
			'id' => $row['id'],
			'status' => $row['status'],
			'type' => $row['type'],
			'theme' => $row['theme'],
			'full_text' => $row['full_text'],
			'link' => $row['link'],
			'date' => $row['date'],
			'files' => $files
		];
	    echo json_encode($ticket);
	} catch (PDOException $e) {
	    die();
	}
}