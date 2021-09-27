/**
 * @param {number} n
 * @return {number}
 *
 * The Tribonacci sequence T_n is defined as follows :
 *
 * T_0 = 0, T_1 = 1, T_2 = 1, T_n+3 = T_n + T_n+1 + T_n+2 for n >= 0
 *
 * Given n, return the value of T_n
 *
 *
 * EAMPLE:
 * input: n = 4
 * output: 4
 * explanation: T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 *
 * EXAMPLE:
 * input: n = 25
 * output: 1389537
*/
var tribonacci = function(n) {

    // constraint n <= 37 and >= 0

    // Make an array F of length 38, and set F[0] = 0, F[1] = F[2] = 1.
    let F = Array(38);

    F[0] = 0;
    F[1] = 1;
    F[2] = 1;

    // Now write a loop where you set F[n+3] = F[n] + F[n+1] + F[n+2], and return F[n].
    for (let i = 3; i < F.length; i++) {
        F[i] = F[i-1] + F[i-2] + F[i-3];
    }

    return F[n];
};

module.exports = tribonacci;