
const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} does not equal ${arr2}`);
  }
  for (i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} does not equal ${arr2}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${arr1} equals ${arr2}`);
};

module.exports = assertArraysEqual;



