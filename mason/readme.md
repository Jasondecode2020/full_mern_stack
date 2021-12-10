## backend

30 hours

nodeJS include js

### lesson 1

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
