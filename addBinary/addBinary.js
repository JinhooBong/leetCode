/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 
 * 
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * Example: 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
 var addBinary = function(a, b) {
    // grab the length of each string 
    // depending on the length of the string, we know which power of 2 we have 
    // we then add it
    // and then find to which power of 2 the result is
    // and then we return the corresponding string

    var len1 = a.length;    
    var len2 = b.length;
    var max = Math.max(len1, len2);
    var res = '';
    var carry = 0;
    var val = 0;

    for (var i = 0; i < max; i++) {
        val = Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;
        carry = Math.floor(val / 2);
        res = (val % 2) + res;
    }

    if (carry) res = 1 + res;

    return res;
};

module.exports = addBinary;