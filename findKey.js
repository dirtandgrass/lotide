const assertEqual = require('./assertEqual');

const findKey = (object, predicate) => {

  if (typeof object !== 'object') throw new Error("First argument must be an object");
  if (typeof predicate !== 'function') throw new Error("Second argument must be a function");

  for (const [key, value] of Object.entries(object)) { // destructure => [key, value]
    if (predicate(value)) return key; // if the predicate affirmed return the key
  }
  // return undefined
};

const underTest = {
  "Blue Hill": { stars: 1, city:"New York" },
  "Akaleri":   { stars: 3, city:"Ottawa" },
  "noma":      { stars: 2, city:"Vancouver" },
  "elBulli":   { stars: 3, city:"Toronto" },
  "Ora":       { stars: 2, city:"Montreal" },
  "Akelarre":  { stars: 3, city:"Chicago" },
};

const t1 = findKey(underTest, x => x.stars === 2); // => "noma"
assertEqual(t1, "noma");

const t2 = findKey(underTest, x => x.stars > 5); // => undefined
assertEqual(t2, undefined);

const t3 = findKey(underTest, x => x.city.toLowerCase().includes("on")); // => "Toronto"
assertEqual(t3, "elBulli");