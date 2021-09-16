/**
 * @param {string[]} strs
 * @return {string}
 */

/**
 * Write a function to find the longest common prefix amongst an array of strings
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * input: strs = ['flower', 'flow', 'flight']
 * output: 'fl'
 *
 * Example 2:
 * input: strs = ['dog', 'racecar', 'car']
 * output: ""
 */

 var longestCommonPrefix = function(strs) {

    // create a variable to store the longest common prefix
    let prefix = "";

    // we grab the first letter of the first string
    // iterate through the rest of the array of words, 
    // if it matches, then we keep, else we don't 
    for (let i = 0; i < strs.length; i++) {
        let letterIndex = 0;
        if (strs[i][letterIndex] !== strs[i+1][letterIndex]) {
            return "";
        }
        prefix+=strs[i][letterIndex];
    }

    return prefix;
};

module.exports = longestCommonPrefix;