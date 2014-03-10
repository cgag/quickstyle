// lightweight onready fn from stackoverflow
var tId = setInterval(function(){if(document.readyState == "complete") onComplete()},11);
function onComplete(){
  clearInterval(tId);    
  quickstyle(jscolor);
};

})();
