const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} equals ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
  if(arr1[0] === arr2[0] && arr1[1] === arr2[1] && arr1[2] === arr2[2]){
    return true;
  }
return false
};


const eqObjects = function(object1, object2) {

  const obj1keysArr = Object.keys(object1);
  const obj2keysArr = Object.keys(object1);

  
  if (obj1keysArr.length !== obj2keysArr.length){
    return false;
  }

  for (let val of obj1keysArr) {
    if(object1[val].isArray && object2[val].isArray){
      eqArrays(object1[val], object2[val]);
      } else if (object1[val] !== object2[val]) {
      return false;
      } 
    }
return true;
};
  

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };


// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true˜

// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false