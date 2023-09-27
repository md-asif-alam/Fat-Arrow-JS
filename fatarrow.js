console.log("Fat Arrow functions");

//ES5
// var sum = function () {
//   var a = 10;
//   var b = 5;
//   return a + b;
// };

// console.log(sum());

//ES6

// const sum = () => {
//   let a = 10;
//   let b = 20;
//   return a + b;
// };

let a = 30;
let b = 40;
// const sum = () => {
//   return a + b;
// };

//If single statement used the return keyword and curly braces are also optional
const sum = () => a + b;
console.log(sum());
