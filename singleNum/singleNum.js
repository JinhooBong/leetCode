/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 */
var singleNumber = function(nums) {
  
  // create an object
  let countObj = {};

  // iterate through array
  for (let i = 0; i < nums.length; i++) {
    // count how instances each elements appears
    if (countObj[nums[i]] === undefined) {
      countObj[nums[i]] = 1;
    } else {
      countObj[nums[i]]++;
    }
  }

  for (let keys in countObj) {
    // return the one with 1
    if (countObj[keys] === 1) {
      return parseInt(keys);
    }
  }

};

module.exports = singleNumber;