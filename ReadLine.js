const readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('input> ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "right") rl.close();
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});