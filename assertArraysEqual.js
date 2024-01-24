const eqArrays = require('./eqArrays');


const assertArraysEqual = function(actual, expected, message = null) {
  message = message ? '[' + message + '] ' : '';
  if (eqArrays(actual,expected)) {
    console.log(`✅ ${message} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ ${message} Assertion Failed: ${actual} !== ${expected}`);
  }

};
