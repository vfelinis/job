<?php
session_start();
if(isset($_GET['time_zone'])){
	$time_zone = $_GET['time_zone'];
	if (!$_SESSION['logged_user']) {
		exit();
	}
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("UPDATE User SET zone = :zone WHERE id = :user_id");
		$stmt->bindValue(':zone', $time_zone, PDO::PARAM_INT);
		$stmt->bindValue(':user_id', $_SESSION['logged_user']['id'], PDO::PARAM_INT);
		$stmt->execute();
		$_SESSION['logged_user']['zone'] = $time_zone;
		$res = ['zone' => $time_zone];
		echo json_encode($res);
	} catch (PDOException $e) {
	    die();
	}
}