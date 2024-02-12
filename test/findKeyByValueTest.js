const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe("#findKeyByValue", () => {
  it("should return drama for findKeyByValue(bestTVShowsByGenre, 'Suits')", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Seinfeld",
      drama: "Suits",
      reality: "Below Deck",
      fantasy: "Lost"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Suits"), "drama");
  });

  it("should return fantasy for findKeyByValue(bestTVShowsByGenre, 'Lost')", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Seinfeld",
      drama: "Suits",
      reality: "Below Deck",
      fantasy: "Lost"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Lost"), "fantasy");
  });

  it("should return undefined for findKeyByValue(bestTVShowsByGenre, 'That '70s Show')", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Seinfeld",
      drama: "Suits",
      reality: "Below Deck",
      fantasy: "Lost"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
