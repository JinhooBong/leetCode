const spiralMatrix = require('./spiralMatrix.js');

describe('Spiral Matrix', () => {

    it('Should be a function', () => {
        expect(typeof spiralMatrix).toBe('function');
    });

    it('Should return correct base cases', () => {
        expect(spiralMatrix([[]])).toStrictEqual([[]]);
        expect(spiralMatrix([[1]])).toStrictEqual([1]);

    })

    it('Should return [1, 2, 3, 6, 5, 4] for [[1, 2, 3], [4, 5, 6]', () => {
        expect(spiralMatrix([[1, 2, 3], [4, 5, 6]])).toStrictEqual([1, 2, 3, 6, 5, 4]);
    });

    it('Should return [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]', () => {
        expect(spiralMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toStrictEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    })

});