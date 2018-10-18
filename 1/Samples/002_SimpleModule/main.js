// require('./mod');

// console.log('Hello from MAIN module!');
let arr = [3, 5, 7];
arr.fool = "hello";
// console.log((arr.length));

function foo () {
  console.log(this.fool);
  
}
let sss = foo.bind(arr)
sss()

