/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * 
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * 
 */
var productExceptSelf = function(nums) {
    
    // input: array
    // output: array that has the product of all the elements in the array except the one in the curretn position

    // create a result array
    let productArr = [];

    // for O(n) time
    // use while loop
    // have a counter
    // while counter < nums.length
    // if i = counter, skip
    // else multiply

    let counter = 0;

    while (counter < nums.length) {
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i !== counter) {
                product *= nums[i];
            }
        }
        productArr.push(product);
        counter++;
    }

    for (let i = 0; i < productArr.length; i++) {
        if (productArr[i] === -0) {
            productArr[i] = 0;
        }
    }
    // return result array
    return productArr;
};

module.exports = productExceptSelf;