/**
 * @param {string} s
 * @return {number}
 * 
 * Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
 * 
 * A word is a maximal substring consisting of non-space characters only.
 * 
 */
var lengthOfLastWord = function(s) {

    // global word array variable
    let words = [];
    for (let i = 0; i < s.length; i++) {  
      // if its space, skip
      // if its not, then add it to a word and keep adding until space
      let word = '';

      if (s[i] !== ' ') {
        // while current position is not space, keep adding
        while (s[i] !== ' ' && i !== s.length - 1) {
          word += s[i];
          i++;
        }
        // if it reaches end of length, check last letter to see if its space or letter
        if (s[i] !== ' ') {
          word += s[i];
        }
        // when while loop ends, it should be a word
        words.push(word);
      }
    }

    // return the length of the last word in the array
    return words[words.length - 1].length;
};

module.exports = lengthOfLastWord;