const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  // get kvp for both objects
  const entries1 = Object.entries(object1);
  const entries2 = Object.entries(object2);
  // fail fast if different number of keys
  if (entries1.length !== entries2.length) {
    return false;
  }

  // loop through keys in object1 and compare
  for (const [key, value] of entries1) {
    if (!object2[key]) return false; // key does not exist in object2

    if (object2[key] !== value) {
      // not the same,
      // 1. two different types
      // 2. unequal primitives
      // 3. matching reference type

      if (typeof object2[key] !== typeof value) return false; // 1. different types

      // if primitives
      if (typeof value !== 'object' && typeof value !== 'function') return false; //2. unequal primitives

      // TODO: check if object
      if (typeof object2[key] === 'object' && typeof value === 'object') { // if it is an object

        // need to check if it is an array
        if (Array.isArray(value) && !eqArrays(object2[key], value)) {
          return false;
        } else { // otherwise it is an object
          if (!eqObjects(object2[key], value)) return false;
        }
      }

      // check member functions
      if (typeof value === 'function') {
        // adapted from:
        // https://stackoverflow.com/questions/9817629/how-do-i-compare-2-functions-in-javascript
        // if it is the exact same (code) function
        if (object2[key].toString() !== value.toString()) return false;
      }

    }
  }
  return true;
};


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject),false);

const shirtWithColorsObj = { colors: ["red", "green", "purple"], size: "medium" };
const anotherShirtWithColorsObj = { colors: ["red", "green", "purple"], size: "medium" };
assertEqual(eqObjects(shirtWithColorsObj , anotherShirtWithColorsObj), true);

const anotherShirtWithColorsMismatchObj = { size: "medium", colors: ["red", "green", "blue"] };
assertEqual(eqObjects(shirtWithColorsObj , anotherShirtWithColorsMismatchObj), false);

// test with bug fixed
const shirtWithColorsObj2 = { colors: ["red", "green", "purple"], size: "large" };
assertEqual(eqObjects(shirtWithColorsObj , shirtWithColorsObj2), false);



const shirtWithSizePrices = { size: {medium:17,large:17.25,xl:17.5, sm: 16.75}, colors: ["red", "green", "blue"] };
const anotherShirtWithSizePrices = { size: {medium:17,large:17.25,xl:17.5, sm: 16.75}, colors: ["red", "green", "blue"] };
assertEqual(eqObjects(shirtWithSizePrices , anotherShirtWithSizePrices), true);

const anotherShirtWithMoreSizePrices = { size: {medium:17,large:17.25,xl:17.5, sm: 16.75, xs: 16.5}, colors: ["red", "green", "blue"] };
assertEqual(eqObjects(shirtWithSizePrices , anotherShirtWithMoreSizePrices), false);

const myFunc = {a:() => {}};
const anotherFunc = {a:(a) => {
  return 1;
}};
const myFuncAgain = {a:() => {}};

assertEqual(eqObjects(myFunc , myFuncAgain), true);
assertEqual(eqObjects(myFunc , anotherFunc), false);