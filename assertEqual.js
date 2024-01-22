
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const test = function() {
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("Hello", "Hello");
  assertEqual("Hello", "Hel1o");
  // test with object to see it doesn't work
  assertEqual({"Hello":0}, {"Hello": 0});
};

/* eslint-env node */
module.exports = assertEqual;
