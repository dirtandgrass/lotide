// const assertArraysEqual = require("./assertArraysEqual");

const flatten = (array, target = []) => {
  for (let element of array) {
    if (Array.isArray(element)) { // need to flatten subarray
      flatten(element, target); // call flatten with subarray
    } else {
      target.push(element);
    }
  }
  return target;
};


module.exports = flatten;

// assertArraysEqual(flatten([1,2,3]),[1,2,3]);
// assertArraysEqual(flatten([1,[2,3,[4]]]),[1,2,3,4]);
// assertArraysEqual(
//   flatten([1,2,3,[4,5,6],[7,[8,[9]]]]),[1,2,3,4,5,6,7,8,9]);
