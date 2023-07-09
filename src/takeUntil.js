const takeUntil = function(array, callback) {
  const result = []
  for (i of array) {
	  if (callback(i)) {
		return result
	  }
	result.push(i)
  }
}

module.exports = takeUntil
