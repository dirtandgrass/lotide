const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');


// test same values/diff order
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// test same values but extra property
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject),false);

// test with an array
const shirtWithColorsObj = { colors: ["red", "green", "purple"], size: "medium" };
const anotherShirtWithColorsObj = { colors: ["red", "green", "purple"], size: "medium" };
assertEqual(eqObjects(shirtWithColorsObj , anotherShirtWithColorsObj), true);

// test with an array but different order
const anotherShirtWithColorsMismatchObj = { size: "medium", colors: ["red", "green", "blue"] };
assertEqual(eqObjects(shirtWithColorsObj , anotherShirtWithColorsMismatchObj), false);

// test with bug fixed (was false positive if ref type was equi [exited loop early])
const shirtWithColorsObj2 = { colors: ["red", "green", "purple"], size: "large" };
assertEqual(eqObjects(shirtWithColorsObj , shirtWithColorsObj2), false);


// test functions
const testF1 = {a:() => {}};
const testF2 = {a:() => {}};
assertEqual(eqObjects(testF1,testF2),true);

// test funcs with a property
testF2.a.testProperty = 5;
assertEqual(eqObjects(testF1,testF2),false);