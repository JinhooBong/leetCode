/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 *
 * Example 1:
 * input: nums = [2, 7, 11, 15], target = 9
 * output: [0, 1]
 * (because nums[0] + nums[1] == 9)
 *
 * Example 2:
 * input: nums = [3, 2, 4], target = 6
 * output: [1, 2]
 *
 * Example 3:
 * input: nums = [3, 3], target = 6
 * output: [0, 1]
 */

 let twoSum = function(nums, target) {
  // TO-DO: implement me

  // variable to store indices
  let sumIndex = [];

  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // for current index, iterate through the array, and check if any of the sums makes target
    let currentIndex = i;
    for (let j = currentIndex + 1; j < nums.length; j++) {
      if (nums[currentIndex] + nums[j] === target) {
        // if they make target, push index values to variable
        sumIndex.push(currentIndex);
        sumIndex.push(j);
      }
    }
  }

  return sumIndex;
};

// module.exports = twoSum;