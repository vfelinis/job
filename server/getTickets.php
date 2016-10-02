<?php
session_start();
if(isset($_GET['user_id'])){
	$user_id = $_GET['user_id'];
	if ($_SESSION['logged_user']['id'] != $user_id) {
		exit();
	}
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("SELECT * FROM Ticket where user = :user_id");
		$stmt->bindValue(':user_id', $user_id, PDO::PARAM_INT);
		if ($_SESSION['logged_user']['role'] == 2) {
			$stmt = $dbh->prepare("SELECT * FROM Ticket");
		}
		$arr = [];
		$stmt->execute();
		while ($row = $stmt->fetch()) {
		    array_push($arr, $row);
		}
	    echo json_encode($arr);
	} catch (PDOException $e) {
	    die();
	}
}