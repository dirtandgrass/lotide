const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return an object with the letter positions for each letter in the input string", () => {
    const test1Result = letterPositions("Lighthouse in the house");
    assert.strictEqual(test1Result['L'].length, 1); // Lighthouse in the house
    assert.deepEqual(test1Result['L'], [0]);
    assert.deepEqual(test1Result['i'], [1, 11]);
    assert.deepEqual(test1Result['e'], [ 9, 16, 22 ]);
  });
});
