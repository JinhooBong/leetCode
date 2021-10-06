/**
 * @param {number[]} rating
 * @return {number}
 * 
 * There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
 * You have to form a team of 3 soldiers amongst them under the following rules:
 * Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k])
 * 
 * A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n)
 * 
 * 
 * Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).
 * 
 * 
 */
var numTeams = function(rating) {
    
    // input: an array of numbers (that represent the rating of each solider)
    // output: the number of combinations possible where
    // i < j < k and rating[i] < rating[j] < rating[k] OR rating[i] > rating[j] > rating[k]

    // constraint: has to be a team of 3

    // iterate through the array
    // create a count variable

    // create an array 
    // grab first element,
    // iterate through rest of the array
    // grab second element and check which one is greater 
    // then iterate through rest of the array
    // grab third elemtn 
    // if the previous number was greater, then check for greater
    // if previous was lesser, then check for lesser

    let numOfTeams = 0;

    for (let i = 0; i < rating.length; i++) {
        let team = [];

        let firstNum = rating[i];

        for (let j = i + 1; j < rating.length; j++) {
            if (rating[j] < firstNum) {
                let secondNum = rating[j];
                for (let k = j + 1; k < rating.length; k++) {
                    if (rating[k] < secondNum) {
                        numOfTeams++;
                    }
                }
            } else if (rating [j] > firstNum) {
                let secondNum = rating[j];
                for (let k = j + 1; k < rating.length; k++) {
                    if (rating[k] > secondNum) {
                        numOfTeams++;
                    }
                }
            }
        }
    }

    return numOfTeams;
};

module.exports = numTeams;