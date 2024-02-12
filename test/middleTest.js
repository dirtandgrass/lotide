const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("should return an empty array if given an empty array", () => {
    const emptyArray = [];
    const emptyMiddle = middle(emptyArray);
    assert.deepEqual(emptyMiddle, []);
  });

  it("should return an empty array if given a single element array", () => {
    const oneElementArray = ['1'];
    const oneElementMiddle = middle(oneElementArray);
    assert.deepEqual(oneElementMiddle, []);
  });

  it("should return an empty array if given a two element array", () => {
    const twoElementArray = [1, 2];
    const twoElementMiddle = middle(twoElementArray);
    assert.deepEqual(twoElementMiddle, []);
  });

  it("should return an array with a single element if given a three element array", () => {
    const threeElementArray = [1, 2, 3];
    const threeElementMiddle = middle(threeElementArray);
    assert.deepEqual(threeElementMiddle, [2]);
  });

  it("should return an array with a 2 elements if given a four element array", () => {
    const fourElementArray = [1, 2, 3, 4];
    const fourElementMiddle = middle(fourElementArray);
    assert.deepEqual(fourElementMiddle, [2, 3]);
  });

  it("should return an array with a two elements if given a six element array", () => {
    const sixElementArray = [1, 2, 3, 4, 5, 6];
    const sixElementMiddle = middle(sixElementArray);
    assert.deepEqual(sixElementMiddle, [3, 4]);
  });

});
