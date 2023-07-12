const eqObjects = require("./eqObjects.js");

const assertObjectsEqual = function(obj1, obj2) {
  if (eqObjects(obj1, obj2)) {
    console.log("Assertion passed, objects equal.");
  } else {
    console.log("Assertion failed, objects unequal.");
  }
};

module.exports = assertObjectsEqual;
