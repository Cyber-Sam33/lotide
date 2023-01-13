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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  const results = [];

  for (item of array){
console.log("item = ", item);
console.log("callback item = ", callback(item));
console.log("---------------");
    if (callback(item)){
      return results;
    } else {
      results.push(item);
    }
  } 
}


const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);