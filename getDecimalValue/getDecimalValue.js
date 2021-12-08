/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 * 
 * Given head which is a reference node to a singly-linked
 * list. The value of each node in the linked list is either 0
 * or 1. The linked list holds the binary representation of a
 * number.
 * 
 * 
 * Return the decimal value of the number in the linked list.
 */
var getDecimalValue = function(head) {
  // grab all digits until head ends
  let binaryDigit = '';

  for (let i = 0; i < head.length; i++) {
    binaryDigit += head[i];
  }

  // convet to integer
  binaryDigit = parseInt(binaryDigit);

  // while digit is greater than 0, we mod and then divide by 10
  let decimalDigit = 0;
  let base = 1;

  while (binaryDigit >= 1) {
    let curr = binaryDigit % 10;
    decimalDigit += (curr * base);
    base *= 2;
    binaryDigit = Math.floor(binaryDigit / 10);
  }


  return decimalDigit;

};

module.exports = getDecimalValue;