/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * 
 * Return the running sum of nums
 */
 var runningSum = function(nums) {
    // input : an array of nums
    // output: an array that holds the values of the running sums
    
    let runSum = [];
    runSum.push(nums[0]);
    
    // iterate through the array
    // add the current number value with the value of the previous index of the array
    
    for (let i = 1; i < nums.length; i++) {
        runSum.push(nums[i] + runSum[i-1]);
    }
    
    return runSum;
};

module.exports = runningSum;