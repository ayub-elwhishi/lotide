const eqObjects = require("./eqObjects.js");

const assertObjectsEqual = function(arr1, arr2) {
  if (eqObjects(arr1, arr2)) {
    console.log("Assertion passed, objects equal.");
  } else {
    console.log("Assertion failed, objects unequal.");
  }
};

module.exports = assertObjectsEqual;
