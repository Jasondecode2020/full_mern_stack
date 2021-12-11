const moduleA = require("./message");
const moduleB = require("./counter");

console.log(moduleA.getMessage());
moduleB.increment();
console.log(moduleB.getCount());
