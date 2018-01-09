/*
Given two binary trees,
write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]
Output: true

Example 2:
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]
Output: false

Example 3:
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]
Output: false
 */

/*
题目：
给定两个二叉树，写一个方法判断它们是否相同。
如果两个树结构相同并且节点的值也相同，那么这两个二叉树被认为是相同的。

分析：
遍历这两个二叉树的每个节点，判断是否相同。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    var isLeft = isSameTree(p.left,q.left);
    var isRight = isSameTree(p.right,q.right);
    if (isLeft && isRight) {
    	return true;
    }
    else {
    	return false;
    }
};
