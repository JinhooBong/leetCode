/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order
 *
 * EXAMPLE:
 * Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 * output: [2, 2]
 *
 * Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
 * output: [4, 9]
 * Explanation: [9, 4] is also accepted
 */
var intersect = function(nums1, nums2) {

    let intersectArr = [];

    if (nums1.length === 0 || nums2.length === 0) return [];

    // iterate through first array
    for (let i = 0; i < nums1.length; i++) {
        // checks to see if nums2 contains element in nums1
        if (nums2.indexOf(nums1[i]) !== -1) {
            // if it doesn't equal -1, then it exists in the array
            // if it exists, add onto result array
            nums2[nums2.indexOf(nums1[i])] = null;
            intersectArr.push(nums1[i]);
        }
    }

    // return result array
    return intersectArr;
};

module.exports = intersect;