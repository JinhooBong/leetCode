const intersect = require('./twoArrayIntersection.js');

describe('Two Array Intersection', () => {

    it('Should be a function', () => {
        expect(typeof intersect).toBe('function');
    });

    it('Should handle empty arrays', () => {
        expect(intersect([], [1])).toStrictEqual([]);
        expect(intersect([1], [])).toStrictEqual([]);
    });

    it('Should return [2, 2]', () => {
        expect(intersect([1, 2, 2, 1], [2, 2])).toStrictEqual([2, 2]);
    });

    it('Should return [4, 9]', () => {
        expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toStrictEqual([4, 9]);
    });

    it('Should return [2]', () => {
        expect(intersect([1, 2, 2, 1], [2])).toStrictEqual([2]);
    })

});