## backend

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
