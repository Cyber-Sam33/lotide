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

  const obj1KeysArr = Object.keys(object1);
  const obj2keysArr = Object.keys(object2);

  if (obj1KeysArr.length !== obj2keysArr.length) return false;
  
  for (let val of obj1KeysArr) {
    //check keys for equality
    if (!obj2keysArr.includes(val)) return false;
    
    if (Array.isArray(object1[val])) {
      if (!eqArrays(object1[val], object2[val])) return false;
      //compare primative variables
    } else {
        //check keys prim vals are equal 
        if (object1[val] !== object2[val]) return false;
      }
    }
    return true;
  };

//VietTRAN
// const eqObjects = (object1, object2) => {
//   const objArr1 = Object.keys(object1);
//   const objArr2 = Object.keys(object2);

//   if (objArr1.length !== objArr2.length) return false;

//   for (let ele of objArr1) {
//     // Check the keys to see if they are equalled
//     if (!objArr2.includes(ele)) return false;

//     // You are here
//     if (Array.isArray(object1[ele])) {
//       if (!eqArrays(object1[ele], object2[ele])) return false;
//     // Compare the primitives
//     } else {
//       if (object1[ele] !== object2[ele]) return false;
//     }
//   }

//   return true;
// };
//VietTran END

//Ester
// const eqObjects = (object1, object2) => {
//   if (Object.keys(object1).length !== Object.keys(object2).length) return false;

//   for (const key in object1) {
//     if (!object2[key]) return false;
//     if (!eqArrays(object1[key], object2[key])) return false;
//   }

//   return true;
// };
//ester end





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