const assertArraysEqual = function(arr1, arr2) {
  if (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} equals ${arr2}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} does not equal ${arr2}`);

};

const eqArrays = function(arr1, arr2) {
  if (arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]) {
    return true;
  }
  return false;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} equals ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[.,?'/!:&();" ]/g, "");

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    //check if i is key in the results object.  If so, add indices to array or create new array
    results[letter]
      ? results[letter].push(i)
      : results[letter] = [i];
    // condition 
    // ? true
    // : false
  }
  return results;
};

assertArraysEqual(letterPositions('hello').e, [1]);
sentence1 = "So foul and fair a day; I have not seen!";
sentence2 = "Lighthouse in the house.";
console.log(letterPositions(sentence1));
console.log(letterPositions(sentence2));

module.exports = letterPositions;
