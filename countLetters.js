const assertEqual = require('./assertEqual');


const countLetters = function(string) {
  const isLetter = require('./isLetter');
  return string.split('').reduce((results, char) => { // loop over each character
    if (isLetter(char)) { // verify it is a letter
      results[char] = (results[char] || 0) + 1; // add to proper accumulator key
    }
    return results;
  }, {});
};

assertEqual(countLetters("Lighthouse in the house").h, 4);
assertEqual(countLetters("LHL").L, 2);
assertEqual(countLetters("LHL").h, undefined);
assertEqual(countLetters("Lighthouse 123")["1"], undefined);
assertEqual(countLetters("Lighthouse 💡")["💡"], undefined);