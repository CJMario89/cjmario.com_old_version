<?php 
	session_start();
	$username = $_SESSION['username'];
?>
<link rel="stylesheet" type="text/css" href="Member.css">
<div id="start_point"></div>
<p>Welcome! <?php echo $username; ?></p>
<?php 
	$MENU = $_COOKIE["MENU"];
	if($MENU == "<h2>Calisthenics Training Menu</h2>"){
		echo "<p>Have not yet got a Calisthenics Menu ?</p>";
		echo "<p><a href = \"index.php?page=Calisthenics_Menu\">Go<a></p>";
	}else{
		echo $MENU;
	}
?>
	
<script type="text/javascript" src="Member.js"></script>