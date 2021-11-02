<?php session_start(); ?>
<meta http-equiv="Content-type" content="text/html" charset="utf-8">
<link rel="stylesheet" type="text/css" href="Login.css">
<?php 
	unset($_SESSION['username']);
	echo "<p>ByeBye!</p>";
	echo "<meta http-equiv = 'refresh' content = '1; url = index.php'/>";
?>