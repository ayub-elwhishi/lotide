const eqArrays = require("./eqArrays.js");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
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

/*

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = {
	size: "medium",
	color: "red",
	sleeveLength: "long",
};
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
	size: "medium",
	colors: ["red", "blue"],
};
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = {
	size: "medium",
	colors: ["red", "blue"],
	sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
*/

module.exports = eqObjects;
