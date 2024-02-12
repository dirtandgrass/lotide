const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {

  it("Does not change size of the original array", () => {
    const words = ["Yo Yo", "Ma", ",","Cellist", "Extraordinaire"];
    tail(words);
    assert.strictEqual(words.length, 5);
  });

  it("should return a array withe the same vlues, minus the first element", () => {
    const words = ["Yo Yo", "Ma", ",","Cellist", "Extraordinaire"];
    const theTail = tail(words);
    assert.deepEqual(theTail, ["Ma", ",","Cellist", "Extraordinaire"]);
  });

  it("should return an empty array if given an empty array", () => {
    const emptyArray = [];
    const emptyTail = tail(emptyArray);
    assert.strictEqual(emptyTail.length, 0);
  });

  it("should return an empty array if given a single element array", () => {
    const oneElementArray = ['1'];
    const oneElementTail = tail(oneElementArray);
    assert.strictEqual(oneElementTail.length, 0);
  });

});
