/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */

var subsets = function(nums) {
    // input: array
    // output: an array of arrays

    // iterate through the array in a recursive manner,
    // such that we're adding the arrays into the overall subset

    let subsets = [];

    let innerSubset = (nums, subsets, arr, start) => {
      let len = nums.length;

      subsets.push(Array.from(arr));

      if (start === len) return;

      for (let i = start; i < len; i++) {
        arr.push(nums[i]);
        innerSubset(nums, subsets, arr, i+1);
        arr.pop();
      }
    };

    innerSubset(nums, subsets, [], 0);

    return subsets;
};

module.exports = subsets;