/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 
 * 
 * A subarray is a contiguous part of an array.
 */
var maxSubArray = function(nums) {
    let result = -10000;
    let sum = -10000000;

    for (let i = 0; i < nums.length; i++) {
      sum = Math.max(nums[i], sum + nums[i]);
      result = Math.max(result, sum);
    }

    return result;
};

module.exports = maxSubArray;