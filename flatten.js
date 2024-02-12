

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
