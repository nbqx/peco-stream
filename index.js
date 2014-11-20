var es = require('event-stream');
var exec = require('child_process').exec;

module.exports = function(){
  var peco = exec('peco');
  return es.duplex(peco.stdin,peco.stdout)
};
