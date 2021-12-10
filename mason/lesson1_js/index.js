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

// var arr = [10, 12, 15, 21, 1];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 2000);
//   console.log("Index: " + i + ", element: " + arr[i]);
// }

// const firstName = "mason";

// console.log(`hello ${firstName}`);

// let name = 1; // we don't use name as variable

// console.log("I'm mason");
// console.log('I"m mason');

// spread operator

// const arr = [1, 2, 3];
// let newArr = [...arr, 4, 5];
// console.log(newArr);

// const fruit = { name: "apple", color: "red" };

// let newFruit = { ...fruit, color: "green" };
// console.log(newFruit);
// newFruit = { color: "red", ...fruit };
// console.log(newFruit);

// { name: 'apple', color: 'green' }
// { color: 'red', name: 'apple' }

// destructuring

// const fruit = { name: "apple", color: "red" };
// const { name: fruitName, color: fruitColor } = fruit;

// console.log(fruitName, fruitColor);

// for arr, there is sequence
// const fruits = [
//   { name: "apple", color: "red" },
//   { name: "pear", color: "yellow" },
// ];
// const [apple, pear] = fruits;
// console.log(apple);
// console.log(pear);
// const [{ color: appleColor }, { color: pearColor }] = fruits;
// console.log(appleColor);
// console.log(pearColor);

// const [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo, bar, baz);

// const [, , third] = ["foo", "bar", "baz"];
// console.log(third);

// const [head, ...tail] = [1, 2, 3, 5];
// console.log(head);
// console.log(tail);

// const { name, ...rest } = { color: "appleColor", color: "pearColor" };
// console.log(rest);

// const [missing = true] = [];
// console.log(missing);

// const { location = "sydney" } = { color: "appleColor", color: "pearColor" };
// console.log(location); // destructuring a value not exist

// function declaration is ok for sequence
/*
console.log(sum());
console.log(sum(3, 4));
function sum(a = 1, b = 2) {
  // with default value;
  return a + b;
}
*/

// arrow function express is not ok for sequence
// console.log(sum(1, 2)); // wrong Cannot access 'sum' before initialization
// const sum = (a = 1, b = 2) => a + b;
// console.log(sum(1, 2));

// const add = (x, y) => {
//   return {
//     x: x,
//     y: y,
//   };
// };

// const add_new = (x, y) => {
//   // es6 new syntax
//   return {
//     x,
//     y,
//   };
// };

// console.log(add_new(1, 1));

// const add_new = (x, y) => ({ x, y });
// console.log(add_new(1, 1));

// callback function

// function normalFunction(param) {
//   console.log(param);
// }

// function sum(x, y, callback) {
//   const sum = x + y;
//   callback(sum);
// }

// sum(1, 2, normalFunction);

// setTimeout(() => {
//   console.log("arrow");
// }, 1000);

// what is closure, lexical scope
// a function passed to another
// const number = 1;
// function foo() {
//   console.log(number);
// }
// function bar(fn) {
//   const number = 2;
//   fn();
// }
// bar(foo);

// a function was returned by another

// function foo() {
//   const number = 1;
//   return () => {
//     console.log(number);
//   };
// }
// let number = 100;
// foo()(); // 1 // the second () for executing the errow function

// function createCounter() {
//   let counter = 0;
//   const increment = () => {
//     counter++;
//   };
//   const getCount = () => {
//     return counter;
//   };
//   return {
//     increment,
//     getCount,
//   };
// }

// const counter = createCounter();
// counter.increment();
// console.log(counter.getCount());

// what is iffes

// (function () {})();

// this is important
// context

// function foo() {
//   console.log(this);
// }

// // change value of this
// foo.call({ number: 1 }); // {number: 1}
// foo.apply({ number: 2 }); // {number: 2}
// const bar = foo.bind({ number: 3 }); // {number: 3}
// bar();

// const calendar = {
//   currentDay: 6,
//   nextDay() {
//     this.currentDay++;
//     console.log(this.currentDay);
//   },
// };
// calendar.nextDay();

// const calendar = {
//   currentDay: 6,
//   nextDay() {
//     setTimeout(() => {
//       this.currentDay++;
//       console.log(this);
//       console.log(this.currentDay);
//     });
//   },
// };
// calendar.nextDay();

/*
const calendar = {
  currentDay: 6,
  nextDay() {
    setTimeout(
      function () {
        this.currentDay++;
        console.log(this);
        console.log(this.currentDay);
      }.bind(this)
    );
  },
};
calendar.nextDay();
*/
// quiz for this, check the result
/*
const calendar = {
  currentDay: 6,
  normal: function () {
    console.log(1, this);
    setTimeout(function () {
      console.log(2, this);
    });
  },
  arrow: function () {
    console.log(3, this);
    setTimeout(() => {
      console.log(4, this);
    });
  },
};

calendar.normal();
calendar.arrow();
*/
/*
const object = {
  message: "Hello World",

  getMessage() {
    const message = "hello earch";
    return this.message;
  },
};

console.log(object.getMessage()); // ??
*/

/*
const object = {
  who: "World",

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}`;
  },
};

console.log(object.greet()); // ??
console.log(object.farewell()); //?? why undefined
*/

const object = {
  who: "mason",
  cb() {
    console.log(`Hello, ${this.who}!`);
  },
};

function foo(cb) {
  cb();
}
foo(object.cb); // ?? why undefined
object.cb(); // ??
