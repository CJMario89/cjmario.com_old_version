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

var JoJo = document.getElementById("JoJo");
if (JoJo) {
JoJo.onclick = function(){
	jQuery.ajax({
		url:"JoJo.php",
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
	window.location = "https://www.youtube.com/watch?v=G65pvuTFR_A";
}
}