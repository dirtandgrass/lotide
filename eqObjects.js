const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  const entries1 = Object.entries(object1);
  const entries2 = Object.entries(object2);

  if (entries1.length !== entries2.length) {
    return false;
  }

  for (const [key, value] of entries1) {
    if (!object2[key]) {
      return false;
    }
    if (object2[key] !== value) {
      // TODO: check if object
      if (typeof object2[key] === 'object' && typeof value === 'object') { // if it is an object
        // need to check if it is an array
        if (Array.isArray(object2[key]) && Array.isArray(value)) {
          return eqArrays(object2[key], value);
        } else { // otherwise it is an object (not sure if this will work for other types that are objects, eg functions)
          return eqObjects(object2[key], value);
        }
      }
      return false; // if not an object, primitive ==> false
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
const anotherShirtWithColorsObj = { size: "medium", colors: ["red", "green", "purple"] };
assertEqual(eqObjects(shirtWithColorsObj , anotherShirtWithColorsObj), true);

const anotherShirtWithColorsMismatchObj = { size: "medium", colors: ["red", "green", "blue"] };
assertEqual(eqObjects(shirtWithColorsObj , anotherShirtWithColorsMismatchObj), false);
