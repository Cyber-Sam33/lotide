const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} equals ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

findKeyByValue = function(obj, value){
objArray =  Object.keys(obj);

  for (let key of objArray){
    if (value === obj[key]){
      return key;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Star Trek"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));