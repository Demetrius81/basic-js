const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = [];

    if (arr.length >= 0 && arr.constructor.name === 'Array') {
      depth++;
      let currentDepth = [];
      arr.forEach((element) => {
        currentDepth.push(this.calculateDepth(element) + 1);
      });
      const maxDepth = Math.max(...currentDepth);
      return depth > maxDepth ? depth : maxDepth;
    } else {
      return depth;
    }
  }
}

module.exports = {
  DepthCalculator,
};
