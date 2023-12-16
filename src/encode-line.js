const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length <= 1) {
    return str;
  }

  let result = str.split('');

  for (let i = 2; i < result.length; i++) {
    if (i === 2 && result[0] === result[1]) {
      result[0] = 2;
    }

    if (result[i - 1] === result[i]) {
      result[i - 1] = (Number.isNaN(+result[i - 2]) ? 1 : +result[i - 2]) + 1;
      result[i - 2] = Number.isNaN(+result[i - 2]) ? result[i - 2] : null;
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine,
};
