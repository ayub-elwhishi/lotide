const assert = require("chai").assert;
const eqArrays = require("../src/eqArrays");

describe("#eqArrays", () => {
  it("returns eqArrays([1, 2, 3], [1, 2, 3]) as true", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns eqArrays([1, 2, 3], [3, 2, 1]) as false", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it('eqArrays(["1", "2", "3"], ["1", "2", "3"]) => true', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('eqArrays(["1", "2", "3"], ["1", "2", 3]) => false', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  it('eqArrays([], []) => true', () => {
    assert.isTrue(eqArrays([], []))
  });
});
