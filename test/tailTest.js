const assert = require("chai").assert;
const tail= require("../src/tail");

describe("#tail", () => {
	it("returns true for tail([1,2,3]) === [2,3]", () => {
		assert.deepEqual(tail([1,2,3]), [2,3]);
	})
	it("doesn't modify original array", () => {
		const arr = [1,2,3]
		tail(arr)
		assert.deepEqual(arr, [1,2,3])
	})
	it("returns true for tail([1]) === []", () => {
		assert.deepEqual(tail([1]), []);
	})
	it("returns true for tail([]) === []", () => {
		assert.deepEqual(tail([]), []);
	})
});
