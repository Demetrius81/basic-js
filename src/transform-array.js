const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let result = [...arr];

    for (let i = 0; i < result.length; i++) {
        switch (result[i]) {
            case "--discard-next":
                if (i + 1 >= result.length) {
                    result[i] = null;
                } else {
                    result[i + 1] = null;
                    result[i] = null;
                }
                break;
            case "--discard-prev":
                if (i - 1 < 0) {
                    result[i] = null;
                } else {
                    result[i - 1] = null;
                    result[i] = null;
                }
                break;
            case "--double-next":
                result[i] = i + 1 >= result.length ? null : result[i + 1];
                break;
            case "--double-prev":
                result[i] = i - 1 < 0 ? null : result[i - 1];
                break;
            default:
                break;
        }
    }

    return result.filter((x) => x);
}

module.exports = {
    transform,
};
