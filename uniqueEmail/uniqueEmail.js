/**
 * @param {string[]} emails
 * @return {number}
 * 
 * Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'
 * 
 * for example, in 'alice@leetcode.com', 'alice' is the local name, and 'leetcode.com' is the domain name. 
 * 
 * if you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Not that this rule does not apply to domain names. 
 * 
 * for example, 'alice.z@leetcode.com' and 'alicez@leetcode.com' forward to the same email address
 * 
 * if you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names. 
 * 
 * For example, 'm.y+name@email.com' will be forwarded to 'my@email.com'
 * 
 * Given an array of string emails where we send one email to each email[i], return the number of different addresses that actually receive mails
 * 
 */
var numUniqueEmails = function(emails) {
    
};

module.exports = numUniqueEmails;