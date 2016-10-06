<?php
include('dbConfig.php');
session_start();
if($_SERVER['REQUEST_METHOD'] == 'GET') {
	if ($_SESSION['logged_user']['role'] != 2) {
		exit();
	}
	try {
	    $dbh = new PDO('mysql:host=localhost;dbname=tickets', DbConfig::$user, DbConfig::$pass);
		//получение статистики по количеству тикетов
		$stmt = $dbh->prepare("SELECT date(date) as date, count(*) as count_statistics FROM Ticket GROUP BY date(date) ORDER BY date");
		//массив для статистики по количеству тикетов
		$count_tickets = [];
		$stmt->execute();
		while ($row = $stmt->fetch()) {
		    array_push($count_tickets, ['date' => $row['date'], 'countStatistics' => $row['count_statistics']]);
		}

		//получение статистики по среднему количеству дней общих ответов и первых 
		$stmt = $dbh->prepare("SELECT t.id AS id,
							u.role AS role,
							TO_DAYS(c.date) AS count_days,
							TO_DAYS(c.date) - TO_DAYS(t.date) AS quantity_days
							FROM Comment c
							JOIN Ticket t ON c.ticket = t.id
							JOIN User u ON c.user = u.id
							ORDER BY t.id, c.id");
		//массив для статистики по среднему количеству дней общих ответов и первых
		$avg_days = [];
		$stmt->execute();
		while ($row = $stmt->fetch()) {
		    array_push($avg_days, ['id' => $row['id'], 'role' => $row['role'], 'quantity_days' => $row['quantity_days'], 'count_days' => $row['count_days']]);
		}
		//массив для уникальных id тикетов из $avg_days
		$uniq_ticket_id = [0];
		for ($i=0; $i < count($avg_days); $i++) {
			if(!array_search($avg_days[$i]['id'], $uniq_ticket_id)) {
				array_push($uniq_ticket_id, $avg_days[$i]['id']);
			}
		}
		//счетчик количества общих ответов без учета подряд идущих
		$public_count = 0;
		//сумма дней прошедших до общего ответа без учета подряд идущих
		$public_sum = 0;
		//буфер для контроля подряд идущих ответов тех.поддержки
		$public_buffer = 0;
		//количество дней от нулевого года до даты сообщения пользователя
		$public_user_days = 0;
		//счетчик количества первых ответов
		$first_count = 0;
		//сумма дней прошедших до первого ответа
		$first_sum = 0;
		//буфер для контроля уже посчитанного первого ответа в тиките
		$first_buffer = 0;
		//перебор уникальных id тикетов, которые содержат комментарии
		for ($i=1; $i < count($uniq_ticket_id); $i++) { 
			//перебор всех комментариев (отсортированы по добавлению в базу)
			for ($j=0; $j < count($avg_days); $j++) { 
				//если комментарий соответствует тикету, то ...
				if ($uniq_ticket_id[$i] == $avg_days[$j]['id']) {
					//проверяем, является ли он ответом поддержки, если да, то ...
					if ($avg_days[$j]['role'] == 2) {
						//проверяем, подсчитывалось ли прошедшее количество дней
						//для первого ответа, если нет, то ...
						if ($first_buffer == 0) {
							//ставим метку о подсчете первого ответа для этого тикета
							$first_buffer++;
							//инкремент счетчика количества первых ответов
							$first_count++;
							//добавляем прошедшее количество дней от создания тикета до этого ответа
							$first_sum += $avg_days[$j]['quantity_days'];
							//ставим метку для контроля подряд идущих ответов
							$public_buffer = 1;
							//учитываем первый ответ в общем количестве ответов
							$public_count++;
							//прибавляем прошедшее количество дней для первого ответа к сумме дней общих ответов
							$public_sum += $avg_days[$j]['quantity_days'];
						}
						//для обычных ответов проверяем метку подряд идущих ответов,
						//если это ответ идущих сразу после сообщения пользователя, то ...
						if ($public_buffer == 0){
							//ставим метку для контроля подряд идущих ответов
							$public_buffer = 1;
							//инкремент счетчика количества общих ответов
							$public_count++;
							//добавляем прошедшее количество дней от
							//предыдущего сообщения пользователя до этого ответа
							$public_sum += $avg_days[$j]['count_days'] - $public_user_days;
						}					
					}
					//если этот комментарий является сообщением пользователя, то ...
					else{
						//записываем количество дней от нулевого года до даты сообщения
						$public_user_days = $avg_days[$j]['count_days'];
						//сбрасываем месту контроля подряд идущих ответов тех.поддержки
						$public_buffer = 0;
					}
				}
			}
			//обнуляем метки для следующего тикета
			$first_buffer = 0;
			$public_buffer = 0;
		}
		//находим среднии значения
		$avg_days_public = $public_sum != 0 ? $public_sum / $public_count : 0;
		$avg_days_first = $first_sum != 0 ? $first_sum / $first_count : 0;

	    echo json_encode(['statistics' => ['countTickets' => $count_tickets, 'avgDaysPublic' => $avg_days_public, 'avgDaysFirst' => $avg_days_first]]);
	} catch (PDOException $e) {
	    exit();
	}
}