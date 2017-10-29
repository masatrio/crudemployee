<?php
$host = 'localhost';
$dbname = 'company';
$user = 'root';
$pass = '';
$link = mysqli_connect($host, $user, $pass, $dbname) or die (mysqli_error());

if($_POST['type'] == 'insert'){
	$username = mysqli_real_escape_string($link, $_POST['username']);
	$password = mysqli_real_escape_string($link, $_POST['password']);
	$fullname = mysqli_real_escape_string($link, $_POST['fullname']);
	$city = mysqli_real_escape_string($link, $_POST['city']);
	$status = mysqli_real_escape_string($link, $_POST['status']);
	$query = "INSERT INTO user (username, password, fullname, city, status) VALUES ('$username', '$password', '$fullname', '$city', '$status')";
	if(mysqli_query($link, $query)){
		return 1;
	}
	else {
		echo mysqli_error($link);
	}
}


if($_POST['type'] == 'get'){
	$arrdata = array();
	$query2 = "SELECT * FROM user";
	$arr = mysqli_query($link, $query2);
	while ($row = mysqli_fetch_assoc($arr)) {
		array_push($arrdata, $row);
	}
	echo json_encode($arrdata);
}

if($_POST['type'] == 'select'){
	$arrdata = array();
	$query3 = "SELECT * FROM user WHERE id=".$_POST['id'];
	$arr = mysqli_query($link, $query3);
	while ($row = mysqli_fetch_assoc($arr)) {
		array_push($arrdata, $row);
	}
	echo json_encode($arrdata);
}

if($_POST['type'] == 'delete'){
	$query4 = "DELETE FROM user WHERE id=".$_POST['id'];
	mysqli_query($link, $query4);
}

if($_POST['type'] == 'update'){
	$id = $_POST['id'];
	$username = $_POST['username'];
	$password = $_POST['password'];
	$status = $_POST['status'];
	$fullname = $_POST['fullname'];
	$city = $_POST['city'];
	$query5 = "UPDATE user SET username = '$username', password = '$password', status = '$status', fullname = '$fullname', city = '$city' WHERE id = $id";
	if(mysqli_query($link, $query5)){
		echo 'sukses';
	}
}

 ?>
