function quickstyle(jscolor) {
  var quickstyleContainer = document.createElement('div');
  var bgColorInput   = buildColorInput(changeBgColor, 'bg---color: ')
  var fontColorInput = buildColorInput(changeColor, 'font color: ');

  quickstyleContainer.appendChild(bgColorInput);
  quickstyleContainer.appendChild(fontColorInput);

  appendFirst('body', quickstyleContainer);

  function appendFirst(selector, el) {
    var container = document.querySelector(selector);
    container.insertBefore(el, container.firstChild)
  }

  function changeBgColor() {
    // In here, 'this' refers to the jscolor picker of the event
    document
    .querySelector('body')
    .style
    .backgroundColor = "#" + this.toString();
  };

  function changeColor() {
    // In here, 'this' refers to the jscolor picker of the event
    document
      .querySelector('body')
      .style
      .color = "#" + this.toString();
  };

  function buildColorInput(onImmediateChange, labelText) {
    var inputContainer = document.createElement('div');

    var i = document.createElement('input');
    i.type = 'text'
    var picker = new jscolor.color(i, {"onImmediateChange": onImmediateChange}); 

    var label = document.createElement('label')
    label.appendChild(document.createTextNode(labelText));
    label.appendChild(i);

    inputContainer.appendChild(label);

    return inputContainer;
  }
};
