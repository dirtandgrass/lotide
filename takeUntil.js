const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = (array, callback) => {

  if (!Array.isArray(array)) throw new Error("First argument must be an array");
  if (typeof callback !== 'function') throw new Error("Second argument must be a function");
  const result = [];
  for (const el of array) {
    if (callback(el)) {
      return result;
    }
    result.push(el);
  }
  return result;

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);