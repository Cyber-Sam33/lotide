const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it(`returns '["Lighthouse", "Labs"]' for '["Hello", "Lighthouse", "Labs"]'`, () => {
    const str = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(str, ["Lighthouse", "Labs"]);
  });

  it(`returns '[2, 3, 4, 5]' for '[1, 2, 3, 4, 5]'`, () => {
    const str = tail([1, 2, 3, 4, 5]);
    assert.deepEqual(str, [2, 3, 4, 5]);
  });

});



// const result = tail(["Hello", "Lighthouse", "Labs"]);


// console.log(tail([1, 2, 3, 4, 5]));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));//this creates a new tail array but leaves the original intact
// assertEqual(words.length, 3);// confirms original array still has 3 elements