// array op
/*
const fruits = ["apple"];

fruits.push("pear");
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.splice(0, 1, "orange", "peach"); // delete 1 from index 0 and add 2 fruits
console.log(fruits);
*/

// arr iteration
/*
// 1 for
const fruits = ["apple", "grape", "orange"];
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  console.log(fruit);
}
// for ... of
for (let fruit of fruits) {
  console.log(fruit);
}
// for ... in
for (let i in fruits) {
  console.log(fruits[i]);
}
*/

/*
const fruits = ["apple", "grape", "orange"];
// forEach
fruits.forEach((fruit, i) => console.log(fruit, i)); // i is index
// Map
fruits.map((fruit) => console.log(fruit));

// map
const newFruits = fruits.map((fruit) => ({
  name: fruit,
  price: 10,
}));
console.log(newFruits);
*/

/*
//reduce
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

// use filter and find
// the difference is that find only one, filter all
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
  {
    name: "grape",
    color: "green",
  },
];

const filteredFruits = fruits.filter((i) => i.color === "green");
console.log(filteredFruits);
console.log(fruits);

const findFruit = fruits.find((i) => i.color === "green");
console.log(findFruit);
*/

// set: has, delete, add, size
/*
const set = new Set([1, 2, 2, 3]);
console.log(set);
set.add(5);
console.log(set);
console.log(set.has(5));
set.delete(1);
console.log(set.has(1));
console.log(set.size); // no ()

// often used for set
const array = [1, 2, 2, 3, 3, 4];
const setArray = [...new Set(array)];
console.log(setArray);
*/

// constructor function
/*
function Person(name) {
  this.name = name;
  this.toString = function () {
    console.log("name: " + this.name);
  };
}
var mason = new Person("mason");
mason.toString();
*/

// class

/*
class Person {
  constructor(name) {
    this.name = name;
  }
  toString() {
    console.log("name: " + this.name);
  }
}
var mason = new Person("mason");
mason.toString();

class Teacher extends Person {
  // if inherit must use constructor and super
  constructor(name, sex) {
    super(name);
    this.sex = sex; // this is below name
    if (!sex) {
      throw new Error("error occured"); // throw new Error
    }
  }
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

var james = new Teacher("james", "male");
james.toString();
james.teach();
console.log(james.sex);

console.log(james instanceof Teacher);
console.log(james instanceof Person);
console.log(james instanceof Object);
console.log(typeof james);
*/

// quiz 2
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}

// const cat = new Pet("Fluffy");
// console.log(cat.getName()); // Fluffy

// var scope = "global scope";
// function checkscope() {
//   var scope = "local scope";
//   function f() {
//     return console.log(scope);
//   }
//   return f();
// }
// checkscope(); // local

var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return console.log(scope);
  }
  return f;
}
checkscope()(); // local
