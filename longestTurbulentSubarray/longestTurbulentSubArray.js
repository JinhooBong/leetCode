/**
 * @param {number[]} arr
 * @return {number}
 *
 * Given an integer array arr, return the length of the maximum size turbulent subarray of arr.
 *
 * A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
 *
 * More formally, a subarray [arr[i], arr[i+1], ..., arr[j]] of arr is said to be turbulent if and only if:
 *
 * For i <= k < j:
 * - arr[k] > arr[k+1] when k is odd, and
 * - arr[k] < arr[k+1] when k is even
 *
 * Or, for i <= k < j:
 * - arr[k] > arr[k+1] when k is even, and
 * - arr[k] < arr[k+1] when k is odd
 *
 *
 * EXAMPLE:
 * input: arr = [9, 4, 2, 10, 7, 8, 8, 1, 9]
 * output: 5
 * explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
 *
 * input: arr = [4, 8, 12, 16]
 * output: 2
 * explanation: arr[0] < arr[1]
 *
 * input: arr = [100]
 * output: 1
 */
 var maxTurbulenceSize = function(arr) {

};

module.exports = maxTurbulenceSize;