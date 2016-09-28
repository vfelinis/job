<?php
$entityBody = file_get_contents('php://input');
$user = json_decode($entityBody, true);
$is_user = null;
try {
    $dbh = new PDO('mysql:host=localhost;dbname=tickets', 'root', '');
	$stmt = $dbh->prepare("SELECT * FROM User where login = :login and password = :password");
	$stmt->bindValue(':login', $user['login']);
	$stmt->bindValue(':password', $user['pass']);
	if ($stmt->execute()) {
	  $is_user = $stmt->fetch();
	}
    $dbh = null;
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
if ($is_user) {
	echo json_encode($is_user);
}
else{
	header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
	exit;
}