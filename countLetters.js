const assertEqual = require('../lotide/assertEqual');

const isLetter = function(char) {

  if (typeof char !== 'string' || char.length > 1) { // verify it is a (single) character
    return false;
  }

  // from https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
  return RegExp(/^\p{L}/, 'u').test(char);
}

const countLetters = function(string) {

  return string.split('').reduce((results, char) => { // loop over each character
    if(isLetter(char)) { // verify it is a letter
      results[char] = (results[char] || 0) + 1; // add to proper accumulator key
    }
    return results;
  }, {})
}

assertEqual(countLetters("Lighthouse in the house").h, 4);
assertEqual(countLetters("LHL").L, 2);
assertEqual(countLetters("LHL").h, undefined);
assertEqual(countLetters("Lighthouse 123")["1"], undefined);
assertEqual(countLetters("Lighthouse 💡")["💡"], undefined);