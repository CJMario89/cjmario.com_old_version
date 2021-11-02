/*
			beginner					intermediate			advanced
leg			squat with chair			squat jump				pistol squat 
leg 		static lunge				lunge					sissy squat
abs			plank						leg raise				dragon flag
abs			abs crunch					abs crunch				V-sit
chest		kneeling push ups			push ups				pseudo planche push up
chest		incline push ups			box dips				dips
back		prone cobras				pull up					muscle up
back 		tower row					australian pull up 		tuck front lever row
shoulder	elbow push up				pike push up			handstand push up
shoulder	kneeling hindu push up		hindu push up			planche push up
hip			hip raise					wide squat				wide squat 
hip			hip hinge					single leg hip raise	single leg hip raise
tricep		kneeling tricep extension	tiger bend push up 		russian dip
functional	bird dog 		russian twist			hanging leg twist
weight loss	jump			burpee					burpee
hypertrophy reps+2 			if level != 1 set + 1 

*/
 function scriptLoader(path, callback)
        {
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.async = true;
            script.src = path;
            script.onload = function(){
                if(typeof(callback) == "function")
                {
                    callback();
                }
            }
            try
            {
                var scriptOne = document.getElementsByTagName('script')[0];
                scriptOne.parentNode.insertBefore(script, scriptOne);
            }
            catch(e)
            {
                document.getElementsByTagName("head")[0].appendChild(script);
            }
        }

scriptLoader('header.js');
scriptLoader('footer.js');

//

var reps = 0;
var sets = 0;
var M = document.getElementById("M");
var MENU = undefined;
if(Cookies.get("MENU") == undefined){
	Cookies.set("MENU", "<h2>Calisthenics Training Menu</h2>");
	MENU = Cookies.get("MENU");
}else{
	MENU = Cookies.get("MENU");
}
var inner_Menu = document.getElementById("MENU");
inner_Menu.innerHTML = MENU;
var Screenshot = document.getElementById("Screenshot");
Screenshot.onclick = function(){
	window.location = "Screenshot.php";
	//ajax
	jQuery.ajax({
		url:"Customized_clicks.php",
		type:"POST",
		data:{MENU:MENU},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			console.log("I know you click Screenshot");
		},
		success:function(){
			console.log("sucessed");
		}
	});
}
var Clear = document.getElementById("Clear");
Clear.onclick = function(){
	Cookies.set("MENU", "<h2>Calisthenics Training Menu</h2>");
	MENU = Cookies.get("MENU");
	inner_Menu.innerHTML = MENU;
}

M.onclick = function(){
	window.location	= "#end_point";
}


var Legs = document.getElementById('Legs');
Legs.onclick = function(){
	window.location = "#Legs_title";
}
var Chests = document.getElementById('Chests');
Chests.onclick = function(){
	window.location = "#Chests_title";
}
var Back = document.getElementById('Back');
Back.onclick = function(){
	window.location = "#Back_title";
}
var Shoulders= document.getElementById('Shoulders');
Shoulders.onclick = function(){
	window.location = "#Shoulders_title";
}
var Hips = document.getElementById('Hips');
Hips.onclick = function(){
	window.location = "#Hips_title";
}
var Abs = document.getElementById('Abs');
Abs.onclick = function(){
	window.location = "#Abs_title";
}
var Arms = document.getElementById('Arms');
Arms.onclick = function(){
	window.location = "#Arms_title";
}
var Others = document.getElementById('Others');
Others.onclick = function(){
	window.location = "#Others_title";
}




var Squat_add = document.getElementById("Squat_add");
Squat_add.onclick = function(){
	reps = document.getElementById("Squat_sets").value;
	sets = document.getElementById("Squat_reps").value;
	MENU = MENU + "<h3 id=\"Squat\" >Squat " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Squat") != null){
	var Squat = document.getElementById("Squat");
	Squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}

