const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (!date) {
        return "Unable to determine the time of year!";
    }

    if (typeof date === "object" && date.constructor.name === "Date") {
        let month = null;

        try {
            month = date.getUTCMonth();
        } catch {
            throw new Error("Invalid date!");
        }

        switch (true) {
            case month > 1 && month <= 4:
                return "spring";
            case month > 4 && month <= 7:
                return "summer";
            case month > 7 && month <= 10:
                return "autumn";
            case month === 11 || (month >= 0 && month < 2):
                return "winter";
            default:
                throw new Error("Invalid date!");
        }
    } else {
        throw new Error("Invalid date!");
    }
}

module.exports = {
    getSeason,
};
