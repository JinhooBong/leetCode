const oddEvenList = require('./oddEvenList');

describe('Odd Even list', () => {

  it('Should be a function', () => {
    expect(typeof oddEvenList).toBe('function');
  })

  it('Should return correct', () => {
    function ListNode(val, next) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }

    let head = ListNode(1);
    let node2 = ListNode(2);
    let node3 = ListNode(3);
    let node4 = ListNode(4);
    let node5 = ListNode(5);

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    console.log(head);
  })

})  