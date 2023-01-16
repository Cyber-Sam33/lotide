const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result.length, 2);

console.log(tail([1, 2, 3, 4, 5]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));//this creates a new tail array but leaves the original intact
assertEqual(words.length, 3);// confirms original array still has 3 elements