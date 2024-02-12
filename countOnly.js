


const countOnly = (allItems, itemsToCount) => {
  return allItems.reduce((results, item) => { // loop through all items
    if (itemsToCount[item]) { // if item appears in itemsToCount and is truthy
      results[item] = (results[item] || 0) + 1; // create a key for the item if needed, increment count
    }
    return results; // return accumulator for next iteration
  }, {}); // init accumulator is empty
};



module.exports = countOnly;