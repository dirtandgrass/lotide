
const assertEqual = function(actual, expected, message = null) {
  message = message ? '[' + message + '] ' : '';
  if (actual === expected) {
    console.log(`✅ ${message} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ ${message} Assertion Failed: ${actual} !== ${expected}`);
  }

};


/* eslint-env node */
module.exports = assertEqual;
