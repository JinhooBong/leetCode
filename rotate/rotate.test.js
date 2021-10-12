const rotate = require('./rotate');

describe('Rotate', () => {

    it('Should be a function', () => {
        expect(typeof rotate).toBe('function');
    });

    it('Should rotate', () => {
        let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

        expect(rotate(matrix)).toStrictEqual([
            [7, 4, 1], 
            [8, 5, 2],
            [9, 6, 3]
        ]);
    });

    it('Should rotate 2', () => {
        let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

        expect(rotate(matrix)).toStrictEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
    })

    it('Should rotate base case', () => {
        let matrix = [[1]];
        expect(rotate(matrix)).toStrictEqual([[1]]);
    });

    it('Should rotate 3', () => {
        let matrix = [[1,2],[3,4]];

        expect(rotate(matrix)).toStrictEqual([[3,1],[4,2]]);
    })

});
