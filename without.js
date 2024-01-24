const assertArraysEqual = require("./assertArraysEqual");

const without = (sourceArray, itemsToRemove) => {
  if (!Array.isArray(sourceArray) || !Array.isArray(itemsToRemove)) {
    throw new Error("Invalid input: sourceArray and itemsToRemove must be arrays");
  }

  const result = [];
  for (const item of sourceArray) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

assertArraysEqual(without([1, 2, 3], [1]),[2,3]);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);

assertArraysEqual(without(
  ["lighthouse","labs","module 1","week 1", Math.PI],
  [Math.PI,"lighthouse"]),["labs","module 1","week 1"]);

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
without(testData, [1, 3, 5, 7, 9]);
assertArraysEqual(testData, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
