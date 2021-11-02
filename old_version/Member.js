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