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

var Kobe = document.getElementById("Kobe");
Kobe.onclick = function(){
	window.location = "index.php?page=Kobe";
}


var Kushiro = document.getElementById("Kushiro");
Kushiro.onclick = function(){
	window.location = "index.php?page=Kushiro";
}
var Yokohama = document.getElementById("Yokohama");
Yokohama.onclick = function(){
	window.location = "index.php?page=Yokohama";
}