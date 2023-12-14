const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = n.toString().split('');
  const count = arrN.length;
  let max = -Infinity;
  for (let i = 0; i < count; i++) {
    let tempArr = Array.from(arrN);
    tempArr.splice(i, 1);
    const temp = +tempArr.join('');
    if (max < temp) {
      max = temp;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
