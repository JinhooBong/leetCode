const smallerNum = require('./smallerNumThanCurr.js');

describe('Smaller Numbers than Current Value', () => {

    it('Should be a function', () => {
        expect(typeof smallerNum).toBe('function');
    });

    it('Should return correct', () => {
        expect(smallerNum([8, 1, 2, 2, 3])).toStrictEqual([4, 0, 1, 1, 3]);
        expect(smallerNum([6, 5, 4, 8])).toStrictEqual([2, 1, 0, 3]);
    })

    it('Should return 0', () => {
        expect(smallerNum([7, 7, 7, 7])).toStrictEqual([0, 0, 0, 0]);
    })
});