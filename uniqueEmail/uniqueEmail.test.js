const uniqueEmails = require('./uniqueEmail.js');

describe('Number of Unique Email Addresses', () => {

    it('Should be a function', () => {
        expect(typeof uniqueEmails).toBe('function');
    });

    it('Should return 0 for empty', () => {
        expect(uniqueEmails([])).toBe(0);
    });

    it('Should return 2', () => {
        expect(uniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])).toBe(2);
    });

    it('Should return 3', () => {
        expect(uniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])).toBe(3);
    });
});