const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return true for 2 equivalent arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false for 2 non-equivalent arrays", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
  });

  it("should return true for 2 equivalent arrays with nested arrays", () => {
    assert.strictEqual(eqArrays([1, 2,[ 3, 4]], [1, 2, [ 3, 4]]), true);
  });

  it("should return false for 2 non-equivalent arrays with nested arrays", () => {
    assert.strictEqual(eqArrays([1, 2,[ 3, 4]], [1, 2, [ 4, 5]]), false);
  });

});
