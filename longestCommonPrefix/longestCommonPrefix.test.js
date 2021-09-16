const longestCommonPrefix = require('./longestCommonPrefix.js');

describe('Longest Common Prefix Test', () => {

    it('Should be a function', () => {
        expect(typeof longestCommonPrefix).toBe('function');
    });

    it('Should return "" for ["dog", "racecar", "car"]', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });

    it('Should return "fl" for ["flower", "flow", "flight"]', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });

    it('Should return whole word for same words', () => {
        expect(longestCommonPrefix(["test", "test"])).toBe("test");
    });

    it('Should return "a" for ["apple", "alabama", "ape"]', () => {
        expect(longestCommonPrefix(["apple", "alabama", "ape"])).toBe("a");
    });

    it('Should return empty for any empty string', () => {
        expect(longestCommonPrefix(["", "this", "that"])).toBe("");
    })

});