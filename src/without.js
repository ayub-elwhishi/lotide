let without = function(arr, exclude) {
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    if (exclude.includes(arr[i])) continue;
    final.push(arr[i]);
  }
  return final;
};

module.exports = without;
