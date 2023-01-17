const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3])[0], 2);
  });

  it("returns '3' for ['1, 2, 3, 4, 5']", () => {
    assert.strictEqual(middle(['1', '2', '3', '4', '5'])[0], '3');
  });

  it("returns '1' for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

});


// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log('------------');
// console.log('------------');
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));