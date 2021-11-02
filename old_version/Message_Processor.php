<?php session_start() ?>
<meta http-equiv="Content-type" content="text/html" charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
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

$Message = $_POST['Message'];
$user = $_SESSION['username'];

if(!isset($_SESSION['username'])){
	echo "Please Login";
	echo "<meta http-equiv = 'refresh' content = '1; url = index.php?page=signin'/>";
	
}else{
	$sql = "INSERT INTO Message(id, content) VALUES('$user', '$Message')";
	if($Message !== NULL){
		$conn->query($sql);
	}
	echo "<meta http-equiv = 'refresh' content = '1; url = index.php?page=Message'/>";
}

?>