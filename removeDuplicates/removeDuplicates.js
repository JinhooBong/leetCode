/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Given an integer array nums sorted in NON-DECREASING ORDER,
 * remove the duplicates IN-PLACE such that each unique element
 * appears only ONCE. The RELATIVE ORDER of the elements should
 * be kept the SAME.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the FIRST PART of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of num should hold the final result. It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do NOT allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Example 1:
 * input: nums = [1, 1, 2]
 * output: 2, nums = [1, 2, _]
 *
 * Example 2:
 * input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 * output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
 */

var removeDuplicates = function(nums) {
  // if empty, return empty
  if(nums.length === 0) {
    return [];
  }
};

module.exports = removeDuplicates;