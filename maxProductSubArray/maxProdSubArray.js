/**
 * Given an integer array nums, find a contiguous non-empty
 * subarray within the array that has the largest product, and
 * return the product.
 * 
 * It is guaranteed that the answer will fit in a 32-bit integer.
 * 
 * A subarray is a contiguous subsequence of the array.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  // if our values are all positive, it's always going to be increasing thus, the max would be a product of all values

  // if all values are negative, sign wil alternate


  // init max
  let res = Math.max(...nums);
  let currMin = 1;
  let currMax = 1;

  for (const n of nums) {
    if (n === 0) {
       currMin = 1;
       currMax = 1;
    } 
    let temp = currMax * n;
    currMax = Math.max(n * currMax, n * currMin, n);
    currMin = Math.min(temp, n * currMin, n);
    res = Math.max(res, currMax);    
  }
  
  return res;
};

module.exports = maxProduct;