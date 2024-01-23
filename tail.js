const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};


// Test Case: Check the original array
const words = ["Yo Yo", "Ma", ",","Cellist", "Extraordinaire"];

const theTail = tail(words); // no need to capture the return value since we are not checking it

assertEqual(words.length, 5); // original array should still have 3 elements!

for (let i = 1; i < words.length; i++) {
  assertEqual(words[i], theTail[i - 1]);
}
