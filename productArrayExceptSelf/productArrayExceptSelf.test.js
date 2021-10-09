const product = require('./productArrayExceptSelf');

describe('Product except self', () => {

    it('Should be a function', () => {
        expect(typeof product).toBe('function');
    })

});