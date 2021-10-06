/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
 * 
 * You must write an algorithm that runs in O(n) time and uses only constant extra space.
 */
var findDuplicates = function(nums) {
    
    // input: array of numbers
    // output: an array of numbers that appear twice in the array

    // create an object to track how many times each number appears in the array
    let countObj = {};
    
    // iterate through the array and give values to the object
    for (let i = 0; i < nums.length; i++) {
        if (countObj[nums[i]] === undefined) {
            countObj[nums[i]] = 1;
        } else {
            countObj[nums[i]]++;
        }
    }

    // create an array to return
    let duplicates = [];

    // iterate through object and where values are 2, push to array
    for (let key in countObj) {
        if (countObj[key] === 2) {
            duplicates.push(parseInt(key));
        }
    }

    // return array
    return duplicates;
};

module.exports = findDuplicates;