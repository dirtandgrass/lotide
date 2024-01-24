const assertArraysEqual = require('./assertArraysEqual');

const middle = (source) => {
  const sourceLength = source.length;
  if (sourceLength <= 2) {
    return [];
  } else if (sourceLength % 2 === 0) { // two middle elements
    return [source[(sourceLength / 2) - 1], source[(sourceLength / 2)]];
  } else {
    return [source[Math.floor(sourceLength / 2)]];
  }
};

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);