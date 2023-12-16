const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }

  function fChangeKeyName(pathKey, oldNameKey, newNameKey) {
    pathKey[newNameKey] = pathKey[oldNameKey];
    delete pathKey[oldNameKey];
  }

  let rez = [];

  let splitted = domains.map((x) => x.split('.').map((y) => '.' + y));

  for (const item of splitted) {
    rez.push(...item);
  }

  let values = rez.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  rez = Array.from(new Set(rez.reverse()));
  let names = Array.from(rez);

  for (let i = 0; i < names.length; i++) {
    if (i === 0) {
      continue;
    }

    names[i] = names[i - 1] + rez[i];
    fChangeKeyName(values, rez[i], names[i]);
  }

  return values;
}

module.exports = {
  getDNSStats,
};
