// const assertEqual = require('./assertEqual');

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const vip = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };


const countOnly = (allItems, itemsToCount) => {
  return allItems.reduce((results, item) => { // loop through all items
    if (itemsToCount[item]) { // if item appears in itemsToCount and is truthy
      results[item] = (results[item] || 0) + 1; // create a key for the item if needed, increment count
    }
    return results; // return accumulator for next iteration
  }, {}); // init accumulator is empty
};

// const result1 = countOnly(firstNames, vip);

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;