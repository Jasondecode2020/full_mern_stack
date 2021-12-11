let count = 1;

function increment() {
  count++;
}

function getCount() {
  return count;
}

module.exports = { increment, getCount };

console.log(this === module.exports);
