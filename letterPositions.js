const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

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

const test1Result = letterPositions("Lighthouse in the house");
assertEqual(test1Result['L'].length, 1); // Lighthouse in the house
assertArraysEqual(test1Result['L'], [0]);
assertArraysEqual(test1Result['i'], [1, 11]);
assertArraysEqual(test1Result['e'], [ 9, 16, 22 ]);
