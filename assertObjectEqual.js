const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} equals ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} does not equal ${expected}`);


};

// console.log(`Example label: ${inspect(actual)}`);

module.exports = assertObjectsEqual;

