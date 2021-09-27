const uniqueEmails = require('./uniqueEmail.js');

describe('Number of Unique Email Addresses', () => {

    it('Should be a function', () => {
        expect(typeof uniqueEmails).toBe('function');
    });

});