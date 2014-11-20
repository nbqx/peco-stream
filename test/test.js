var test = require('tape'),
    colorize = require('tap-colorize'),
    isStream = require('isstream'),
    fs = require('fs');

var peco = require(__dirname+'/../');

test.createStream().pipe(colorize()).pipe(process.stdout);

test('test1',function(t){
  t.plan(2);
  var p = peco();
  t.ok(isStream(p));
  fs.createReadStream(__dirname+'/sample.txt')
    .pipe(p)
    .on('data',function(data){
      t.ok('aaa',data.toString())
    });
});
