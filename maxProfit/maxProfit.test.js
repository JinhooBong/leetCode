const maxProfit = require('./maxProfit');

describe('When to buy and sell stocks', () => {

    it('Should be a function', () => {
        expect(typeof maxProfit).toBe('function');
    });

    it('Should be 5', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    it('Should be 0', () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    })

});