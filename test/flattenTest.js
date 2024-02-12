

const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("should return the same array for a flat array", () => {
    assert.deepEqual(flatten([1,2,3]),[1,2,3]);
  });


  it("should return a flat array for a nested array", () => {
    assert.deepEqual(flatten([1,[2,3,[4]]]),[1,2,3,4]);
  });

  it("should return a flat array for a deeply nested array", () => {
    assert.deepEqual(
      flatten([1,2,3,[4,5,6],[7,[8,[9]]]]),[1,2,3,4,5,6,7,8,9]);
  });

});
