const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {

  it("should return true for Objects({ a: '1', b: '2' }, { b: '2', a: '1' })", () => {
    assert.strictEqual(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }), true);
  });

  it("should return false for Objects({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' })", () => {
    assert.strictEqual(eqObjects({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' }), false);
  });

  it("should return true same kvp but diffirent order", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.strictEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });


  it("should return false for same values but extra property", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.strictEqual(eqObjects(shirtObject , longSleeveShirtObject),false);
  });

  it("should allow embedded arrays", () => {
    const shirtWithColorsObj = { colors: ["red", "green", "purple"], size: "medium" };
    const anotherShirtWithColorsObj = { colors: ["red", "green", "purple"], size: "medium" };
    assert.strictEqual(eqObjects(shirtWithColorsObj , anotherShirtWithColorsObj), true);
  });

});
