const eqArrays = require("./eqArrays.js");

let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Assertion passed, arrays equal.");
  } else {
    console.log("Assertion failed, arrays unequal.");
  }
};

module.exports = assertArraysEqual;
