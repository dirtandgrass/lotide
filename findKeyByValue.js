const assertEqual = require("./assertEqual");

const findKeyByValue = (object, value) => {
  for (const key in object) { // loop over each key in object
    if (object[key] === value) { // if key/property value matches value
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Seinfeld",
  drama: "Suits",
  reality: "Below Deck",
  fantasy: "Lost"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Suits"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Lost"), "fantasy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);