/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 */

/*
题目：
给定一个二叉树，判断它是否是高度平衡的。
高度平衡是指一个二叉树的每个节点的两个子树的深度差不超过1。

分析：
关于求二叉树深度的问题，很容易想到之前做的104. Maximum Depth of Binary Tree这一题，
在遍历树的每个节点时，可以调用treeDepth方法得到它的左右子树的深度，
如果左右子树的深度相差超过1，则不是一个平衡二叉树。
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    var left = treeDepth(root.left),
        right = treeDepth(root.right);
    if (Math.abs(left-right) > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};

var treeDepth = function(root) {
    if (root === null) {
        return 0;
    }
    return Math.max(treeDepth(root.left),treeDepth(root.right)) + 1;
};
