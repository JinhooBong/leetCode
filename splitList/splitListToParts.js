/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 *
 *
 * Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.
 * The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.
 * The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.
 * Return an array of the k parts.
 */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var splitListToParts = function(head, k) {
  // input: a singly linked list
  // output: the list split into k lists into an array

  // array to store lists
  let listArr = [];

  // get length of list
  let length = 0;

  while(head.next !== null) {
    length++;
    head = head.next;
  }

  // divide length by k


  // return list array
  return listArr;


};

module.exports = splitListToParts;