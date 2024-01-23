const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};


// Test Case: Check the original array
const words = ["Yo Yo", "Ma", ",","Cellist", "Extraordinaire"];

const theTail = tail(words); // no need to capture the return value since we are not checking it

assertEqual(words.length, 5); // original array should still have 5 elements!
assertEqual(theTail.length, words.length - 1); // original array should still have 5 elements!
for (let i = 1; i < words.length; i++) { // check each element of theTail with the original array
  assertEqual(words[i], theTail[i - 1]);
}

// test empty array
const emptyArray = [];
const emptyTail = tail(emptyArray);
assertEqual(emptyTail.length, 0, 'test empty array');

// test 1 element array
const oneElementArray = ['1'];
const oneElementTail = tail(oneElementArray);
assertEqual(oneElementTail.length, 0,'test 1 element array');
