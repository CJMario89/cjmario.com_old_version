var sh = 0;

var CJMario = document.getElementById("CJMario");
if (CJMario) {
CJMario.onclick = function(){
	if(sh == 0){
		$("#CJMario").after("<img id =\"consistency\" src=\"pictures/consistency.jpg\" width=\"30%\">");
		sh = 1;
	}else{
		$("#consistency").remove();
		sh = 0;
	}
}
}


var IG = document.getElementById("IG");
if (IG) {
IG.onclick = function(){
	jQuery.ajax({
		url:"web/IG.php",
		type:"POST",
		data:{'clicks':1},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
		},
		success:function(){
			console.log("sucessed");
		}
	});
	window.location = 'https://www.instagram.com/c.j.m.a.r.i.o/';
}
}
var Calisthenics_Menu = document.getElementById("Calisthenics_Menu");
if (Calisthenics_Menu) {
Calisthenics_Menu.onclick = function(){
	window.location = 'Calisthenics_Menu.html';
	jQuery.ajax({
		url:"web/clicks.php",
		type:"POST",
		data:{'clicks':1},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
		},
		success:function(){
			console.log("sucessed");
		}
	});
}
}

var Travel_blog = document.getElementById("Travel_blog");
if (Travel_blog) {
Travel_blog.onclick = function(){
	jQuery.ajax({
		url:"web/Travel_blog.php",
		type:"POST",
		data:{'clicks':1},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			console.log(XMLHttpRequest.status);
			console.log(XMLHttpRequest.readyState);
			console.log(textStatus);
		},
		success:function(){
			console.log("sucessed");
		}
	});
	window.location = "Travel_blog.html";
}
}
var Login = document.getElementById("Login");
if (Login) {
	Login.onclick = function(){
		window.location = "Login.php";
	}
}
var Member = document.getElementById("Member");
if (Member) {
	Member.onclick = function(){
		window.location = "Member.php";
	}
}
var Logout = document.getElementById("Logout");
if (Logout) {
	Logout.onclick = function(){
		window.location = "Logout.php";
	}
}

var Menu_Open = 0;
var Menu = document.getElementById('Menu');
Menu.onclick = function(){
	if (Menu_Open == 0) {
		document.getElementById('Menu_Outer').style.visibility = "visible";
		Menu_Open = 1;
	}else{
		document.getElementById('Menu_Outer').style.visibility = "hidden";
		Menu_Open = 0;
	}
}
