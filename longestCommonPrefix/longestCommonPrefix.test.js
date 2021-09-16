const longestCommonPrefix = require('./longestCommonPrefix.js');

describe('Longest Common Prefix Test', () => {

    it('Should be a function', () => {
        expect(typeof longestCommonPrefix).toBe('function');
    });

    it('Should return "" for ["dog", "racecar", "car"]', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });

});