/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 *
 * Given a string num that contains only digits and an integer target, return all possibilities to add the binary operators '+', '-', or '*' between the digits of num so that the resultant expression evaluates to the target value.
 *
 * EXAMPLE:
 * input: num = "123", target = 6
 * output: ["1*2*3", "1+2+3"]
 *
 * input: num="232", target = 8
 * output: ['2*3+2', '2+3*2']
 *
 * input: num="105" target=5
 * output: ['1*0+5', '10-5']
 *
 * input: num="00", target=0
 * output: ['0*0', '0+0', '0-0']
 *
 * intput: num="3456237490", target=9191
 * output:[]
 */
var addOperators = function(num, target) {

    // input: a string of digits, and an integer target
    // output: an array

    let operatorArr = [];

    // split the number 
    let digits = num.split('');
    // as we go through each digit,
    // see what the product is, summation, subtraction
    // check whether any of them equal target
    // if so, then return the digits with the corresponding expression 

    let product = 1;
    let sum = 0;
    let subtract = 0;

    for (let i = 0; i < digits.length; i++) {
        product *= parseInt(digits[i]);
        sum += parseInt(digits[i]);
        subtract -= parseInt(digits[i]);
    }

    if (product === target) {
        let productStr = '';
        for (let i = 0; i < digits.length; i++) {
            productStr += digits[i];
            if (i === digits.length - 1) {
                // nothing
            } else {
                productStr += '*';
            }
        }
        operatorArr.push(productStr);
    }

    if (sum === target) {
        let sumStr = '';
        for (let i = 0; i < digits.length; i++) {
            sumStr += digits[i];
            if (i === digits.length - 1) {
                // nothing
            } else {
                sumStr += '+';
            }
        }
        operatorArr.push(sumStr);
    }

    if (subtract === target) {
        let minusStr = '';
        for (let i = 0; i < digits.length; i++) {
            minusStr += digits[i];
            if (i === digits.length - 1) {
                // nothing
            } else {
                minusStr += '-';
            }
        }
        operatorArr.push(minusStr);
    }

    return operatorArr;

};

module.exports = addOperators;