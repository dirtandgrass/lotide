const assertArraysEqual = require("./assertArraysEqual");

const without = (sourceArray, itemsToRemove) => {
  const result = [];
  for (const item in sourceArray) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]


without(["lighthouse","labs","module 1","week 1", Math.PI][Math.PI,"lighthouse"]);
let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
without(testData, [1, 3, 5, 7, 9]);
assertArraysEqual(testData, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
