
const middle = (source) => {
  if (!Array.isArray(source)) {
    throw new Error("Invalid input: source must be an array");
  }
  const sourceLength = source.length;
  if (sourceLength <= 2) {
    return [];
  } else if (sourceLength % 2 === 0) { // two middle elements
    const middleIndex = sourceLength / 2;
    return [source[middleIndex - 1], source[middleIndex]];
  } else {
    return [source[Math.floor(sourceLength / 2)]];
  }
};

module.exports = middle;
