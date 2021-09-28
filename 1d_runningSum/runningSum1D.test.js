const runSum = require('./runningSum1D.js');

describe('Running Sum of 1 Dimensional Array', () => {

    it('Should be a function', () => {
        expect(typeof runSum).toBe('function');
    });

    it('Should return correctly', () => {
        expect(runSum([1, 2, 3, 4])).toStrictEqual([1, 3, 6, 10]);
    })

    it('Should return correctly', () => {
        expect(runSum([1, 1, 1, 1, 1])).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it('Should return correctly', () => {
        expect(runSum([3, 1, 2, 10, 1])).toStrictEqual([3, 4, 6, 16, 17]);
    })

});