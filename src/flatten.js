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

module.exports = flatten
