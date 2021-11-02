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

var Customized = document.getElementById("Customized");
Customized.onclick = function(){
	window.location = 'index.php?page=Customized';
}

var Recommended = document.getElementById("Recommended");
Recommended.onclick = function(){
	window.location = 'index.php?page=Recommended';
}
