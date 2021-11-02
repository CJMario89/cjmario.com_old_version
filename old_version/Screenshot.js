var MENU = Cookies.get('MENU');
$("#CJMario").after(MENU);

var CJMario = document.getElementById("CJMario");
CJMario.onclick = function(){
	window.location = "index.php";
}

var CJMario2 = document.getElementById("CJMario2");
CJMario2.onclick = function(){
	window.location = "index.php?page=Customized";
}