let count = 0;

let calc = () => {
  count++;
  console.log(`Event - ${count}`);
}

let evt = require('events');

let test = new evt.EventEmitter();

test.on('Click', calc);

test.once('Click', calc);
test.addListener('Click', calc);


test.emit('Click')
