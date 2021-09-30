const majorityElement = require('./majorityElement');

describe('Majority Element', () => {

    it('Should be a function', () => {
        expect(typeof majorityElement).toBe('function');
    });

    it('Should return 3', () => {
        expect(majorityElement([3, 2, 3])).toBe(3);
    });

    it('Should return 2', () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

});