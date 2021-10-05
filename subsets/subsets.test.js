const subsets = require('./subsets');

describe('Subsets', () => {

    it('Should be a function', () => {
        expect(typeof subsets).toBe('function');
    });

    it('Should return correct', () => {
        expect(subsets([1, 2, 3])).toStrictEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]);
    })

    it('Should return empty', () => {
        expect(subsets([0])).toStrictEqual([[], [0]]);
    })

})