/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 * 
 * Given an array of non-negative integers arr, you are 
 * initially positioned at start index of the array. When you 
 * are at index i, you can jump to i + arr[i] or i - arr[i], 
 * check if you can reach to any index with value 0.
 * 
 * Notice that you can not jump outside of the array at any
 * time.
 * 
 */
var canReach = function(arr, start) {
    // return a boolean value whether we can reach an index in the array where the value is 0 given the specific conditions

    // if the array doesn't contain a 0, then return false
    if (!arr.includes(0)) return false;

    let dfs = (arr, start, count) => {
      if (start < 0 || start > arr.length) return false;
      if (count >= arr.length) return false;
      if (arr[start] === 0) return true;

      return dfs(arr, start + arr[start], count + 1) ||
        dfs(arr, start - arr[start], count + 1)
    }

    return dfs(arr, start, 0);
};

module.exports = canReach;