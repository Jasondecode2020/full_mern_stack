## backend

30 hours

nodeJS include js

### lesson 1 listened 3 times: 10h

ES
ECMA Script European Computer Manufacturer’s Association: ECMA
ECMA international

ES5 ES2009
ES6 ES2015
ES7 ES2016
ES12 ES2021

ES6+

Babel: compile ES6+ to ES5

var vs let and const

For es6, only use let and const

1 function scope, block scope and global scope

```js
var apple = "apple";
function foo() {
  var pear = "pear";
  console.log(apple); // apple
  console.log(pear); //pear
}

foo();
console.log(apple);
// console.log(pear); // ReferenceError: pear is not defined
```

2 Re-declared and update

```js
var fruit = "apple";
var fruit = "pear";
console.log(fruit);
fruit = "grape";
console.log(fruit);
```

Hoisting

```js
console.log(fruit); // undefined
var fruit = "apple";
```

equals

```js
var fruit;
console.log(fruit); // undefined
fruit = "apple";
```

function hoisting

```js
foo();

function foo() {
  var pear = "pear";
  console.log(pear); //pear
}
```

compare why use let and not use var, var can be changed, let cannot

```js
var fruit = "apple";
if (true) {
  // think in another file
  var fruit = "pear";
}
console.log(fruit);

let fruit = "apple";
if (true) {
  // think in another file
  let fruit = "pear";
}
console.log(fruit);
```

Hoisting for let is different

```js
console.log(fruit); // Cannot access 'fruit' before initialization
let fruit = "apple";
```

pass by value or reference

```js
const fruit = { name: "apple", color: "red" };
// fruit = { name: "apple", color: "green" }; // Assignment to constant variable.
fruit.color = "green";
console.log(fruit);

const fruits = [];
// fruits = ["apple"]; // Assignment to constant variable.
fruits.push("apple");
console.log(fruits);
```

// quiz 3

```js
var arr = [10, 12, 15, 21, 1];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 1000);
}
```

### lesson 2 10h

array operations

//reduce

```js
const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);

let accu = 0;
for (let i in numbers) {
  accu += numbers[i];
}
console.log(accu);

// search

console.log(numbers.includes(2));
console.log(numbers.indexOf(2)); // get first index of number 2
console.log(numbers.some((x) => x > 10));
console.log(numbers.some((x) => x < 2));
```

use filter

```js
// use filter
const odds = numbers.filter((i) => i % 2);
console.log(odds);
console.log(numbers);

const fruits = [
  {
    name: "apple",
    color: "green",
  },
  {
    name: "pear",
    color: "yellow",
  },
];

const filteredFruits = fruits.filter((i) => i.color === "green");
console.log(filteredFruits);
console.log(fruits);
```

nodejs
frontend, backend, interface
CSR: client side rendering

backend: Router - Controllers - Models

// js 单线程语言
process 进程
thread 线程

blocking problem

等待: 同步 = 阻塞
不等待： 异步 = 非阻塞
事件触发

heap 和 stack, 用来存储数据
call stack： LIFO: function call, 当前正在执行的命令
queue： FIFO, event loop， callback queue

This is a very good video to explain callback queue, stack and event loop
event loop is used to check callback queue, if not empty and stack is empty, then put event to stack
event loop: https://www.youtube.com/watch?v=8aGhZQkoFbQ

setTimeout: in Web API

why single theaded: js in web somethings are slow

if slow, it will block, if not sync

ndoe.js

1 js run environment build on Chrome's V8 engine

2 async, event driven

3 non-blocking I/O

4 backend

5 fast and scalable
