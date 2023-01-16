const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

console.log(middle([1]));
console.log(middle([1, 2]));
console.log('------------');

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log('------------');

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));