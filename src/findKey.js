const findKey = (obj, callback) => {
	for (i in obj) {
		if (callback(obj[i])) {
			return i
		}
	}
	return undefined
}

module.exports = findKey
