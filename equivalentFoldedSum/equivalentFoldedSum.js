/**
 * You are given a list of integers nums of even length. 
 * Consider an operation where you pick any number in nums 
 * and update it with a value between [1, max(nums)].

 * Return the minimum number of operations required 
 * such that for every i, nums[i] + nums[n - 1 - i] equals 
 * to the same number.
 */


var equivalentFoldedSums = (nums) => {
    // variable to keep track of changes
    let numChanges = 0;

    // variable to keep track of a goal sum
    let goalSum = nums[0] + nums[nums.length - 1];

    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length / 2) {
            return numChanges;
        }
        if(nums[i] + nums[nums.length - 1 -i] !== goalSum) {
            numChanges++;
        }
    }

    return numChanges;
}

module.exports = equivalentFoldedSums;