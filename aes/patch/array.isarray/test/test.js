var argv    = require('minimist')(process.argv.slice(3)); // Remove nodePath, tapePath, scriptpath
var test    = require('tape');
var estktap = require('estktap');
var path    = require('path');

var targets = argv._;
console.log("Starting tests for targets: " + targets);

test('extendscript array.isarray test',function(t){
  
  estktap('isarray Test', path.join(__dirname, '/test.jsx'), true, targets);
  
  t.end();

});