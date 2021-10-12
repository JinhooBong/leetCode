/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return
 *  -1 if num is lower than the guess number
 *  1 if num is higher than the guess number
 *  otherwise return 0
 *  var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {

  // input: n, a number that represents the range
  // output: the target value

  // if n = 1, return 1
  if (n === 1)  return 1;


  // if guess returns -1, reutrn 1, returns 0

  let mid = Math.floor(n / 2);

  let low = 1;
  let limit = n;

  while (low <= limit) {
    let mid = low + (high - low) / 2;
    let result = guess(mid);

    if (result === 0) {
      return mid;
    } else if (result < 0) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
    return -1 ;
  }

};

module.exports = guessNumber;