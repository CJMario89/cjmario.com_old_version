<!DOCTYPE html>
<html>
<head>
	<title>CJMARIO</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="header.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script data-ad-client="ca-pub-8453177339086238" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>
<body>
	<img id="CJMario" src="pictures/CJMario.png" height="55px">
	<img id="Bar" src="pictures/Bar.png" height="55px"></div>
	<img id="Menu" src="pictures/Menu.png" height="50px" width="40px">
	<div id ="Menu_Outer">
		<?php if($user !== "Login"){
			echo "<div class=\"Menu\" id=\"Member\">$user</div>";
		}else{
			echo "<div class=\"Menu\" id=\"Login\">Login</div>";
		}
		?>
		<div class="Menu Calisthenics_Menu">Calisthenics Menu</div>
		<div class="Menu Travel_blog">Travel Blog</div>
		<div class="Menu Message">Message</div>
		<?php if($user !== "Login"){
			echo "<div class=\"Menu\" id=\"Logout\">Logout</div>";
		} 
		?>
	</div>
	<br><br>
	<br>