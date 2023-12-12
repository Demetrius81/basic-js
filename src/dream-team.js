const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!members || !members.length) {
        return false;
    }
    return members
        .filter((name) => {
            if (
                name &&
                typeof name === "string" &&
                isNaN(+name) &&
                name.trim().length > 0
            ) {
                return true;
            }
            return false;
        })
        .map((name) => name.trim())
        .map((name) => name[0].toUpperCase())
        .sort()
        .join("");
}

module.exports = {
    createDreamTeam,
};
