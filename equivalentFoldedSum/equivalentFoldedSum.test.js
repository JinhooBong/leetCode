const foldedSum = require('./equivalentFoldedSum.js');

describe('Equivalent Folded Sum', () => {

    it('Should be a function', () => {
        expect(typeof foldedSum).toBe('function');
    })

    it('should return 1 for [1, 4, 3, 5]', () => {
        expect(foldedSum([1, 4, 3, 5])).toBe(1);
    });

    it('Should return 2 for [1, 4, 3, 1, 5, 5]', () => {
        expect(foldedSum([1, 4, 3, 1, 5, 5])).toBe(2);
    })
});