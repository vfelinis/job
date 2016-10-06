<?php
include('dbConfig.php');
try {
    $dbh = new PDO('mysql:host=localhost;dbname=tickets', DbConfig::$user, DbConfig::$pass);
	$stmt = $dbh->prepare("SELECT t.id as id,
							u.role as role,
							TO_DAYS(c.date) - TO_DAYS(t.date) as quantity_days,
							TO_DAYS(c.date) as count_days
							FROM Ticket t
							join Comment c on t.id = c.ticket
							join User u on c.user = u.id
							ORDER BY t.id, c.id");
	$arr = [];
	$stmt->execute();
	while ($row = $stmt->fetch()) {
	    array_push($arr, ['id' => $row['id'], 'role' => $row['role'], 'quantity_days' => $row['quantity_days'], 'count_days' => $row['count_days']]);
	}
	$new_arr = [0];
	for ($i=0; $i < count($arr); $i++) {
		if(!array_search($arr[$i]['id'], $new_arr)) {
			array_push($new_arr, $arr[$i]['id']);
		}
	}
	$public_count = 0;
	$public_sum = 0;
	$public_buffer = 0;
	$first_count = 0;
	$first_sum = 0;
	$first_buffer = 0;
	for ($i=1; $i < count($new_arr); $i++) { 
		for ($j=0; $j < count($arr); $j++) { 
			if ($new_arr[$i] == $arr[$j]['id']) {
				if ($arr[$j]['role'] == 2) {
					if ($first_buffer == 0) {
						$first_buffer++;
						$first_count++;
						$first_sum += $arr[$j]['quantity_days'];
						
					}
					if ($public_buffer == 0){
						$public_buffer = 1;
						$public_count++;
						$public_sum += $arr[$j]['quantity_days'];
					}					
				}
				else{
					$public_buffer = 0;
				}
			}
		}
		$first_buffer = 0;
		$public_buffer = 0;
	}
	echo $public_sum != 0 ? $public_sum / $public_count : 0;
	echo "<br>";
	echo $first_sum != 0 ? $first_sum / $first_count : 0;
} catch (PDOException $e) {
    exit();
}