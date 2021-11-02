<?php 
	session_start();
	if(!isset($_SESSION['username'])){
		$user = "Login";
	}else{
		$user = $_SESSION['username'];
	}
?>

    <link rel="stylesheet" type="text/css" href="Message.css">
	<h5>Message</h5><br>
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

		$sql = "SELECT * FROM Message";
		$result = $conn->query($sql);

		while ($row = $result->fetch_row()) {
			echo "<p class = \"user\">$row[0]</p>";
			echo "<p class = \"content\">$row[1]</p>";
		};
		
	?>
	<br>
	<h5>Leave a message</h5>
	<form name="form" method="post" action="Message_Processor.php">
		<input type="Message" name="Message">
		<input type="submit" name="button" value="post">
	</form>
	<script type="text/javascript" src="ScriptLoader.js"></script>