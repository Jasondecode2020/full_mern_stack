/*
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
// 1 3 2
*/

const moduleA = { exports: {} };
const moduleB = { exports: {} };

(function (module) {
  const msg = "secret";

  function getMessage() {
    return msg;
  }
  module.exports = { getMessage };
})(moduleA);

(function (module) {
  let count = 1;

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  module.exports = { increment, getCount };
})(moduleB);

console.log(moduleA.exports.getMessage());
moduleB.exports.increment();
