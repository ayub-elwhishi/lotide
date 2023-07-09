const eqArrays = require("./eqArrays.js");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // check if props similar from object2 => object1
  for (const prop in object2) {
    if (!object1[prop]) {
      return false;
    }
  }
  for (const prop in object1) {
    if (object2[prop]) {
      if (
        Array.isArray(object1[prop]) &&
				!eqArrays(object1[prop], object2[prop])
      ) {
        return false;
      } else if (
        !Array.isArray(object1[prop]) &&
				object1[prop] !== object2[prop]
      ) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
