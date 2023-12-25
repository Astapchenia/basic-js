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

  encrypt(message, keyword) {
    if (!message || !keyword) {
      throw new Error('Invalid input. Message and keyword are required.');
    }

    message = message.toUpperCase();
    keyword = keyword.toUpperCase();

    const encrypted = [];
    let keywordIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (char >= 'A' && char <= 'Z') {
        const shift = keyword[keywordIndex % keyword.length].charCodeAt(0) - 65;
        const encryptedChar = String.fromCharCode(
          ((char.charCodeAt(0) - 65 + shift) % 26) + 65
        );
        encrypted.push(encryptedChar);
        keywordIndex++;
      } else {
        encrypted.push(char);
      }
    }

    return this.isDirect ? encrypted.join('') : encrypted.reverse().join('');
  }

  decrypt(encryptedMessage, keyword) {
    if (!encryptedMessage || !keyword) {
      throw new Error('Invalid input. Encrypted message and keyword are required.');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    keyword = keyword.toUpperCase();

    const decrypted = [];
    let keywordIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];

      if (char >= 'A' && char <= 'Z') {
        const shift = keyword[keywordIndex % keyword.length].charCodeAt(0) - 65;
        const decryptedChar = String.fromCharCode(
          ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65
        );
        decrypted.push(decryptedChar);
        keywordIndex++;
      } else {
        decrypted.push(char);
      }
    }

    return this.isDirect ? decrypted.join('') : decrypted.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
