<?php session_start(); ?>
<meta http-equiv="Content-type" content="text/html" charset="utf-8">
<link rel="stylesheet" type="text/css" href="Login.css">
<?php
$servername = "localhost";
$username = "cjmario";
$password = "cjmario";
$dbname = "CJMario";
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$id = $_POST['id'];
$password = $_POST['password'];

$sql = "SELECT username, password FROM Account WHERE username='$id'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

if($id !== NULL && $password !== NULL && $id == $row["username"] && $password == $row["password"]){
	$_SESSION['username'] = $id;
	echo "<p>login sucess</p>";
	echo "<meta http-equiv = 'refresh' content = '1; url = index.php'/>";
}else{
	echo "<p>login fail</p>";
	echo "<meta http-equiv = 'refresh' content = '1; url = index.php?page=signin'/>";
}


?>