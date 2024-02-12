

const countLetters = function(string) {
  const isLetter = require('./isLetter');
  return string.split('').reduce((results, char) => { // loop over each character
    if (isLetter(char)) { // verify it is a letter
      results[char] = (results[char] || 0) + 1; // add to proper accumulator key
    }
    return results;
  }, {});
};


module.exports = countLetters;