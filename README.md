## peco-stream

node writable stream for peco

## usage

see example.js

```js
var fs = require('fs'),
    peco = require(__dirname+'/');

// readable file stream -> peco -> stdout
fs.createReadStream(__filename).pipe(peco()).pipe(process.stdout);

// readable file stream -> peco -> writable stream
fs.createReadStream(__filename)
  .pipe(peco())
  .pipe(fs.createWriteStream(__dirname+'/out.txt'));
```
