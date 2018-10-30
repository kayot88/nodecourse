let evt = require('events').EventEmitter;

let emmiter = new evt();

emmiter.on('event', () => {
  console.log(`Event - 1`);
})
emmiter.addListener('event', () => {
  console.log(`Event - 3`);
})
emmiter.on('event', () => {
  console.log(`Event - 2`);
})

emmiter.emit('event')