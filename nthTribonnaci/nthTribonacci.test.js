const nthTrib = require('./nthTribonacci.js');

describe('Nth Tribonnaci', () => {
   
    it('Should be a function', () => {
        expect(typeof nthTrib).toBe('function');
    });

    it('Should handle base cases', () => {
        expect(nthTrib(0)).toBe(0);
        expect(nthTrib(1)).toBe(1);
        expect(nthTrib(2)).toBe(1);
    });

    it('Should be 2', () => {
        expect(nthTrib(3)).toBe(2);
    })

    it('Should be 4', () => {
        expect(nthTrib(4)).toBe(4);
    });

    it('Should be 1389537', () => {
        expect(nthTrib(25)).toBe(1389537);
    })
});