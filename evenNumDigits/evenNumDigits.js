/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array nums of integers, return how many of them contain an even number of digits.
 */
var findNumbers = function(nums) {
    
    // input: array
    // output: number

    // counter
    let evenDigitNums = 0;
    
    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // grab length of ecah num
        let length = nums[i].toString().length;
        if (length % 2 === 0) {
            // increment count if even
            evenDigitNums++;
        }
    }

    // return counter
    return evenDigitNums;
};

module.exports = findNumbers;