/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * 
 * Given the root of a binary tree, return the sum of ever
 * tree node's tilt.
 * 
 * The tilt of a tree node is the absolute difference between
 * the sum of all left subtree node values and all right
 * subtree node values. If a node does not have a left child,
 * then the sum of the left subtree node values is treated as
 * 0. The rule is similar if there the node does not have a
 * right child.
 * 
 */
var findTilt = function(root) {
  // we want to traverse through the tree starting from the root
  // once we reach the last child, we set those values to 0 because they have no children, thus the tilt is 0. 
  // we then return the value of those children and then find the absolute difference between them 
  // until we reach back to the top
  let tilt = 0;

  let innerTilt = (tree_root) => {
    // if tree is null return 0;
    if (tree_root === null) return 0;
    
    if (tree_root.left === null && tree_root.right === null) return tree_root.val;
    
    // we want to grab tilts for left & right subtrees
    let left = innerTilt(tree_root.left);
    let right = innerTilt(tree_root.right);

    // the absolute difference
    tilt += Math.abs(left - right);

    return tree_root.val + left + right;
  }

  innerTilt(root);

  return tilt;
};

module.exports = findTilt;