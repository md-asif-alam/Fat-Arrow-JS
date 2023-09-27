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
let b = 20;
const sum = () => {
  return a + b;
};

console.log(sum());
