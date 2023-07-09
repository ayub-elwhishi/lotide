const findKeyByValue = (obj, val) => {
  for (item in obj) if (obj[item] == val) return item;
  return undefined;
};

module.exports = findKeyByValue
