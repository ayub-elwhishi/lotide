// const assertArraysEqual = require('./assertArraysEqual.js');

function without(arr, exclude) {
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    if (exclude.includes(arr[i])) continue;
    final.push(arr[i]);
  }
  return final;
}

module.exports = without;

/*
assertArraysEqual(without([1, 2, 3], [1]), [2,3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

*/
