const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const map = require('./map');
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const countOnly = require('./countOnly');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectEqual = require('./assertObjectEqual');

module.exports = {
  head,
  tail,
  middle,
  map,
  letterPositions,
  findKey,
  countOnly,
  assertEqual,
  assertArraysEqual,
  assertObjectEqual
};

// - `assertObjectEqual(...)`: compares two object for strict equality