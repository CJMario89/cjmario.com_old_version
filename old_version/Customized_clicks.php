<?PHP
$MENU = $_POST["MENU"];
date_default_timezone_set('Asia/Taipei');
$date = date("Y-m-d H:i:s");

$servername = "localhost";
$username = "cjmario";
$password = "cjmario";
$dbname = "CJMario";
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if(!empty($_SERVER["HTTP_client_IP"])){
	$ip = $_SERVER["HTTP_client_IP"];
}else if(!(empty($_SERVER["HTTP_X_FORWARDED_FOR"]))){
	$ip = $_SERVER["HTTP_X_FORWARDED_FOR"];
}else{
	$ip = $_SERVER["REMOTE_ADDR"];
}

$sql = "INSERT INTO Customized (Menu, CT, ip)
VALUES ('$MENU', '$date', '$ip')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>