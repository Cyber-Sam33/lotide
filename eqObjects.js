const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} equals ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} does not equal ${expected}`);
  }
};

const eqObjects = function(object1, object2) {

  const obj1keysArr = Object.keys(object1);
  const obj2keysArr = Object.keys(object1);

  if (obj1keysArr.length !== obj2keysArr.length){
    return false;
  }

  for (let val of obj1keysArr) {
  if (object1[val] !== object2[val]){
    return false;
  }
  return true;
}
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };


console.log(eqObjects(shirtObject , anotherShirtObject)); // => true˜

assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);