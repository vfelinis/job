<?php
include('dbConfig.php');
session_start();
if($_SERVER['REQUEST_METHOD'] == 'GET') {
	if ($_SESSION['logged_user']['role'] != 2) {
		exit();
	}
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', DbConfig::$user, DbConfig::$pass);
		$stmt = $dbh->prepare("SELECT date(date) as date, count(*) as count_statistics FROM Ticket GROUP BY date(date) ORDER BY date");
		$arr = [];
		$stmt->execute();
		while ($row = $stmt->fetch()) {
		    array_push($arr, ['date' => $row['date'], 'countStatistics' => $row['count_statistics']]);
		}
	    echo json_encode($arr);
	} catch (PDOException $e) {
	    exit();
	}
}