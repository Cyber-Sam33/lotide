const assertArraysEqual = function(arr1, arr2) {
  if (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} equals ${arr2}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} does not equal ${arr2}`);

};

const eqArrays = function(arr1, arr2){
  if(arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]){
    return true;
  }
return false
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array){
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

console.log(results1);