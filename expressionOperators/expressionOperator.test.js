const operator = require('./expressionOperators.js');

describe('Expression Operators', () => {

    it('Should be a function', () => {
        expect(typeof operator).toBe('function');
    });

    it('Should return 0s', () => {
        expect(operator('00', 0)).toStrictEqual(['0*0', '0+0', '0-0']);
    });

    it('Should return 123s', () => {
        expect(operator('123', 6)).toStrictEqual(['1*2*3', '1+2+3']);
    });
    it('Should return 232', () => {
        expect(operator('232', 8)).toStrictEqual(['2*3+2', '2+3*2']);
    })

});