/**
 * @param {number} x
 * @return {number}
 * 
 * Given a non-negative integer x, compute and return the square root of x.
 * 
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 * 
 * Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 * 
 * 
 */
var mySqrt = function(x) {
  let left = 1;
  let right = x;

  // the sqrt of 0 or 1 is itself
  if (x < 2) return x;

  // Use binary search to find the square root or the whole number closest to the square root
  while (left < right) {
    // find midpoint between left and right
    const mid = Math.floor((right + left) / 2);
    // if mid times itself is x, then it's the square root so return it
    if (mid * mid === x) return mid;
    // If mid squared is greater than x then the answer must be on the left half of mid
    else if (mid * mid > x) right = mid;
    // If mid squared is less than x then the answer must be on the right half of mid
    else left = mid + 1;
  }
  return left - 1;
};

module.exports = mySqrt;