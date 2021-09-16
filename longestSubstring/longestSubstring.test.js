const longestSubstring = require('./longestSubstring.js');

describe('Longest Substring without repeating characters', () => {

    it('Should be a function', () => {
        expect(typeof longestSubstring).toBe('function');
    });

    it('Should return 0 for empty string', () => {
        expect(longestSubstring("")).toBe(0);
    })

});