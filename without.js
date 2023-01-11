const words = ["hello", "world", "lighthouse"];

const assertArraysEqual = function(arr1, arr2) {
  if (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
    return console.log(`✅✅✅ Assertion Passed: '${arr1}' equals '${arr2}'`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} does not equal ${arr2}`);

};

const without = function(sourceArr, removeArr){
  let outputArray = []
for (let i = 0; i < sourceArr.length; i++) {
    if (sourceArr[i] !== removeArr[i]) {
      outputArray.push(sourceArr[i]);
    }
  }
  return outputArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

