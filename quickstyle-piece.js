function quickstyle(jscolor) {
  var quickstyleContainer = document.createElement('div');

  var selector = 'body';
  var selectorInput = buildSelectorInput(selector)

  var bgColorInput   = buildColorInput(changeBgColor, 'bg---color: ')
  var fontColorInput = buildColorInput(changeColor, 'font color: ');

  quickstyleContainer.appendChild(bgColorInput);
  quickstyleContainer.appendChild(fontColorInput);

  appendFirst('body', quickstyleContainer);
  appendFirst('body', selectorInput);

  function appendFirst(selector, el) {
    var container = document.querySelector(selector);
    container.insertBefore(el, container.firstChild)
  }

  function buildSelectorInput(defaultSelector) {
    div = document.createElement('div');
    div.appendChild(document.createTextNode('selector:   '));
      
    i = document.createElement('input');
    i.type = 'text';
    i.value = defaultSelector;
    i.oninput = function(e) {
      selector = e.target.value;
    }

    div.appendChild(i);
    return div;
  }

  function changeBgColor() {
    // In here, 'this' refers to the jscolor picker of the event
    node = document.querySelector(selector)
    if(node) {
      node.style.backgroundColor = "#" + this.toString();
    }
  };

  function changeColor() {
    // In here, 'this' refers to the jscolor picker of the event
    node = document.querySelector(selector)
    if(node) { 
      node.style.color = "#" + this.toString();
    }
  };

  function buildColorInput(onImmediateChange, labelText) {
    var inputContainer = document.createElement('div');

    var i = document.createElement('input');
    i.type = 'text';
    var picker = new jscolor.color(i, {"onImmediateChange": onImmediateChange}); 

    var label = document.createElement('label')
    label.appendChild(document.createTextNode(labelText));
    label.appendChild(i);

    inputContainer.appendChild(label);

    return inputContainer;
  }
};
