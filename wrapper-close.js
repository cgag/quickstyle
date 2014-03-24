// lightweight onready fn from stackoverflow
var tId = setInterval(function(){if(document.readyState == "complete") onComplete()},11);
function onComplete(){
  clearInterval(tId);    

  var button = document.createElement('button');
  button.innerHTML = '+';
  button.onclick= function() { quickstyle(jscolor) };

  document.body.insertBefore(button, document.body.firstChild);

  quickstyle(jscolor);
};

})();
