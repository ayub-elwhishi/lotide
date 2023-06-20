// const assertArraysEqual = require('./assertArraysEqual.js');

function flatten(arr) {
  let final = [];
  for (const i of arr) {
    if (Array.isArray(i)) {
      for (const j of i) {
        final.push(j);
      }
    } else {
      final.push(i);
    }
  }
  return final;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
