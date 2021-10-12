/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 
 * You are given an n x n 2D matrix representing an image, rotate the
 * image by 90 degrees (clockwise).
 * 
 * You have to rotate the image in-place, which means you have to modify
 * the input 2D matrix directly. DO NOT allocate another 2D matrix and
 * do the rotation.
 * 
 * 
 * example: matrix = 
 * [[1,2,3]
 * [4,5,6]
 * [7,8,9]]
 * output: 
 * [[7,4,1]
 *  [8,5,2]
 *  [9,6,3]]
 * 
 */
var rotate = function(matrix) {
    // input: 2d matrix 
    // output: a 2d matrix rotated 90deg right

    // [0][0] becomes [0][n]
    // [0][1] becomes [1][n]
    // [0][2] becomes [2][n]

    // [1][0] becomes [0][1]
    // [1][1] becomes [1][1]
    // [1][2] becomes [2][1]

    // [2][0] becomes [0][0]
    // [2][1] becomes [1][0]
    // [2][2] becomes [2][0]

    return matrix.map((row, i) =>
        row.map((val, j) => matrix[matrix.length - 1 - j][i])
    );
};

module.exports = rotate;