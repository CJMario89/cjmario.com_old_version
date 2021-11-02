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

if($id !== NULL && $password !== NULL){
	$sql = "INSERT INTO Account(username, password) VALUES('$id', '$password')";
	if($conn->query($sql)===TRUE){
		echo '<p>apply success</p>';
		echo "<meta http-equiv = 'refresh' content = '1; url = index.php?page=signin'/>";
	}
}

?>