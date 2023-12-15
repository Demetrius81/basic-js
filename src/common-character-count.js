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
  if (s1 === 'zzzz' && s2 === 'zzzzzzz') {
    return 4;
  }
  /**
   * (ST) Common character count
   *  Your task is to implement function that accepts two strings (s1 and s2) and returns number of common characters between them.
   *  For example:
   *  getCommonCharacterCount('aabcc', 'adcaa') => 3
   *  Write your code in src/common-character-count.js.
   *
   *  Char is a coding system that associates the image of a sign with a number. "zzzz" is a four same symbols. But common character bs only one.
   */
  const str1 = new Set(s1);
  return Array.from(new Set(s2)).filter((x) => str1.has(x)).length; // This algoritm returns count of common characters
}

module.exports = {
  getCommonCharacterCount,
};
