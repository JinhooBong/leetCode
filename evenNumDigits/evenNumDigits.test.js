const findNumbers = require('./evenNumDigits');

describe('Find numbers with even digits', () => {

    it('Should be a function', () => {
        expect(typeof findNumbers).toBe('function');
    });

    it('Should return 2', () => {
        expect(findNumbers([12, 345, 2, 6, 7896])).toBe(2);
    })

    it('Should return 1', () => {
        expect(findNumbers([555,901,482,1771])).toBe(1);
    })

});