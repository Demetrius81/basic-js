const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // const repeatTimes = options.repeatTimes ?? 1;
  // const separator = options.separator ?? '+';
  // const addition = options.addition ?? (!str ? `${options.addition}` : '');
  // const additionRepeatTimes = options.additionRepeatTimes ?? 0;
  // const additionSeparator = options.additionSeparator ?? '|';
  const concat = (str, count = 0, separator) =>
    count === 0
      ? str
        ? str
        : `${str}`
      : new Array(count).fill(str ? str : `${str}`).join(separator);

  return concat(
    str +
      concat(
        options.addition ?? (!str ? `${options.addition}` : ''),
        options.additionRepeatTimes ?? 0,
        options.additionSeparator ?? '|'
      ),
    options.repeatTimes ?? 1,
    options.separator ?? '+'
  );
}

module.exports = {
  repeater,
};
