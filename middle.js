const assertArraysEqual = function(arr1, arr2) {
  if (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} equals ${arr2}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} does not equal ${arr2}`);

};

const eqArrays = function(arr1, arr2) {
  if(arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]){
    return true;
  }
return false
};

const middle = function(arr) {
  let outputArr = [];
  let midIndex = "";
  if (arr.length <= 2) {
  } else if (arr.length % 2 !== 0){
//calulation to work out middle of array
    midIndex = Math.floor((arr.length / 2) + 1);
    outputArr.push(midIndex);
  } else {
    midIndex = (arr.length / 2);
    outputArr.push(midIndex);
    midIndex += 1;
    outputArr.push(midIndex);
  }
  return outputArr;
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log('------------');

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log('------------');

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

