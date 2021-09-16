/**
 * @param {string} s
 * @return {number}
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * input: s = "abcabcbb"
 * output: 3 ("abc")
 *
 * 
 * Example 2: 
 * input: s = "b"
 * output: 1
 * 
 * Example 3:
 * input: s = "pwwkew"
 * output: 3
 * 
 * Example 4: 
 * input: s = ""
 * output: 0 
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s === null) {
        return 0;
    }

    // variable to keep track of length;
    let length = 0;
    let uniqTracker = {};

    // iterate through the string
    // if the next letter is unique and continuous then add
    
    for (let i = 0; i < s.length - 1; i++) {
   

    }

    return length;
};

module.exports = lengthOfLongestSubstring;