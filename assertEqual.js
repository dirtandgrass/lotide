const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual("Hello", "Hel1o");
assertEqual({"Hello":0}, {"Hello": 0});
