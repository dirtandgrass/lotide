
const isLetter = require('../lotide/isLetter');

const letterPositions = function(string) {

  if (typeof string !== 'string') {
    throw new Error('input must be a string');
  }

  const results = {};
  const inputCharacters = string.split('');

  for (let i = 0; i < inputCharacters.length; i++) {
    const char = inputCharacters[i];
    if (isLetter(char)) {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;
