/**
 * @param {string[]} arr
 * @return {number}
 * 
 * Given an array of strings arr. String S is a concatenation of of a sub-sequence of arr which have unique characters
 * 
 * Return the maximum possible length of s
 * 
 * EXAMPLE:
 * 
 * input: arr = ["un", "iq", "ue"]
 * output: 4 
 * explanation: all options are ["", "un", "iq", "ue", "uniq", "ique"] of which the maximum length is 4
 * 
 * input: arr = ["cha","r","act","ers"]
 * output: 6
 * explanation: Possible solutions are "chaers" and "acters".
 * 
 * input: arr = ["abcdefghijklmnopqrstuvwxyz"]
 * output: 26
 */
var maxLength = function(arr) {
    // base case:
    // return 0 for empty arr

    if (arr.length === 0) return 0;

    // create array to store possible unique combinations
    // iterate through the array and combine them
    // if the combination doesn't have all unique characters, don't add to list

    // get max from list and return length

    let uniqCombinations = [""];

    for (let i = 0; i < arr.length; i++) {
        uniqCombinations.push(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        let firstWord = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let secondWord = arr[j];
            // iterate through the first word, and check to see if the letters exist in the second word
            let unique = true;
            for (let letter = 0; letter < firstWord.length; letter++) {
                // if they do exist then just exit and increment j
                if (secondWord.indexOf(firstWord[letter]) > -1) {
                    unique = false;
                }
            }
            if (unique) {
                uniqCombinations.push(firstWord + secondWord);
            }
        }
    }

    return findMaxLength(uniqCombinations);
};

let findMaxLength = (arr) => {
    let max = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }

    return max;
}

module.exports = maxLength;