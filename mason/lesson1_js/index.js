/*var apple = "apple";
function foo() {
  var pear = "pear";
  console.log(apple); // apple
  console.log(pear); //pear
}

foo();
console.log(apple);
// console.log(pear); // ReferenceError: pear is not defined
*/

/*
var fruit = "apple";
var fruit = "pear";
console.log(fruit);
fruit = "grape";
console.log(fruit);
*/

/*
console.log(fruit);
var fruit = "apple";
*/

/*
foo();

function foo() {
  var pear = "pear";
  console.log(pear); //pear
}*/

/*
var fruit = "apple";
if (true) {
  // think in another file
  var fruit = "pear";
}
console.log(fruit);
*/

/*
let fruit = "apple";
if (true) {
  // think in another file
  let fruit = "pear";
}
console.log(fruit);
*/

// var fruit = "apple";
// var fruit = "pear";
// console.log(fruit);

// let fruit = "apple";
// let fruit = "pear";
// console.log(fruit); // Identifier 'fruit' has already been declared

// let fruit = "apple";
// fruit = "pear";
// console.log(fruit); // Ok

// console.log(fruit); // Cannot access 'fruit' before initialization
// let fruit = "apple";

// const fruit = "apple";
// fruit = "grape"; // Assignment to constant variable.
// console.log(fruit);

/*
const fruit = { name: "apple", color: "red" };
// fruit = { name: "apple", color: "green" }; // Assignment to constant variable.
fruit.color = "green";
console.log(fruit);

const fruits = [];
// fruits = ["apple"]; // Assignment to constant variable.
fruits.push("apple");
console.log(fruits);
*/

// console.log(fruits); // fruits is not defined

// quiz 1
/*
var i = 5;
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
*/

// result
// 0;
// 1;
// 2;
// 3;

// quiz 2
/*
let i = 5;
for (let i = 0; i < 3; i++) { // here is block
  console.log(i);
}
console.log(i);
*/
// result
// 0;
// 1;
// 2;
// 5;

// quiz 3 trick
/*
setTimeout is callback function, first wait for 10s, then console, but at 
this time, the i is already 5 and arr[5] is undefined
*/
// var arr = [10, 12, 15, 21, 1];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 10000);
// }

var arr = [10, 12, 15, 21, 1];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 2000);
  console.log("Index: " + i + ", element: " + arr[i]);
}
