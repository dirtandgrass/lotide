const isLetter = function(char) {

  if (typeof char !== 'string' || char.length > 1) { // verify it is a (single) character
    return false;
  }

  // from https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
  return RegExp(/^\p{L}/, 'u').test(char);
};

module.exports = isLetter;