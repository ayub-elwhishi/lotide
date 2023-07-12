const takeUntil = function(array, callback) {
  const result = [];
  for (const i of array) {
    if (callback(i)) {
      return result;
    }
    result.push(i);
  }
};

module.exports = takeUntil;
