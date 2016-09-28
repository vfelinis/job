<?php
session_start();
if(isset($_GET['user_id'])){
	$user_id = $_GET['user_id'];
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
		$stmt = $dbh->prepare("SELECT * FROM Ticket where user = :user_id Order by 'date' desc LIMIT :lim");
		$stmt->bindValue(':user_id', $user_id);
		$stmt->bindValue(':lim', 5, PDO::PARAM_INT);
		$arr = [];
		if ($stmt->execute()) {
		  while ($row = $stmt->fetch()) {
		    array_push($arr, $row);
		  }
		}
	    $dbh = null;
	    echo json_encode($arr);
	} catch (PDOException $e) {
	    print "Error!: " . $e->getMessage() . "<br/>";
	    die();
	}
}