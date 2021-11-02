<?php 
	session_start();
	if(!isset($_SESSION['username'])){
		$user = "Login";
	}else{
		$user = $_SESSION['username'];
	}
	require 'vendor/autoload.php';

	if(isset($_GET['page']) && !empty($_GET['page'])){
		$page =  $_GET['page'];
	}else{
		$page = "main";
	}
	include('header.php');
	switch ($page) {
		case 'main':
			include('main.php');
			break;
		case 'signin':
			include('signin.php');
			break;
		case 'Member':
			include('Member.php');
			break;
		case 'Register':
			include('Register.php');
			break;
		case 'Message':
			include('Message.php');
			break;
		case 'Calisthenics_Menu':
			include('Calisthenics_Menu.php');
			break;
		case 'Recommended':
			include('Recommended.php');
			break;
		case 'Customized':
			include('Customized.php');
			break;
		case 'Screenshot':
			include('Screenshot.php');
			break;
		case 'Travel_blog':
			include('Travel_blog.php');
			break;
		case 'Kushiro':
			include('Kushiro.php');
			break;
		case 'Yokohama':
			include('Yokohama.php');
			break;
		case 'Kobe':
			include('Kobe.php');
			break;
		
		default:
			include('main.php');
			break;
	}

	include('footer.php');
?>