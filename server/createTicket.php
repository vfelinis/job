<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$data = $_POST;
	$files_name = $_FILES['files']['name'];
	$files_tmp = $_FILES['files']['tmp_name'];
	$uploads_dir = '/files/tickets/1';
	//move_uploaded_file($_FILES['files']['tmp_name'][0], "F:/Program Files/OpenServer/domains/localhost/files/tickets/1/".$_FILES['files']['name'][0]);
	// for ($i=0; $i < count($files_tmp); $i++) {
	// 	$name = basename($files_name[i]);
	// 	move_uploaded_file($files_tmp[i], "$uploads_dir/$name");		
	// }
	//echo $_FILES['files']['name'][0].' '.$_FILES['files']['tmp_name'][0];
	echo __dir__;
}