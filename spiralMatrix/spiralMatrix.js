/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order
 *
 * EXAMPLE:
 * matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
 *
 * matrix = [[1, 2, 3, 4] ,[5, 6, 7, 8], [9, 10, 11, 12]]
 * output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
 */
 var spiralOrder = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) {
        return matrix;
    }

    // if the matrix length is 2, then we simply return the first array printed correctly
    // and then we return the array at length backwards

    // variable to keep track of spun matrix
    let spunMatrix = [];
    // for(let i = 0; i < matrix.length; i++) {
    //     if(i === 0) {
    //         for (let j = 0; j < matrix[i].length; j++){
    //             spunMatrix.push(matrix[i][j]);
    //         }
    //     } else {
    //         for (let j = matrix[i].length - 1; j >= 0; j--) {
    //             spunMatrix.push(matrix[i][j]);
    //         }
    //     }
    // }

    // we want to traverse right, 
    // then traverse down,
    // then traverse left, 
    // then traverse up

    let startRowPos = 0;
    let endRowPos = matrix.length - 1;
    let startColPos = 0;
    let endColPos = matrix[0].length - 1;

    while (startRowPos <= endRowPos && startColPos <= endColPos) {

        // traverse right
        for (let i = startColPos; i <= endColPos; i++) {
            spunMatrix.push(matrix[startRowPos][i]);
        }
        // increment row
        startRowPos++;

        // traverse down (keep column position, but increment row)
        for (let i = startRowPos; i <= endRowPos; i++) {
            spunMatrix.push(matrix[i][endColPos]);
        }
        // decrement col position 
        endColPos--;

        // traverse left (keep row position, and decrement col)
        // when we traverse left, we want to check if the row or column exists in order to prevent duplicates
        if (startRowPos <= endRowPos) {
            for (let i = endColPos; i >= startColPos; i--) {
                spunMatrix.push(matrix[endRowPos][i]);
            }
        }   
        endRowPos--;

        // if column exists, then traverse up
        if(startColPos <= endColPos) {
            for (let i = endRowPos; i >= startRowPos; i--) {
                spunMatrix.push(matrix[i][startColPos]);
            }
        }
        startColPos++;

    }

    return spunMatrix;
};

module.exports = spiralOrder;