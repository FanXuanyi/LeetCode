/*
Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:
Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
 */

/*
题目：
给定一个二叉树，返回这个二叉树的倾斜度。
树节点的倾斜度是指所有左子树的节点值与所有右子树的节点值的差的绝对值。
空节点的倾斜度为0。
整个树的倾斜度是指所有节点的倾斜度的和。

分析：
给定一个节点，如果该节点为null，返回0，
否则，将该节点的值与该节点的左子树的所有节点值的和与该节点的右子树的所有节点值的和相加返回；
同时还要计算各个节点的倾斜度，并将每个节点的倾斜度相加，
最后返回相加后的倾斜度返回即可。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    var diff = 0;
    var sum = function(root) {
        if (root === null) {
            return 0;
        }
        var left = sum(root.left);
        var right = sum(root.right);
        diff += Math.abs(left-right);
        return root.val+left+right;
    };
    sum(root);
    return diff;
};
