const countLetters = (str) => {
  let result = {};
  for (const ch of str) {
    if (ch !== " " && result[ch]) {
      result[ch]++;
    } else if (ch !== " ") {
      result[ch] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
