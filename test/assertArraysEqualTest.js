const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3, 4, 5, "6"], [1, 2, 3, 4, 5, 6]);
assertArraysEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);