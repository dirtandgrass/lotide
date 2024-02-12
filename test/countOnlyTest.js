const countOnly = require('../countOnly');
const assert = require('chai').assert;




const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const vip = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };



describe("#countOnly", () => {
  it("should return 1 for countOnly(firstNames, vip).Jason", () => {
    assert.strictEqual(countOnly(firstNames, vip)["Jason"], 1);
  });

  it("should return undefined for countOnly(firstNames, vip).Karima", () => {
    assert.strictEqual(countOnly(firstNames, vip)["Karima"], undefined);
  });

  it("should return 2 for countOnly(firstNames, vip).Fang", () => {
    assert.strictEqual(countOnly(firstNames, vip)["Fang"], 2);
  });

  it("should return undefined for countOnly(firstNames, vip).Agouhanna", () => {
    assert.strictEqual(countOnly(firstNames, vip)["Agouhanna"], undefined);
  });
});
