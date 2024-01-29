const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');

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