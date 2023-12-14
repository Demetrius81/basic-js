const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
      this.isDirect = isDirect;
  }
  encrypt(messadeToEncript, key) {
      if (!messadeToEncript || !key) {
          throw new Error('Incorrect arguments!');
      }

      const keyArr = key.toUpperCase().repeat(Math.ceil(messadeToEncript.length / key.length)).split('');
      let k = 0;

      const result = messadeToEncript.toUpperCase().split('').map((x, i) => {
          if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
              let letter = x.charCodeAt() - 65;
              const delta = keyArr[i - k].charCodeAt() - 65
              letter = (delta + letter) >= 26 ? delta + letter - 26 + 65 : delta + letter + 65;
              return String.fromCharCode(letter);
          } else {
              k++
              return x;
          }
      });
      return this.isDirect ? result.join('') : result.reverse().join('');
  }
  decrypt(messageToDecript, key) {
      if (!messageToDecript || !key) {
          throw new Error('Incorrect arguments!');
      }

      const keyArr = key.toUpperCase().repeat(Math.ceil(messageToDecript.length / key.length)).split('');
      let k = 0;

      const result = messageToDecript.toUpperCase().split('').map((x, i) => {
          if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
              let letter = x.charCodeAt() - 65;
              const delta = keyArr[i - k].charCodeAt() - 65
              let letterprom = (letter - delta) < 0 ? letter - delta + 26 : letter - delta;
              
              letter = letterprom + 65;
              return String.fromCharCode(letter);
          } else {
              k++
              return x;
          }
      });
      return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
