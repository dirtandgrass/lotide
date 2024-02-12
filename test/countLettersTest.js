const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("should return 2 for countLetters('LHL').L", () => {
    assert.strictEqual(countLetters("LHL").L, 2);
  });

  it("should return 1 for countLetters('LHL').H", () => {
    assert.strictEqual(countLetters("LHL").H, 1);
  });

  it("should return undefined for LHL.h", () => {
    assert.strictEqual(countLetters("LHL").h, undefined);
  });

  it("should return undefined for non-letters", () => {
    assert.strictEqual(countLetters("Lighthouse 123")["1"], undefined);
    assert.strictEqual(countLetters("Lighthouse 💡")["💡"], undefined);
  });

  it("should return 1 for ë", () => {
    assert.strictEqual(countLetters("ëek!").ë, 1);
  });


});
