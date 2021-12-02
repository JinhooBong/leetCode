const oddEvenList = require('./oddEvenList');

describe('Odd Even list', () => {

  it('Should be a function', () => {
    expect(typeof oddEvenList).toBe('function');
  })

  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }

  it('Should return correct', () => {
  
    let head = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(3);
    let node4 = new ListNode(4);
    let node5 = new ListNode(5);

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    let oddEvenHead = new ListNode(1);
    let node22 = new ListNode(2);
    let node33 = new ListNode(3);
    let node44 = new ListNode(4);
    let node55 = new ListNode(5);

    oddEvenHead.next = node33;
    node33.next = node55;
    node55.next = node22;
    node22.next = node44;

    expect(oddEvenList(head)).toStrictEqual(oddEvenHead);
  })

  it('Example 2', () => {

    let head = new ListNode(2);
    let node2 = new ListNode(1);
    let node3 = new ListNode(3);
    let node4 = new ListNode(5);
    let node5 = new ListNode(6);
    let node6 = new ListNode(4);
    let node7 = new ListNode(7);

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node6;
    node6.next = node7;
    
    let oddEvenHead = new ListNode(2);
    let node22 = new ListNode(3);
    let node33 = new ListNode(6);
    let node44 = new ListNode(7);
    let node55 = new ListNode(1);
    let node66 = new ListNode(5);
    let node77 = new ListNode(4);

    oddEvenHead.next = node22;
    node22.next = node33;
    node33.next = node44;
    node44.next = node55;
    node55.next = node66;
    node66.next = node77;

    expect(oddEvenList(head)).toStrictEqual(oddEvenHead);

  })

})  