var Body_Width = $('body').width();
$('#Bar').width(Body_Width);
$('#Menu_Outer').width(Body_Width);


var CJMario = document.getElementById("CJMario");
if (CJMario) {
	CJMario.onclick = function(){
		window.location = "index.php";
	}
}
var Login = document.getElementById("Login");
if (Login) {
	Login.onclick = function(){
		window.location = "index.php?page=signin";
	}
}
var Member = document.getElementById("Member");
if (Member) {
	Member.onclick = function(){
		window.location = "index.php?page=Member";
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

var Calisthenics_Menu = document.querySelectorAll('.Calisthenics_Menu');
Array.prototype.forEach.call(Calisthenics_Menu, function(element){
	element.addEventListener('click', function(){
		jQuery.ajax({
			url:"clicks.php",
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
	window.location = 'index.php?page=Calisthenics_Menu';
	});
});
	

var Travel_blog = document.querySelectorAll('.Travel_blog');
Array.prototype.forEach.call(Travel_blog, function(element){
	element.addEventListener('click', function(){
		jQuery.ajax({
			url:"Travel_blog_clicks.php",
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
	window.location = 'index.php?page=Travel_blog';
	});
});

var Message = document.querySelectorAll('.Message');
Array.prototype.forEach.call(Message, function(element){
	element.addEventListener('click', function(){
	window.location = 'index.php?page=Message';
	});
});