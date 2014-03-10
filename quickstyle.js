
function quickstyle(jscolor) {
  var bgColorInput   = buildColorInput(changeBgColor)
  var fontColorInput = buildColorInput(changeColor);
  appendFirst('body', fontColorInput);
  appendFirst('body', bgColorInput);

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

  function buildColorInput(onImmediateChange) {
    var i = document.createElement('input');
    i.type = 'text'

      var picker = new jscolor.color(i, {"onImmediateChange": onImmediateChange}); 

    return i;
  }
};
