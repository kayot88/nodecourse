


var name = 'Bob',
  time = 'yesterday';
time = 'today';

console.log(`Hello ${name}, how are you ${time}?`);

var bob = {
  name: name,
  sayMyName: function () {
    console.log(this.name);
  }
};