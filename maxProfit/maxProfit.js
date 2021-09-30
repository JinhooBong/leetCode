/**
 * @param {number[]} prices
 * @return {number}
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * 
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * 
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 */
var maxProfit = function(prices) {

    // input: array of numbers, with each i position indicating the price of the stock on that day
    // output: the maximum profit you can make, else return 0;

    // grab the first value, see if any of the latter values can amount to a maximum profit
    // iterate through rest of the array following same idea


    // // variable to keep track of max profit made
    // let maxProfit = 0;

    // for (let i = 0; i < prices.length - 1; i++) {
    //     // if we buy on i day, are there any i++ days where profit is maximum?
    //     for (let j = i + 1; j < prices.length; j++) {
    //         let profit = prices[j] - prices[i];
    //         if (profit > maxProfit) {
    //             maxProfit = profit;
    //         }
    //     }
    // }

    // return maxProfit;


    // leetcode solution 
    // runtime: O(n)
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
};

module.exports = maxProfit;