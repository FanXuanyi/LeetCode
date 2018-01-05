/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 */

/*
题目：
给定一个二叉树，找到它的最小深度。
最小深度是指从根节点到最近子节点的最短路径上的节点数。

分析：
这一题正好与104. Maximum Depth of Binary Tree这一题相反。
特别需要注意的是左右子树为空的情况。
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
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    var l = minDepth(root.left),
        r = minDepth(root.right);
    if (!l) {
        return r+1;
    }
    if (!r) {
        return l+1;
    }
    return Math.min(l,r) + 1;
};
