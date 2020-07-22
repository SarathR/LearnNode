const EventEmitter = require('events')
const readline = require('readline');


class Heater extends EventEmitter{
  constructor() {
    super();
    this.temp = 0;
  }
  increase(){
    this.temp++;
    if(this.temp > 100 && this.temp < 106 )
      this.emit('warning');
    if(this.temp > 105)
      this.emit('alert', this.temp);
  }
}

const myHeater = new Heater();

myHeater.on('warning', () => console.log('Temperature increated to a warning level'));
myHeater.on('alert', (temp) => console.log('Attention reduce temp! : ' + temp));

for(var i= 0; i < 98; i++)
  myHeater.increase();

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('yes/no> ');
rl.prompt();
rl.on('line', function(line) {
    console.log(i);
    if (line === "no") rl.close();
    rl.prompt();
    i++;
    myHeater.increase();
}).on('close',function(){
    process.exit(0);
});