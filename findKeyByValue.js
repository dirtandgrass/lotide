
const findKeyByValue = (object, value) => {
  for (const key in object) { // loop over each key in object
    if (object[key] === value) { // if key/property value matches value
      return key;
    }
  }
};

module.exports = findKeyByValue;
