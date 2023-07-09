const eqArrays = require('./eqArrays.js');

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Assertion passed, arrays equal.");
  } else {
    console.log("Assertion failed, arrays unequal.");
  }
}

module.exports = assertArraysEqual;
