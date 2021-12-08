const findTilt = require('./findTilt');

describe('Find Tilt', () => {
  
  it('Should be a function', () => {
    expect(typeof findTilt).toBe('function');
  })
  
  function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

  it('Example 1', () => {
    let root = new TreeNode(1);
    let leftTree = new TreeNode(2);
    let rightTree = new TreeNode(3);
    root.left = leftTree;
    root.right = rightTree;

    expect(findTilt(root)).toBe(1);
  })

  it('Example 2', () => {
    let root = new TreeNode(4);
    let leftBranch = new TreeNode(2);
    let rightBranch = new TreeNode(9);
    let leftChild = new TreeNode(3);
    let rightChild = new TreeNode(5);

    let rightChild2 = new TreeNode(7);

    root.left = leftBranch;
    root.right = rightBranch;
    leftBranch.left = leftChild;
    leftBranch.right = rightChild;
    rightBranch.right = rightChild2;

    expect(findTilt(root)).toBe(15);
  })

  it('Example 3', () => {
    let root = new TreeNode(21);
    let leftBranch = new TreeNode(7);
    let rightBranch = new TreeNode(14);
    let leftChild1 = new TreeNode(1);
    let rightChild1 = new TreeNode(1);
    let leftChild2 = new TreeNode(2);
    let rightChild2 = new TreeNode(2);
    let leftChild3 = new TreeNode(3);
    let rightChild3 = new TreeNode(3);

    root.left = leftBranch;
    root.right = rightBranch;

    rightBranch.left = leftChild2;
    rightBranch.rigt = rightChild2;

    leftBranch.left = leftChild1;
    leftBranch.right = rightChild1;

    leftChild1.left = leftChild3;
    leftChild1.right = rightChild3;

    expect(findTilt(root)).toBe(9);
  })

})