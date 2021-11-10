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
  // iterate through array
  // count how instances each elements appears
  // return the one with 1

  let countObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (countObj[nums[i]] === undefined) {
      countObj[nums[i]] = 1;
    } else {
      countObj[nums[i]]++;
    }
  }

  for (let keys in countObj) {
    if (countObj[keys] === 1) {
      return parseInt(keys);
    }
  }

};

module.exports = singleNumber;