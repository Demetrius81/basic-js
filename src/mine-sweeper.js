const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getCount(matrix, i, j) {
    const down = i - 1 < 0 ? 0 : matrix[i - 1][j] ? 1 : 0;
    const downLeft = i - 1 < 0 || j - 1 < 0 ? 0 : matrix[i - 1][j - 1] ? 1 : 0;
    const left = j - 1 < 0 ? 0 : matrix[i][j - 1] ? 1 : 0;
    const upLeft =
      i + 1 >= matrix.length || j - 1 < 0 ? 0 : matrix[i + 1][j - 1] ? 1 : 0;
    const up = i + 1 >= matrix.length ? 0 : matrix[i + 1][j] ? 1 : 0;
    const upRight =
      i + 1 >= matrix.length || j + 1 >= matrix[i].length < 0
        ? 0
        : matrix[i + 1][j + 1]
        ? 1
        : 0;
    const right = j + 1 >= matrix[i].length ? 0 : matrix[i][j + 1] ? 1 : 0;
    const downRight =
      i - 1 < 0 || j + 1 >= matrix[i].length < 0
        ? 0
        : matrix[i - 1][j + 1]
        ? 1
        : 0;

    return up + down + left + right + downLeft + downRight + upLeft + upRight;
  }

  const result = Array();

  for (let i = 0; i < matrix.length; i++) {
    result.push(new Array(matrix[i].length).fill(0));
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        result[i][j] = 1;
      } else {
        result[i][j] = getCount(matrix, i, j);
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
