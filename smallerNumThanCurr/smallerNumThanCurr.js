/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 */
var smallerNumbersThanCurrent = function(nums) {
    // input: an array
    // output: an array 

    // create an array variable to keep track
    let arrOfSmaller = [];

    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // then for every i, 
        // num tracker
        let numSmaller = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                numSmaller++;
            }
        }
        arrOfSmaller.push(numSmaller);
    }
    
    // iterate through the array to see if there any smaller values
    // keep track of how many are smaller
    // then push to global array
    

    // return arr
    return arrOfSmaller;
};

module.exports = smallerNumbersThanCurrent;