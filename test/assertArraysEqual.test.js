const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, [3, 4]], [1, 2, [3, 4]]);
assertArraysEqual([1, 2, [3, 4]], [1, 2, [4, 5]]);
assertArraysEqual([1, 2, [3, 4]], [1, 2, 3]);