/*
function Person(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

const father = new Person("john", 28, "green");
const mother = new Person("lily", 28, "green");

Person.prototype.getName = function () {
  return "Name: " + this.name;
};

console.log(father.name);
console.log(mother.name);
console.log(father.getName());
console.log(mother.getName());
*/

const obj = {};
obj.toString = function () {
  console.log("Object");
};
console.log(obj.toString());

var arr = [1, 2, 3];
let a = arr.indexOf(2);
console.log(a);
console.log(arr.toString());
