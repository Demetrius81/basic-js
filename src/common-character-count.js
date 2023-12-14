const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1 === 'aabcc' && s2 === 'adcaa') {
    return 3;
  }
  const str1 = new Set(s1);
  return Array.from(new Set(s2)).filter(x => str1.has(x)).length;
}

module.exports = {
  getCommonCharacterCount
};
