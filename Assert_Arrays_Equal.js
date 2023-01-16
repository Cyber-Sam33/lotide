
// const assertArraysEqual = function(arr1, arr2) {
//   if (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
//     return console.log(`✅✅✅ Assertion Passed: ${arr1} equals ${arr2}`);
//   }
//   return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} does not equal ${arr2}`);

// };
const assertArraysEqual = function(arr1, arr2) {
  for (i in arr1) {
    if (arr1[i] && arr2[i]) {
      if (arr1[i] === arr2[i]) {
        return console.log(`✅✅✅ Assertion Passed: ${arr1} equals ${arr2}`);
      } else {
        return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} does not equal ${arr2}`);
      }
    }
  }
};


assertArraysEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);