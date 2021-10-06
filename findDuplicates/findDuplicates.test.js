const findDuplicates = require('./findDuplicates');

describe('Find Duplicates', () => {

    it('Should be a function', () => {
        expect(typeof findDuplicates).toBe('function');
    });

    it('should return correctly', () => {
        expect(findDuplicates([4,3,2,7,8,2,3,1])).toStrictEqual([2, 3]);
    });

    it('Should return correctly', () => {
        expect(findDuplicates([1,1,2])).toStrictEqual([1]);
        expect(findDuplicates([1])).toStrictEqual([]);
    })

});