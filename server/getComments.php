<?php
include('dbConfig.php');
include('timeService.php');
session_start();
if(isset($_GET['ticket_id'])){
	$ticket_id = $_GET['ticket_id'];
	if (!$_SESSION['logged_user']) {
		exit();
	}
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', DbConfig::$user, DbConfig::$pass);
		$stmt = $dbh->prepare("SELECT * FROM Ticket where id = :ticket_id");
		$stmt->bindValue(':ticket_id', $ticket_id, PDO::PARAM_INT);
		$stmt->execute();
		$row = $stmt->fetch();
		if ($_SESSION['logged_user']['id'] != $row['user'] XOR $_SESSION['logged_user']['role'] == 2) {
			exit();
		}
		$stmt = $dbh->prepare("SELECT c.id, c.text, c.file, c.date, u.role FROM Comment c 
								join User u on c.user = u.id where ticket = :ticket_id ORDER BY c.id");
		$stmt->bindValue(':ticket_id', $ticket_id, PDO::PARAM_INT);
		$stmt->execute();
		$arr =[];
		$zone = $_SESSION['logged_user']['zone'];
		while ($row = $stmt->fetch()) {
		    array_push($arr, array('id' => $row['id'],
		    					   'text' => $row['text'],
		    					   'file' => $row['file'],
		    					   'date' => TimeService::dateFull($row['date'], ' в ', $zone),
		    					   'role' => $row['role']));
		}
	    echo json_encode($arr);
	} catch (PDOException $e) {
	    die();
	}
}