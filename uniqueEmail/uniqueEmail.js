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
    // input : array of emails
    // output: number of unique email addresses

    
    
    // if the local name has a period, ignore it, and ignore + and anything after it
    // if it equals an already existing email, dont count it
    // else increment count

    // unique email array holder
    let uniqueEmails = [];

    // iterate through the email array
    for (let i = 0; i < emails.length; i++) {
        // split each email by '@' 
        let emailAddr = emails[i].split('@');

        let localName = emailAddr[0];

        let domainName = emailAddr[1];


        // if localname has '+' sign, ignore it and everything after
        if (localName.indexOf('+') > -1) {
            // grab the index of '+'
            let plusIndex = localName.indexOf('+');
            // we update the localName to be itself minus the '+' and everything after
            localName = localName.substring(0, plusIndex);
        }

        // if localname has period, ignore it
        if (localName.indexOf('.') > -1) {
            // let dotIndex = localName.indexOf('.');
            // localName = localName.substring(0, dotIndex) + localName.substring(dotIndex + 1, localName.length);
            localName = localName.replace(/[._]/g, '');
        }

        let email = localName + '@' + domainName;

        if(!uniqueEmails.includes(email)) {
            uniqueEmails.push(email);
        }
    }

    return uniqueEmails.length;
};

module.exports = numUniqueEmails;