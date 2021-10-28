/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 */
var searchInsert = function(nums, target) {
  // iterate through the array
  // if the target is found, return that index

  // if the target is not found, find where it would be placed
  // if target is < nums[0] return 0
  // if target is > nums[length] return length

  if (target < nums[0]) {
    return 0;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target && nums[i - 1] < target) {
      return i;
    }
  }
};

module.exports = searchInsert;