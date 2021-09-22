const maxLength = require('./uniqCharStrings.js');

describe('Unique Character String', () => {

    it('Should be a function', () => {
        expect(typeof maxLength).toBe('function');
    });

    it('Should return 0 for empty',() => {
        expect(maxLength("")).toBe(0);
    });

    it('Should return 4', () => {
        let arr = ["un", "iq", "ue"];
        expect(maxLength(arr)).toBe(4);
    });

    it('Should return 6', () => {
        let arr = ["cha", "r", "act", "ers"];
        expect(maxLength(arr)).toBe(6);
    });

    it('Should return 26', () => {
        let arr = ["abcdefghijklmnopqrstuvwxyz"];
        expect(maxLength(arr)).toBe(26);
    })

});
