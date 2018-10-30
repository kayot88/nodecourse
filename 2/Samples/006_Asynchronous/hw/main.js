let evt = require('events').EventEmitter;

let emt = new evt();

emt.addListener('click', function () {
  setImmediate(() => {
    console.log(`listeners 3`);
  })
})

emt.addListener(`click`, function () {
  console.log(`listeners 1`);
})


emt.addListener('click', function () {
  setImmediate(() => {
    console.log('listeners 2');
  })
})

setTimeout(() => {
  emt.emit('click')
}, 1000);


emt.addListener('click', () => {
  console.log('testinfg');
  
})

