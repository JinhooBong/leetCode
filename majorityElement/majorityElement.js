/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * 
 * 
 */
var majorityElement = function(nums) {
    // input: an array of nums
    // output: the majority element

    // create an object to keep track of how many times the number appears
    let counterObj = {};
        
    // iterate through the array, and keep count of how many times each number appears
    for (let i = 0; i < nums.length; i++) {
        if (counterObj[nums[i]] === undefined) {
            counterObj[nums[i]] = 1;
        } else {
            counterObj[nums[i]]++;
        }
    }

    // grab the size of n/2
    let half = Math.floor(nums.length / 2);

    // iterate through counter object, and check to see which value is greater than half and return that value
    for (let key in counterObj) {
        if (counterObj[key] > half) {
            return parseInt(key);
        }
    }
};

module.exports = majorityElement;