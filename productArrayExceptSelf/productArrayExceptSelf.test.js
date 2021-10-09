const product = require('./productArrayExceptSelf');

describe('Product except self', () => {

    it('Should be a function', () => {
        expect(typeof product).toBe('function');
    });

    it('Should return correct', () => {
        expect(product([1,2,3,4])).toStrictEqual([24, 12, 8, 6]);
    })

    it('2nd example', () => {
        expect(product([-1,1,0,-3,3])).toStrictEqual([0,0,9,0,0]);
    })

});