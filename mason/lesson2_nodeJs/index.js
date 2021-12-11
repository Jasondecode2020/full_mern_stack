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
const fruits = ["apple", "grape", "orange"];
// forEach
fruits.forEach((fruit) => console.log(fruit));
// Map
fruits.map((fruit) => console.log(fruit));
