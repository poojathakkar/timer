let prompt = require("prompt-sync")();
let str = prompt("Enter timer: ");
let splitted = str.split(' ');

if (splitted.length > 0) {
  const timer = function(splitted) {
    for (let time of splitted) {
      if (time > 0 && (!isNaN(time))){
        setTimeout(() => {
        process.stdout.write('\x07');
        }, time * 1000)
      }  
    }
  };
  timer(splitted);
}