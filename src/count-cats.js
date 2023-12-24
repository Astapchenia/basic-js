const { NotImplementedError } = require('../extensions/index.js');

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
  let catsCount = 0;

   for (let i = 0; i < matrix.length; i += 1) {
    const secondArray = matrix[i];

    for (let j = 0; j < secondArray.length; j += 1) {
      if (secondArray[j] === '^^') {
        catsCount += 1;
      }
    }
   }
  return catsCount;
}

module.exports = {
  countCats
};
