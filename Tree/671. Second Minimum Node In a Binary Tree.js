/*
Given a non-empty special binary tree consisting of nodes with the non-negative value,
where each node in this tree has exactly two or zero sub-node.
If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

Example 1:
Input:
    2
   / \
  2   5
     / \
    5   7
Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.

Example 2:
Input:
    2
   / \
  2   2
Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.
 */

/*
题目：
给定一个非空特殊的二叉树，
该二叉树的节点值由非负数组成，
树中的每一个节点含有两个或零个子节点，
如果一个节点含有两个子节点，那么该节点值小于这两个子节点的值。
给定这样一个二叉树，你需要返回输出整个树中第二小的节点值。
如果不存在第二小的值，返回输出-1。

分析：
由题意可知，根节点的值是整个树中的最小值，
那么，第二小的节点值就是不等于根节点值的剩下所有节点的最小值。
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
var findSecondMinimumValue = function(root) {
    if (root === null || root.left === null) {
        return -1;
    }
    var val = root.val;
    var result = minVal(root,val);
    return result === Number.MAX_VALUE ? -1 : result;
};

var minVal = function(node,val) {
    if (node.val !== val) {
        return node.val;
    } else {
        if (node.val === val && node.left !== null) {
            return Math.min(minVal(node.left,val), minVal(node.right,val));
        } else {
            return Number.MAX_VALUE;
        }
    }
};
