
// does not handle nested object
const eqArrays = function(actual, expected) {
  // ensure same length
  if (actual.length !== expected.length) {
    return false;
  }
  // check each element for equivalence
  for (const index in actual) {
    // if it is an array, check that array for equavalence
    if (Array.isArray(actual[index]) && Array.isArray(expected[index])) {
      if (!eqArrays(actual[index], expected[index])) {
        return false;
      }
    } else {
      // else check for equivalent values
      // for objects, will fail if not the same object
      if (actual[index] !== expected[index]) {
        return false;
      }
    }
  }
  return true;
};


module.exports = eqArrays;
