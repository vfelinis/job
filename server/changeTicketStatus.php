<?php
session_start();
if(isset($_GET['ticket_id'], $_GET['status'])){
	$ticket_id = $_GET['ticket_id'];
	$status = $_GET['status'];
	if ($_SESSION['logged_user']['role'] != 2) {
		exit();
	}
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("UPDATE Ticket SET status = :status WHERE id = :ticket_id");
		$stmt->bindValue(':ticket_id', $ticket_id, PDO::PARAM_INT);
		$stmt->bindValue(':status', $status, PDO::PARAM_STR);
		$stmt->execute();
		$res = ['status' => $status];
		echo json_encode($res);
	} catch (PDOException $e) {
	    die();
	}
}