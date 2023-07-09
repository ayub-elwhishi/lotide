function middle(arr) {
  if (arr.length < 3) return [];

  const half = Math.floor(arr.length / 2);
  if (arr.length % 2) {
    return [arr[half]];
  } else {
    return [arr[half - 1], arr[half]];
  }
}

module.exports = middle

/*
console.log(
middle([1, 2, 3]),
middle([1, 2, 3, 4, 5]),
middle([1, 2, 3, 4]),
middle([1, 2, 3, 4, 5, 6]),
middle([1]),
middle([1, 2])
)
*/
