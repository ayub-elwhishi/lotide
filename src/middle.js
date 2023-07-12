let middle = function(arr) {
  if (arr.length < 3) return [];

  const half = Math.floor(arr.length / 2);
  if (arr.length % 2) {
    return [arr[half]];
  } else {
    return [arr[half - 1], arr[half]];
  }
};

module.exports = middle;
