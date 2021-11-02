$(document).ready(function(){
	$('#ig').click(function(){
		jQuery.ajax({
		url:"IG.php",
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
	});
	$('#fb').click(function(){
		jQuery.ajax({
		url:"FB.php",
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
		window.location = 'https://www.facebook.com/mariochenx/';
	});
});