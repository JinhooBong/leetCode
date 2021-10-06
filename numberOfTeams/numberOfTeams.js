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

    // create a count variable
    let numOfTeams = 0;

    for (let i = 0; i < rating.length; i++) {
        // grab first element,
        let firstNum = rating[i];

        // iterate through rest of the array
        for (let j = i + 1; j < rating.length; j++) {
            // grab second element and check which one is greater 
            if (rating[j] < firstNum) {

                let secondNum = rating[j];
                // then iterate through rest of the array
                for (let k = j + 1; k < rating.length; k++) {
                    // if second element was less than first 
                    // then check for third element to be lesser
                    // if there is one, then thats a possible team
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

    // return count
    return numOfTeams;
};

module.exports = numTeams;