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
    // grab the size of n/2
    // if the number of times an element appears is greater than half then return that element

    let counterObj = {};

    for (let i = 0; i < nums.length; i++) {
        if (counterObj[nums[i]] === undefined) {
            counterObj[nums[i]] = 1;
        } else {
            counterObj[nums[i]]++;
        }
    }

    let half = Math.floor(nums.length / 2);

    for (let key in counterObj) {
        if (counterObj[key] > half) {
            return parseInt(key);
        }
    }
};

module.exports = majorityElement;