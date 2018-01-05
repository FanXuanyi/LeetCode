/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/*
题目：
给定一个二叉树，找到它的最大深度。
最大深度是指从根节点到最远子节点的最长路径上的节点数。

分析：
这一题重点需要理解的是maximum depth这一概念。
如果一棵树没有节点，那么它的深度为0；
如果一个树只有一个节点，那么它的深度为1；
如果根节点只有左子树没有右子树，那么它的深度是其左子树的深度加1；
同理，如果只有右子树而没有左子树，那么它的深度是其右子树的深度加1；
如果既有左子树又有右子树，那么它的深度就是其左、右子树深度的较大值加1。
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
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};
