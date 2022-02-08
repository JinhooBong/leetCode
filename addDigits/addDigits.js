/**
 * @param {number} num
 * @return {number}
 * 
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 * 
 */
var addDigits = function(num) {
  // create sum variable
  // take each digit from num variable
  // and then add it to sum variable

  let sum = 0;

  // if number is one digit, sum will be the number
  if (num < 10) {
    return num;
  } else {
    sum = helper(num);
    while (sum > 10) {
      sum = helper(sum);
    }
  }

  return sum;
};

let helper = (num) => {
  let sum = 0;

  while (num >= 10) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  sum += num; 
  return sum;
}

module.exports = addDigits;