var Squat_with_chair_add = document.getElementById("Squat_with_chair_add");
Squat_with_chair_add.onclick = function(){
	reps = document.getElementById("Squat_with_chair_sets").value;
	sets = document.getElementById("Squat_with_chair_reps").value;
	MENU = MENU + "<h3 id=\"Squat_with_chair\" >Squat with chair " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Squat_with_chair") != null){
	var Squat_with_chair = document.getElementById("Squat_with_chair");
	Squat_with_chair.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Squat_with_chair.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Static_lunge_add = document.getElementById("Static_lunge_add");
Static_lunge_add.onclick = function(){
	sets = document.getElementById("Static_lunge_sets").value;
	reps = document.getElementById("Static_lunge_reps").value;
	MENU = MENU + "<h3 id=\"Static_lunge\" >Static lunge " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Static_lunge") != null){
	var Static_lunge = document.getElementById("Static_lunge");
	Static_lunge.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Static_lunge.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Lunge_add = document.getElementById("Lunge_add");
Lunge_add.onclick = function(){
	sets = document.getElementById("Lunge_sets").value;
	reps = document.getElementById("Lunge_reps").value;
	MENU = MENU + "<h3 id=\"Lunge\" >Lunge " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Lunge") != null){
	var Lunge = document.getElementById("Lunge");
	Lunge.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Lunge.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Squat_jump_add = document.getElementById("Squat_jump_add");
Squat_jump_add.onclick = function(){
	sets = document.getElementById("Squat_jump_sets").value;
	reps = document.getElementById("Squat_jump_reps").value;
	MENU = MENU + "<h3 id=\"Squat_jump\" >Squat jump " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Squat_jump") != null){
	var Squat_jump = document.getElementById("Squat_jump");
	Squat_jump.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Squat_jump.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Pistol_squat_add = document.getElementById("Pistol_squat_add");
Pistol_squat_add.onclick = function(){
	sets = document.getElementById("Pistol_squat_sets").value;
	reps = document.getElementById("Pistol_squat_reps").value;
	MENU = MENU + "<h3 id=\"Pistol_squat\" >Pistol squat " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Pistol_squat") != null){
	var Pistol_squat = document.getElementById("Pistol_squat");
	Pistol_squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pistol_squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Sissy_squat_add = document.getElementById("Sissy_squat_add");
Sissy_squat_add.onclick = function(){
	sets = document.getElementById("Sissy_squat_sets").value;
	reps = document.getElementById("Sissy_squat_reps").value;
	MENU = MENU + "<h3 id=\"Sissy_squat\" >Sissy squat " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Sissy_squat") != null){
	var Sissy_squat = document.getElementById("Sissy_squat");
	Sissy_squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Sissy_squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Kneeling_push_up_add = document.getElementById("Kneeling_push_up_add");
Kneeling_push_up_add.onclick = function(){
	sets = document.getElementById("Kneeling_push_up_sets").value;
	reps = document.getElementById("Kneeling_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Kneeling_push_up\" >Kneeling push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Kneeling_push_up") != null){
	var Kneeling_push_up = document.getElementById("Kneeling_push_up");
	Kneeling_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Kneeling_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Push_up_add = document.getElementById("Push_up_add");
Push_up_add.onclick = function(){
	sets = document.getElementById("Push_up_sets").value;
	reps = document.getElementById("Push_up_reps").value;
	MENU = MENU + "<h3 id=\"Push_up\" >Push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Push_up") != null){
	var Push_up = document.getElementById("Push_up");
	Push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Inclined_push_up_add = document.getElementById("Inclined_push_up_add");
Inclined_push_up_add.onclick = function(){
	sets = document.getElementById("Inclined_push_up_sets").value;
	reps = document.getElementById("Inclined_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Inclined_push_up\" >Inclined push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Inclined_push_up") != null){
	var Inclined_push_up = document.getElementById("Inclined_push_up");
	Inclined_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Inclined_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Box_dip_add = document.getElementById("Box_dip_add");
Box_dip_add.onclick = function(){
	sets = document.getElementById("Box_dip_sets").value;
	reps = document.getElementById("Box_dip_reps").value;
	MENU = MENU + "<h3 id=\"Box_dip\" >Box dip " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Box_dip") != null){
	var Box_dip = document.getElementById("Box_dip");
	Box_dip.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Box_dip.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Dip_add = document.getElementById("Dip_add");
Dip_add.onclick = function(){
	sets = document.getElementById("Dip_sets").value;
	reps = document.getElementById("Dip_reps").value;
	MENU = MENU + "<h3 id=\"Dip\" >Dip " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Dip") != null){
	var Dip = document.getElementById("Dip");
	Dip.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Dip.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Pseudo_planche_push_up_add = document.getElementById("Pseudo_planche_push_up_add");
Pseudo_planche_push_up_add.onclick = function(){
	sets = document.getElementById("Pseudo_planche_push_up_sets").value;
	reps = document.getElementById("Pseudo_planche_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Pseudo_planche_push_up\" >Pseudo planche push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Pseudo_planche_push_up") != null){
	var Pseudo_planche_push_up = document.getElementById("Pseudo_planche_push_up");
	Pseudo_planche_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pseudo_planche_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Prone_cobras_add = document.getElementById("Prone_cobras_add");
Prone_cobras_add.onclick = function(){
	sets = document.getElementById("Prone_cobras_sets").value;
	reps = document.getElementById("Prone_cobras_reps").value;
	MENU = MENU + "<h3 id=\"Prone_cobras\" >Prone cobras " + reps + " sec " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Prone_cobras") != null){
	var Prone_cobras = document.getElementById("Prone_cobras");
	Prone_cobras.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Prone_cobras.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Towel_row_add = document.getElementById("Towel_row_add");
Towel_row_add.onclick = function(){
	sets = document.getElementById("Towel_row_sets").value;
	reps = document.getElementById("Towel_row_reps").value;
	MENU = MENU + "<h3 id=\"Towel_row\" >Towel row " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Towel_row") != null){
	var Towel_row = document.getElementById("Towel_row");
	Towel_row.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Towel_row.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Pull_up_add = document.getElementById("Pull_up_add");
Pull_up_add.onclick = function(){
	sets = document.getElementById("Pull_up_sets").value;
	reps = document.getElementById("Pull_up_reps").value;
	MENU = MENU + "<h3 id=\"Pull_up\" >Pull up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Pull_up") != null){
	var Pull_up = document.getElementById("Pull_up");
	Pull_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pull_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Australian_pull_up_add = document.getElementById("Australian_pull_up_add");
Australian_pull_up_add.onclick = function(){
	sets = document.getElementById("Australian_pull_up_sets").value;
	reps = document.getElementById("Australian_pull_up_reps").value;
	MENU = MENU + "<h3 id=\"Australian_pull_up\" >Australian pull up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Australian_pull_up") != null){
	var Australian_pull_up = document.getElementById("Australian_pull_up");
	Australian_pull_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Australian_pull_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Tuck_front_lever_row_add = document.getElementById("Tuck_front_lever_row_add");
Tuck_front_lever_row_add.onclick = function(){
	sets = document.getElementById("Tuck_front_lever_row_sets").value;
	reps = document.getElementById("Tuck_front_lever_row_reps").value;
	MENU = MENU + "<h3 id=\"Tuck_front_lever_row\" >Tuck front lever row " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Tuck_front_lever_row") != null){
	var Tuck_front_lever_row = document.getElementById("Tuck_front_lever_row");
	Tuck_front_lever_row.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Tuck_front_lever_row.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Muscle_up_add = document.getElementById("Muscle_up_add");
Muscle_up_add.onclick = function(){
	sets = document.getElementById("Muscle_up_sets").value;
	reps = document.getElementById("Muscle_up_reps").value;
	MENU = MENU + "<h3 id=\"Muscle_up\" >Muscle up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Muscle_up") != null){
	var Muscle_up = document.getElementById("Muscle_up");
	Muscle_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Muscle_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Elbow_push_up_add = document.getElementById("Elbow_push_up_add");
Elbow_push_up_add.onclick = function(){
	sets = document.getElementById("Elbow_push_up_sets").value;
	reps = document.getElementById("Elbow_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Elbow_push_up\" >Elbow push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Elbow_push_up") != null){
	var Elbow_push_up = document.getElementById("Elbow_push_up");
	Elbow_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Elbow_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Kneeling_hindu_push_up_add = document.getElementById("Kneeling_hindu_push_up_add");
Kneeling_hindu_push_up_add.onclick = function(){
	sets = document.getElementById("Kneeling_hindu_push_up_sets").value;
	reps = document.getElementById("Kneeling_hindu_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Kneeling_hindu_push_up\" >Kneeling hindu push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Kneeling_hindu_push_up") != null){
	var Kneeling_hindu_push_up = document.getElementById("Kneeling_hindu_push_up");
	Kneeling_hindu_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Kneeling_hindu_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Pike_push_up_add = document.getElementById("Pike_push_up_add");
Pike_push_up_add.onclick = function(){
	sets = document.getElementById("Pike_push_up_sets").value;
	reps = document.getElementById("Pike_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Pike_push_up\" >Pike push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Pike_push_up") != null){
	var Pike_push_up = document.getElementById("Pike_push_up");
	Pike_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pike_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Hindu_push_up_add = document.getElementById("Hindu_push_up_add");
Hindu_push_up_add.onclick = function(){
	sets = document.getElementById("Hindu_push_up_sets").value;
	reps = document.getElementById("Hindu_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Hindu_push_up\" >Hindu push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Hindu_push_up") != null){
	var Hindu_push_up = document.getElementById("Hindu_push_up");
	Hindu_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hindu_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Handstand_push_up_add = document.getElementById("Handstand_push_up_add");
Handstand_push_up_add.onclick = function(){
	sets = document.getElementById("Handstand_push_up_sets").value;
	reps = document.getElementById("Handstand_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Handstand_push_up\" >Handstand push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Handstand_push_up") != null){
	var Handstand_push_up = document.getElementById("Handstand_push_up");
	Handstand_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Handstand_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Planche_push_up_add = document.getElementById("Planche_push_up_add");
Planche_push_up_add.onclick = function(){
	sets = document.getElementById("Planche_push_up_sets").value;
	reps = document.getElementById("Planche_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Planche_push_up\" >Planche push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Planche_push_up") != null){
	var Planche_push_up = document.getElementById("Planche_push_up");
	Planche_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Planche_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Hip_raise_add = document.getElementById("Hip_raise_add");
Hip_raise_add.onclick = function(){
	sets = document.getElementById("Hip_raise_sets").value;
	reps = document.getElementById("Hip_raise_reps").value;
	MENU = MENU + "<h3 id=\"Hip_raise\" >Hip raise " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Hip_raise") != null){
	var Hip_raise = document.getElementById("Hip_raise");
	Hip_raise.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hip_raise.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Hip_hinge_add = document.getElementById("Hip_hinge_add");
Hip_hinge_add.onclick = function(){
	sets = document.getElementById("Hip_hinge_sets").value;
	reps = document.getElementById("Hip_hinge_reps").value;
	MENU = MENU + "<h3 id=\"Hip_hinge\" >Hip hinge " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Hip_hinge") != null){
	var Hip_hinge = document.getElementById("Hip_hinge");
	Hip_hinge.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hip_hinge.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Wide_squat_add = document.getElementById("Wide_squat_add");
Wide_squat_add.onclick = function(){
	sets = document.getElementById("Wide_squat_sets").value;
	reps = document.getElementById("Wide_squat_reps").value;
	MENU = MENU + "<h3 id=\"Wide_squat\" >Wide squat " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Wide_squat") != null){
	var Wide_squat = document.getElementById("Wide_squat");
	Wide_squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Wide_squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Wide_squat_jump_add = document.getElementById("Wide_squat_jump_add");
Wide_squat_jump_add.onclick = function(){
	sets = document.getElementById("Wide_squat_jump_sets").value;
	reps = document.getElementById("Wide_squat_jump_reps").value;
	MENU = MENU + "<h3 id=\"Wide_squat\" >Wide squat jump " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Wide_squat_jump") != null){
	var Wide_squat_jump = document.getElementById("Wide_squat_jump");
	Wide_squat_jump.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Wide_squat_jump.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Single_leg_hip_raise_add = document.getElementById("Single_leg_hip_raise_add");
Single_leg_hip_raise_add.onclick = function(){
	sets = document.getElementById("Single_leg_hip_raise_sets").value;
	reps = document.getElementById("Single_leg_hip_raise_reps").value;
	MENU = MENU + "<h3 id=\"Single_leg_hip_raise\" >Single leg hip raise " + reps + " reps " + sets + " set(s)(each side)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Single_leg_hip_raise") != null){
	var Single_leg_hip_raise = document.getElementById("Single_leg_hip_raise");
	Single_leg_hip_raise.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Single_leg_hip_raise.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Plank_add = document.getElementById("Plank_add");
Plank_add.onclick = function(){
	sets = document.getElementById("Plank_sets").value;
	reps = document.getElementById("Plank_reps").value;
	MENU = MENU + "<h3 id=\"Plank\" >Plank " + reps + " sec " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Plank") != null){
	var Plank = document.getElementById("Plank");
	Plank.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Plank.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Abs_crunch_add = document.getElementById("Abs_crunch_add");
Abs_crunch_add.onclick = function(){
	sets = document.getElementById("Abs_crunch_sets").value;
	reps = document.getElementById("Abs_crunch_reps").value;
	MENU = MENU + "<h3 id=\"Abs_crunch\" >Abs crunch " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Abs_crunch") != null){
	var Abs_crunch = document.getElementById("Abs_crunch");
	Abs_crunch.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Abs_crunch.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Legs_raise_add = document.getElementById("Legs_raise_add");
Legs_raise_add.onclick = function(){
	sets = document.getElementById("Legs_raise_sets").value;
	reps = document.getElementById("Legs_raise_reps").value;
	MENU = MENU + "<h3 id=\"Legs_raise\" >Legs raise " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Legs_raise") != null){
	var Legs_raise = document.getElementById("Legs_raise");
	Legs_raise.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Legs_raise.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Dragon_flag_add = document.getElementById("Dragon_flag_add");
Dragon_flag_add.onclick = function(){
	sets = document.getElementById("Dragon_flag_sets").value;
	reps = document.getElementById("Dragon_flag_reps").value;
	MENU = MENU + "<h3 id=\"Dragon_flag\" >Dragon flag " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Dragon_flag") != null){
	var Dragon_flag = document.getElementById("Dragon_flag");
	Dragon_flag.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Dragon_flag.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var V_sit_add = document.getElementById("V-sit_add");
V_sit_add.onclick = function(){
	sets = document.getElementById("V-sit_sets").value;
	reps = document.getElementById("V-sit_reps").value;
	MENU = MENU + "<h3 id=\"V-sit\" >V-sit " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("V-sit") != null){
	var V_sit = document.getElementById("V-sit");
	V_sit.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/V-sit.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Russian_twist_add = document.getElementById("Russian_twist_add");
Russian_twist_add.onclick = function(){
	sets = document.getElementById("Russian_twist_sets").value;
	reps = document.getElementById("Russian_twist_reps").value;
	MENU = MENU + "<h3 id=\"Russian_twist\" >Russian twist " + reps + " reps " + sets + " set(s)(each side)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Russian_twist") != null){
	var Russian_twist = document.getElementById("Russian_twist");
	Russian_twist.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Russian_twist.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Hanging_leg_twist_add = document.getElementById("Hanging_leg_twist_add");
Hanging_leg_twist_add.onclick = function(){
	reps = document.getElementById("Hanging_leg_twist_sets").value;
	sets = document.getElementById("Hanging_leg_twist_reps").value;
	MENU = MENU + "<h3 id=\"Hanging_leg_twist\" >Hanging leg twist " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Hanging_leg_twist") != null){
	var Hanging_leg_twist = document.getElementById("Hanging_leg_twist");
	Hanging_leg_twist.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hanging_leg_twist.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Kneeling_triceps_extension_add = document.getElementById("Kneeling_triceps_extension_add");
Kneeling_triceps_extension_add.onclick = function(){
	sets = document.getElementById("Kneeling_triceps_extension_sets").value;
	reps = document.getElementById("Kneeling_triceps_extension_reps").value;
	MENU = MENU + "<h3 id=\"Kneeling_triceps_extension\" >Kneeling triceps extension " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Kneeling_triceps_extension") != null){
	var Kneeling_triceps_extension = document.getElementById("Kneeling_triceps_extension");
	Kneeling_triceps_extension.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Kneeling_triceps_extension.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Tiger_bend_push_up_add = document.getElementById("Tiger_bend_push_up_add");
Tiger_bend_push_up_add.onclick = function(){
	sets = document.getElementById("Tiger_bend_push_up_sets").value;
	reps = document.getElementById("Tiger_bend_push_up_reps").value;
	MENU = MENU + "<h3 id=\"Tiger_bend_push_up\" >Tiger bend push up " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Tiger_bend_push_up") != null){
	var Tiger_bend_push_up = document.getElementById("Tiger_bend_push_up");
	Tiger_bend_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Tiger_bend_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Russian_dip_add = document.getElementById("Russian_dip_add");
Russian_dip_add.onclick = function(){
	sets = document.getElementById("Russian_dip_sets").value;
	reps = document.getElementById("Russian_dip_reps").value;
	MENU = MENU + "<h3 id=\"Russian_dip\" >Russian dip " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Russian_dip") != null){
	var Russian_dip = document.getElementById("Russian_dip");
	Russian_dip.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Russian_dip.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Bird_dog_add = document.getElementById("Bird_dog_add");
Bird_dog_add.onclick = function(){
	sets = document.getElementById("Bird_dog_sets").value;
	reps = document.getElementById("Bird_dog_reps").value;
	MENU = MENU + "<h3 id=\"Bird_dog\" >Bird dog " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Bird_dog") != null){
	var Bird_dog = document.getElementById("Bird_dog");
	Bird_dog.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Bird_dog.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Jump_add = document.getElementById("Jump_add");
Jump_add.onclick = function(){
	sets = document.getElementById("Jump_sets").value;
	reps = document.getElementById("Jump_reps").value;
	MENU = MENU + "<h3 id=\"Jump\" >Jump " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Jump") != null){
	var Jump = document.getElementById("Jump");
	Jump.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Jump.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Burpee_add = document.getElementById("Burpee_add");
Burpee_add.onclick = function(){
	sets = document.getElementById("Burpee_sets").value;
	reps = document.getElementById("Burpee_reps").value;
	MENU = MENU + "<h3 id=\"Burpee\" >Burpee " + reps + " reps " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Burpee") != null){
	var Burpee = document.getElementById("Burpee");
	Burpee.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Burpee.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}
var Walk_add = document.getElementById("Walk_add");
Walk_add.onclick = function(){
	sets = document.getElementById("Walk_sets").value;
	reps = document.getElementById("Walk_reps").value;
	MENU = MENU + "<h3 id=\"Walk\" >Walk " + reps + " mins " + sets + " set(s)</h3>";
	inner_Menu.innerHTML = MENU;
	Cookies.set("MENU", MENU);
	$("#Menu").after("<p id=\"check\">&#10003;</p>");
	window.setTimeout(function(){$("#check").remove();},1000);
	if(document.getElementById("Walk") != null){
	var Walk = document.getElementById("Walk");
	Walk.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Walk.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
}



////////////////////////////////////
//Demo below
//
////////////////////////////////////
if(document.getElementById("Squat") != null){
	var Squat = document.getElementById("Squat");
	Squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}

var dSquat = document.getElementById("dSquat");
	dSquat.onclick = function(){
	$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Squat.gif\" width=\"70%\" height=\"70%\"></img></div>");
	$("#Demo_photo").after("<p id=\"X\">X</p>");
	var Demo = document.getElementById("Demo");
		Demo.onclick = function(){
		$(this).remove();
	}
}
if(document.getElementById("dSquat_with_chair") != null){
	var dSquat_with_chair = document.getElementById("dSquat_with_chair");
	dSquat_with_chair.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Squat_with_chair.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dSquat_jump") != null){
	var dSquat_jump = document.getElementById("dSquat_jump");
	dSquat_jump.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Squat_jump.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dStatic_lunge") != null){
	var dStatic_lunge = document.getElementById("dStatic_lunge");
	dStatic_lunge.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Static_lunge.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dLunge") != null){
	var dLunge = document.getElementById("dLunge");
	dLunge.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Lunge.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dPistol_squat") != null){
	var dPistol_squat = document.getElementById("dPistol_squat");
	dPistol_squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pistol_squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dSissy_squat") != null){
	var dSissy_squat = document.getElementById("dSissy_squat");
	dSissy_squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Sissy_squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dPlank") != null){
	var dPlank = document.getElementById("dPlank");
	dPlank.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Plank.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dAbs_crunch") != null){
	var dAbs_crunch = document.getElementById("dAbs_crunch");
	dAbs_crunch.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Abs_crunch.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dLegs_raise") != null){
	var dLegs_raise = document.getElementById("dLegs_raise");
	dLegs_raise.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Legs_raise.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dDragon_flag") != null){
	var dDragon_flag = document.getElementById("dDragon_flag");
	dDragon_flag.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Dragon_flag.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dV-sit") != null){
	var dV_sit = document.getElementById("dV-sit");
	dV_sit.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/V-sit.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dKneeling_push_up") != null){
	var dKneeling_push_up = document.getElementById("dKneeling_push_up");
	dKneeling_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Kneeling_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dPush_up") != null){
	var dPush_up = document.getElementById("dPush_up");
	dPush_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dInclined_push_up") != null){
	var dInclined_push_up = document.getElementById("dInclined_push_up");
	dInclined_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Inclined_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dBox_dip") != null){
	var dBox_dip = document.getElementById("dBox_dip");
	dBox_dip.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Box_dip.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dDip") != null){
	var dDip = document.getElementById("dDip");
	dDip.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Dip.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dPseudo_planche_push_up") != null){
	var dPseudo_planche_push_up = document.getElementById("dPseudo_planche_push_up");
	dPseudo_planche_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pseudo_planche_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dProne_cobras") != null){
	var dProne_cobras = document.getElementById("dProne_cobras");
	dProne_cobras.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Prone_cobras.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dTowel_row") != null){
	var dTowel_row = document.getElementById("dTowel_row");
	dTowel_row.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Towel_row.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dPull_up") != null){
	var dPull_up = document.getElementById("dPull_up");
	dPull_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pull_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dAustralian_pull_up") != null){
	var dAustralian_pull_up = document.getElementById("dAustralian_pull_up");
	dAustralian_pull_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Australian_pull_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dMuscle_up") != null){
	var dMuscle_up = document.getElementById("dMuscle_up");
	dMuscle_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Muscle_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dTuck_front_lever_row") != null){
	var dTuck_front_lever_row = document.getElementById("dTuck_front_lever_row");
	dTuck_front_lever_row.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Tuck_front_lever_row.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dElbow_push_up") != null){
	var dElbow_push_up = document.getElementById("dElbow_push_up");
	dElbow_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Elbow_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dKneeling_hindu_push_up") != null){
	var dKneeling_hindu_push_up = document.getElementById("dKneeling_hindu_push_up");
	dKneeling_hindu_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Kneeling_hindu_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dHindu_push_up") != null){
	var dHindu_push_up = document.getElementById("dHindu_push_up");
	dHindu_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hindu_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dPike_push_up") != null){
	var dPike_push_up = document.getElementById("dPike_push_up");
	dPike_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pike_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dPlanche_push_up") != null){
	var dPlanche_push_up = document.getElementById("dPlanche_push_up");
	dPlanche_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Planche_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dHandstand_push_up") != null){
	var dHandstand_push_up = document.getElementById("dHandstand_push_up");
	dHandstand_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Handstand_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dHip_raise") != null){
	var dHip_raise = document.getElementById("dHip_raise");
	dHip_raise.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hip_raise.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dHip_hinge") != null){
	var dHip_hinge = document.getElementById("dHip_hinge");
	dHip_hinge.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hip_hinge.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dWide_squat") != null){
	var dWide_squat = document.getElementById("dWide_squat");
	dWide_squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Wide_squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dWide_squat_jump") != null){
	var dWide_squat_jump = document.getElementById("dWide_squat_jump");
	dWide_squat_jump.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Wide_squat_jump.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dSingle_leg_hip_raise") != null){
	var dSingle_leg_hip_raise = document.getElementById("dSingle_leg_hip_raise");
	dSingle_leg_hip_raise.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Single_leg_hip_raise.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dKneeling_triceps_extension") != null){
	var dKneeling_triceps_extension = document.getElementById("dKneeling_triceps_extension");
	dKneeling_triceps_extension.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Kneeling_triceps_extension.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dTiger_bend_push_up") != null){
	var dTiger_bend_push_up = document.getElementById("dTiger_bend_push_up");
	dTiger_bend_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Tiger_bend_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dRussian_dip") != null){
	var dRussian_dip = document.getElementById("dRussian_dip");
	dRussian_dip.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Russian_dip.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dBird_dog") != null){
	var dBird_dog = document.getElementById("dBird_dog");
	dBird_dog.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Bird_dog.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dRussian_twist") != null){
	var dussian_twist = document.getElementById("dRussian_twist");
	dRussian_twist.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Russian_twist.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dHanging_leg_twist") != null){
	var dHanging_leg_twist = document.getElementById("dHanging_leg_twist");
	dHanging_leg_twist.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hanging_leg_twist.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dJump") != null){
	var dJump = document.getElementById("dJump");
	dJump.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Jump.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dBurpee") != null){
	var dBurpee = document.getElementById("dBurpee");
	dBurpee.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Burpee.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("dWalk") != null){
	var dWalk = document.getElementById("dWalk");
	dWalk.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Walk.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////




	if(document.getElementById("Squat_with_chair") != null){
	var Squat_with_chair = document.getElementById("Squat_with_chair");
	Squat_with_chair.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Squat_with_chair.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Squat_jump") != null){
	var Squat_jump = document.getElementById("Squat_jump");
	Squat_jump.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Squat_jump.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Static_lunge") != null){
	var Static_lunge = document.getElementById("Static_lunge");
	Static_lunge.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Static_lunge.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Lunge") != null){
	var Lunge = document.getElementById("Lunge");
	Lunge.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Lunge.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Pistol_squat") != null){
	var Pistol_squat = document.getElementById("Pistol_squat");
	Pistol_squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pistol_squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Sissy_squat") != null){
	var Sissy_squat = document.getElementById("Sissy_squat");
	Sissy_squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Sissy_squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Plank") != null){
	var Plank = document.getElementById("Plank");
	Plank.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Plank.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Abs_crunch") != null){
	var Abs_crunch = document.getElementById("Abs_crunch");
	Abs_crunch.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Abs_crunch.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Legs_raise") != null){
	var Legs_raise = document.getElementById("Legs_raise");
	Legs_raise.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Legs_raise.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Dragon_flag") != null){
	var Dragon_flag = document.getElementById("Dragon_flag");
	Dragon_flag.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Dragon_flag.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("V-sit") != null){
	var V_sit = document.getElementById("V-sit");
	V_sit.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/V-sit.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Kneeling_push_up") != null){
	var Kneeling_push_up = document.getElementById("Kneeling_push_up");
	Kneeling_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Kneeling_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Push_up") != null){
	var Push_up = document.getElementById("Push_up");
	Push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Inclined_push_up") != null){
	var Inclined_push_up = document.getElementById("Inclined_push_up");
	Inclined_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Inclined_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Box_dip") != null){
	var Box_dip = document.getElementById("Box_dip");
	Box_dip.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Box_dip.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Dip") != null){
	var Dip = document.getElementById("Dip");
	Dip.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Dip.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Pseudo_planche_push_up") != null){
	var Pseudo_planche_push_up = document.getElementById("Pseudo_planche_push_up");
	Pseudo_planche_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pseudo_planche_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Prone_cobras") != null){
	var Prone_cobras = document.getElementById("Prone_cobras");
	Prone_cobras.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Prone_cobras.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Towel_row") != null){
	var Towel_row = document.getElementById("Towel_row");
	Towel_row.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Towel_row.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Pull_up") != null){
	var Pull_up = document.getElementById("Pull_up");
	Pull_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pull_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Australian_pull_up") != null){
	var Australian_pull_up = document.getElementById("Australian_pull_up");
	Australian_pull_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Australian_pull_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Muscle_up") != null){
	var Muscle_up = document.getElementById("Muscle_up");
	Muscle_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Muscle_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Tuck_front_lever_row") != null){
	var Tuck_front_lever_row = document.getElementById("Tuck_front_lever_row");
	Tuck_front_lever_row.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Tuck_front_lever_row.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Elbow_push_up") != null){
	var Elbow_push_up = document.getElementById("Elbow_push_up");
	Elbow_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Elbow_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Kneeling_hindu_push_up") != null){
	var Kneeling_hindu_push_up = document.getElementById("Kneeling_hindu_push_up");
	Kneeling_hindu_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Kneeling_hindu_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Hindu_push_up") != null){
	var Hindu_push_up = document.getElementById("Hindu_push_up");
	Hindu_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hindu_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Pike_push_up") != null){
	var Pike_push_up = document.getElementById("Pike_push_up");
	Pike_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Pike_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Planche_push_up") != null){
	var Planche_push_up = document.getElementById("Planche_push_up");
	Planche_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Planche_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Handstand_push_up") != null){
	var Handstand_push_up = document.getElementById("Handstand_push_up");
	Handstand_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Handstand_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Hip_raise") != null){
	var Hip_raise = document.getElementById("Hip_raise");
	Hip_raise.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hip_raise.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Hip_hinge") != null){
	var Hip_hinge = document.getElementById("Hip_hinge");
	Hip_hinge.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hip_hinge.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Wide_squat") != null){
	var Wide_squat = document.getElementById("Wide_squat");
	Wide_squat.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Wide_squat.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Wide_squat_jump") != null){
	var Wide_squat_jump = document.getElementById("Wide_squat_jump");
	Wide_squat_jump.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Wide_squat_jump.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Single_leg_hip_raise") != null){
	var Single_leg_hip_raise = document.getElementById("Single_leg_hip_raise");
	Single_leg_hip_raise.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Single_leg_hip_raise.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Kneeling_triceps_extension") != null){
	var Kneeling_triceps_extension = document.getElementById("Kneeling_triceps_extension");
	Kneeling_triceps_extension.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Kneeling_triceps_extension.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Tiger_bend_push_up") != null){
	var Tiger_bend_push_up = document.getElementById("Tiger_bend_push_up");
	Tiger_bend_push_up.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Tiger_bend_push_up.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Russian_dip") != null){
	var Russian_dip = document.getElementById("Russian_dip");
	Russian_dip.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Russian_dip.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Bird_dog") != null){
	var Bird_dog = document.getElementById("Bird_dog");
	Bird_dog.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Bird_dog.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Russian_twist") != null){
	var Russian_twist = document.getElementById("Russian_twist");
	Russian_twist.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Russian_twist.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Hanging_leg_twist") != null){
	var Hanging_leg_twist = document.getElementById("Hanging_leg_twist");
	Hanging_leg_twist.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Hanging_leg_twist.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Jump") != null){
	var Jump = document.getElementById("Jump");
	Jump.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Jump.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Burpee") != null){
	var Burpee = document.getElementById("Burpee");
	Burpee.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Burpee.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}
	if(document.getElementById("Walk") != null){
	var Walk = document.getElementById("Walk");
	Walk.onclick = function(){
		$("#start_point").after("<div id=\"Demo\"><img id=\"Demo_photo\" src=\"pictures/Walk.gif\" width=\"60%\" height=\"70%\"></img></div>");
		$("#Demo_photo").after("<p id=\"X\">X</p>");
		var Demo = document.getElementById("Demo");
			Demo.onclick = function(){
			$(this).remove();
		}
	}
	}

