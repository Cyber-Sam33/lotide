const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(arr) {
  let outputArr = [];
  let midIndex = "";
  if (arr.length <= 2) {
  } else if (arr.length % 2 !== 0) {
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

module.exports = middle;



