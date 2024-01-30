
const assertArraysEqual = require('./assertArraysEqual');

const map = (array, mutator) => {

  // ensure input is valid
  if (!Array.isArray(array)) throw new Error("First argument must be an array");
  if (typeof mutator !== 'function') throw new Error("Second argument must be a function");


  const result = []; // new, empty array
  // loop through each element in the input array
  for (const el of array) {
    result.push(mutator(el)); // mutate each element and push to new array
  }
  return result;
};

const words = ["ground", "control", "to", "major", "tom"];


const result = map(words, word => word[0]);


assertArraysEqual(result, ['g', 'c', 't', 'm', 't']); // should pass
//assertArraysEqual(result, ['g', 'c', 't', 'm']); // should fail
