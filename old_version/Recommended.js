/*
			beginner					intermediate			advanced
leg			squat with chair			squat jump				pistol squat 
leg 		static lunge				lunge					sissy squat
abs			plank						leg raise				dragon flag
abs			abs crunch					abs crunch				V-sit
chest		kneeling push ups			push ups				pseudo planche push up
chest		incline push ups			box dips				dips
back		prone cobras				pull up					muscle up
back 		towel row					australian pull up 		tuck front lever row
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
var reps = 8;
var sets = 3;
var level = 0;
var QNum = 0;
var MENU = "<h2>Calisthenics Training Menu</h2>";
var ClickClose = document.getElementById("ClickClose");

function appendMenu(){
	if(level == 1){
		MENU = MENU + "<h3 id=\"Squat_with_chair\" >Squat with chair " + reps + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Plank\" >Plank " + "20" + " sec " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Kneeling_push_up\">Kneeling push up " + (reps-2) + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Prone_cobras\">Prone cobras " + "10" + " sec " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Elbow_push_up\">Elbow push up " + reps + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Hip_raise\">Hip raise " + reps + " reps " + sets + " set(s)</h3>";
	}else if(level == 2){
		MENU = MENU + "<h3 id=\"Squat_jump\">Squat jump " + (reps+4) + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Legs_raise\">Legs raise " + (reps+2) + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Push_up\">Push up " + (reps+2) + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Pull_up\">Pull up " + reps + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Pike_push_up\">Pike push ups " + reps + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Wide_squat\">Wide squat " + (reps+4) + " reps " + sets + " set(s)</h3>";
	}else if(level == 3){
		MENU = MENU + "<h3 id=\"Pistol_squat\">Pistol squat " + reps + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Dragon_flag\">Dragon flag " + reps + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Pseudo_planche_push up\">Pseudo planche push up " + (reps+2) + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Muscle up\">Muscle up " + reps + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Handstand_push_up\">Handstand push up " + reps + " reps " + sets + " set(s)</h3>";
		MENU = MENU + "<h3 id=\"Wide_squat_jump\">Wide squat jump " + (reps+6) + " reps " + sets + " set(s)</h3>";
	}
	return;
}

function FINISH(){
	$("h3").remove();
	$("#start_point").after("<h4>This menu gives you a roughly direction to train.<br><br>You can go to \"Customized\" adjust it later.<br><br>Weekly progressing in reps and sets by 5% is Recommended.<br><br></h4>");
	$("h4").after("<div style=\"margin: 0 auto;\" class=\"option\" id=\"MENU\">See your menu</div>");
	$("#MENU").after("<h6><br>Note:This action will cover your Customized menu, if you have created one previously. </h6>");

	var SeeMenu = document.getElementById("MENU");
	SeeMenu.onclick = function(){
		$("h4").remove();
		$("h6").remove();
		$(this).remove();
		MENU = MENU + "<div id=\"end_point\"></div>"
		$("#start_point").after(MENU);
		$("#end_point").after("<p class=\"option\" id=\"Screenshot\">Screenshot</p>");
		$("#Screenshot").after("<p class=\"option\" id=\"Customized\">Customized</p>");
		Cookies.remove('MENU');
		Cookies.set('MENU', MENU);
		DEMO();
	}
}

var start = document.getElementById("start");
start.onclick = function(){
	QNum = QNum + 1;
	$(this).remove();
	$("h3").remove();
	NextQuestion();
}

function NextQuestion(){
	if(QNum == 1){
		$("#start_point").after("<h3>Finish following question to have a Recommended menu</h3>");
		$("h3").after("<div class=\"Qset\" id=\"Q1\"><div class=\"question\">Do you have workout experience?</div><div class=\"option\" id=\"Q11\">beginner</div><div class=\"option\" id=\"Q12\">intermediate</div><div class=\"option\" id=\"Q13\">advanced</div></div>");
		var Q11 = document.getElementById("Q11");
		Q11.onclick = function(){
			sets = sets - 1;
			reps = reps + 2;
			level = 1;
			$(this).parent().remove();
			 NextQuestion();
		}
		var Q12 = document.getElementById("Q12");
		Q12.onclick = function(){
			sets = sets + 1;
			level = 2;
			$(this).parent().remove();
			 NextQuestion();
		}
		var Q13 = document.getElementById("Q13");
		Q13.onclick = function(){
			sets = sets + 1;
			reps = reps - 2;
			level = 3;
			$(this).parent().remove();
			 NextQuestion();
		}
	}else if(QNum == 2){
		$("h3").after("<div class=\"Qset\" id=\"Q2\"><div class=\"question\">Are you sedentary?</div><div class=\"option\" id=\"Q21\">Yes</div><div class=\"option\" id=\"Q22\">No</div></div>");
		var Q21 = document.getElementById("Q21");
		Q21.onclick = function(){
			if(level == 1){
				sets = sets - 1;
				reps = reps + 2;
			}
			$(this).parent().remove();
			NextQuestion();
		}
		var Q22 = document.getElementById("Q22");
		Q22.onclick = function(){
			$(this).parent().remove();
			NextQuestion();
		}
	}else if(QNum == 3) {
		$("h3").after("<div class=\"Qset\" id=\"Q3\"><div class=\"question\">Which part do you want to improve most?</div><div class=\"option\" id=\"Q31\">Legs</div><div class=\"option\" id=\"Q32\">Chests</div><div class=\"option\" id=\"Q33\">Back</div><div class=\"option\" id=\"Q34\">Arms</div><br><div class=\"option\" id=\"Q35\">Hips</div><div class=\"option\" id=\"Q36\">Abs</div><div class=\"option\" id=\"Q37\">Shoulders</div><div class=\"option\" id=\"Q38\">None</div></div>");
		var Q31 = document.getElementById("Q31");
		Q31.onclick = function(){
			$(this).parent().remove();
			if(level == 1){
				MENU = MENU + "<h3 id=\"Static_lunge\">Static lunge " + reps + " reps " + sets + " set(s)(each side)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Lunge\">Lunge " + reps + " reps " + sets + " set(s)(each side)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"Sissy_squat\">Sissy squat " + reps + " reps " + sets + " set(s)</h3>";
			}
			NextQuestion();
		}
		var Q32 = document.getElementById("Q32");
		Q32.onclick = function(){
			$(this).parent().remove();
			if(level == 1){
				MENU = MENU + "<h3 id=\"Inclined_push_up\">Inclined push up " + (reps-2) + " reps " + sets + " set(s)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Box_dip\">Box dip " + reps + " reps " + sets + " set(s)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"Dip\">Dip " + (reps+6) + " reps " + sets + " set(s)</h3>";
			}
			NextQuestion();
		}
		var Q33 = document.getElementById("Q33");
		Q33.onclick = function(){
			$(this).parent().remove();
			if(level == 1){
				MENU = MENU + "<h3 id=\"Towel_row\">Towel row " + reps + " reps " + sets + " set(s)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Australian_pull_up\">Australian pull up " + reps + " reps " + sets + " set(s)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"Tuck_front_lever_row\">Tuck front lever row " + reps + " reps " + sets + " set(s)</h3>";
			}
			NextQuestion();
		}
		var Q34 = document.getElementById("Q34");
		Q34.onclick = function(){
			$(this).parent().remove();
			if(level == 1){
				MENU = MENU + "<h3 id=\"Kneeling_triceps_extension\">Kneeling triceps extension " + (reps-2) + " reps " + sets + " set(s)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Tiger_bend_push_up\">Tiger bend push up " + reps + " reps " + sets + " set(s)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"Russian_dip\">Russian dip " + reps + " reps " + sets + " set(s)</h3>";
			}
			NextQuestion();
		}
		var Q35 = document.getElementById("Q35");
		Q35.onclick = function(){
			$(this).parent().remove();
			if(level == 1){
				MENU = MENU + "<h3 id=\"Hip_hinge\">Hip hinge " + reps + " reps " + sets + " set(s)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Single_leg_hip_raise\">Single leg hip raise " + (reps+2) + " reps " + sets + " set(s)(each side)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"Single_leg_hip_raise\">Single leg hip raise " + (reps+4) + " reps " + sets + " set(s)(each side)</h3>";
			}
			NextQuestion();
		}
		var Q36 = document.getElementById("Q36");
		Q36.onclick = function(){
			$(this).parent().remove();
			if(level == 1){
				MENU = MENU + "<h3 id=\"Abs_crunch\">Abs crunch " + reps + " reps " + sets + " set(s)(each side)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Abs_crunch\">Abs crunch " + (reps+4) + " reps " + sets + " set(s)(each side)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"V-sit\">V-sit " + reps + " reps " + sets + " set(s)</h3>";
			}
			NextQuestion();
		}
		var Q37 = document.getElementById("Q37");
		Q37.onclick = function(){
			$(this).parent().remove();
			if(level == 1){
				MENU = MENU + "<h3 id=\"Kneeling_hindu_push_up\">Kneeling hindu push up " + reps + " reps " + sets + " set(s)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Hindu_push_up\">Hindu push up " + (reps+4) + " reps " + sets + " set(s)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"Planche_push_up\">Planche push up " + reps + " reps " + sets + " set(s)</h3>";
			}
			NextQuestion();
		}
		var Q38 = document.getElementById("Q38");
		Q38.onclick = function(){
			$(this).parent().remove();
			NextQuestion();
		}
	}else if(QNum == 4) {
		$("h3").after("<div class=\"Qset\" id=\"Q4\"><div class=\"question\">What's your mainly goal?</div><div class=\"option\" id=\"Q41\">Functional</div><div class=\"option\" id=\"Q42\">Muscular hypertrophy</div><div class=\"option\" id=\"Q43\">Weight-lossing</div><div class=\"option\" id=\"Q44\">Overall healthy</div></div>");
		var Q41 = document.getElementById("Q41");
		Q41.onclick = function(){
			$(this).parent().remove();
			appendMenu();
			//functional
			if(level == 1){
				MENU = MENU + "<h3 id=\"Bird_dog\">Bird dog " + reps + " reps " + sets + " set(s)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Russian_twist\">Russian twist " + reps + " reps " + sets + " set(s)(each side)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"Hanging_leg_twist\">Hanging leg twist " + reps + " reps " + sets + " set(s)(each side)</h3>";
			}
			FINISH();
		}
		var Q42 = document.getElementById("Q42");
		Q42.onclick = function(){
			$(this).parent().remove();
			if(level != 1){
				sets = sets + 1;
			}
			reps = reps + 2;
			appendMenu();
			FINISH();
		}
		var Q43 = document.getElementById("Q43");
		Q43.onclick = function(){
			$(this).parent().remove();
			appendMenu();
			//weight-lossing
			if(level == 1){
				MENU = MENU + "<h3 id=\"Walk\">Walk " + "20" + " mins " + 3 + " set(s)(week)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Walk\">Walk " + "20" + " mins " + 3 + " set(s)(week)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"Walk\">Walk " + "20" + " mins " + 3 + " set(s)(week)</h3>";
			}
			FINISH();
		}
		var Q44 = document.getElementById("Q44");
		Q44.onclick = function(){
			$(this).parent().remove();
			appendMenu();
			//Overall healthy
			if(level == 1){
				MENU = MENU + "<h3 id=\"Jump\">Jump " + reps + " reps " + sets + " set(s)</h3>";
			}else if(level == 2){
				MENU = MENU + "<h3 id=\"Burpee\">Burpee " + (reps+2) + " reps " + sets + " set(s)</h3>";
			}else if(level == 3){
				MENU = MENU + "<h3 id=\"Burpee\">Burpee " + (reps+4) + " reps " + sets + " set(s)</h3>";
			}
			FINISH();
		}
	}
	QNum = QNum + 1;
}




function DEMO(){
	var Screenshot = document.getElementById("Screenshot");
	Screenshot.onclick = function(){
		$("#Customized").hide();
		$("#Screenshot").hide();
		$("#end_point").after("<div id =\"ss_icon\"><img id=\"CJMario\" src=\"pictures/CJMario.jpg\" width=\"15%\"height=\"15%\"></div>");
		var ss_icon = document.getElementById("ss_icon");
		ss_icon.onclick = function(){
			$("#ss_icon").remove();
			$("#Customized").show();
			$("#Screenshot").show();
		}
		//ajax
		jQuery.ajax({
			url:"Recommended_clicks.php",
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
	var Customized = document.getElementById("Customized");
	Customized.onclick = function(){
		window.location = "index.php?page=Customized";
	}
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
}
