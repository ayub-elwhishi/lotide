const assertEqual = require('./assertEqual.js');

const countLetters = (str) => {
	let result = {}
	for (ch of str) {
		if (ch != " " && result[ch]) {
			result[ch]++
		}
		else if (ch != " ") {
			result[ch] = 1
		}
	}
	return result
}


console.log(countLetters("Hello, my name is Ayub"))

