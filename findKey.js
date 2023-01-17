const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} equals ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

const findKey = function(obj, callback) {

  for (item in obj) {
    // console.log("item = ", item);
    // console.log("callback item = ", callback(obj[item]));
    // console.log("---------------"); 
    if (callback(obj[item])) {
      return item;
    }
  }
};

// const results1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// console.log(results1);

module.exports = findKey;