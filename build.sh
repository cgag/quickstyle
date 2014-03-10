cat wrapper-open.js jscolor-piece.js quickstyle.js wrapper-close.js > _qstemp.js
uglifyjs _qstemp.js -o quickstyle.min.js
rm _qstemp.js
