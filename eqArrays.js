const eqArrays = function(arr1, arr2){
    if(arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]){
      return true;
    }
  return false
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} equals ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS