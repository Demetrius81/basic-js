const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    return matrix
        .map((arr) =>
            arr
                .map((x) => (x === "^^" ? 1 : 0))
                .reduce((acc, item) => acc + item, 0)
        )
        .reduce((acc, item) => acc + item, 0);
}

module.exports = {
    countCats,
};
