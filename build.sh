cat wrapper-open.js jscolor-piece.js quickstyle-piece.js wrapper-close.js > quickstyle.built.js
uglifyjs quickstyle.built.js -o quickstyle.min.js
