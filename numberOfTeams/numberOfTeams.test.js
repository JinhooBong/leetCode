const numTeams = require('./numberOfTeams');

describe('Number of Teams', () => {

    it('Should be a function', () => {
        expect(typeof numTeams).toBe('function');
    });

    it('Should be 0', () => {
        expect(numTeams([2, 1, 3])).toBe(0);
    });

    it('Should be 3', () => {
        expect(numTeams([2, 5, 3, 4, 1])).toBe(3);
        // bc [2, 3, 4], [5, 4, 1], [5, 3, 1]
    })

    it('Should be 4', () => {
        expect(numTeams([1, 2, 3, 4])).toBe(4);
    })

});