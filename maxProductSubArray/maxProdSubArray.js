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
  // init max
  let maxProduct = Math.max(...nums);
  let currMin = 1;
  let currMax = 1;

  // iterate through the array 
  for (const n of nums) {
    // if n is 0, we want to reset bc any product * 0 would be 0
    if (n === 0) {
       currMin = 1;
       currMax = 1;
    } 

    // we calc what the product of the array including current n is
    let temp = currMax * n;

    // we set max to be either including n
    // if its negative, times it by currMin,
    // or case where n is the biggest number
    currMax = Math.max(temp, n * currMin, n);
    currMin = Math.min(temp, n * currMin, n);
    
    // then we set maxProduct to be the max between what we set initially, vs current Max
    maxProduct = Math.max(maxProduct, currMax);    
  }
  
  // return maxProduct
  return maxProduct;
};

module.exports = maxProduct;