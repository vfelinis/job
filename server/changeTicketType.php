<?php
session_start();
if(isset($_GET['ticket_id'], $_GET['type'])){
	$ticket_id = $_GET['ticket_id'];
	$type = $_GET['type'];
	if ($_SESSION['logged_user']['role'] != 2) {
		exit();
	}
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("UPDATE Ticket SET type = :type WHERE id = :ticket_id");
		$stmt->bindValue(':ticket_id', $ticket_id, PDO::PARAM_INT);
		$stmt->bindValue(':type', $type, PDO::PARAM_STR);
		$stmt->execute();
		$res = ['type' => $type];
		echo json_encode($res);
	} catch (PDOException $e) {
	    die();
	}
}