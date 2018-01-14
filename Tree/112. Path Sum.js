/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1

return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 */

/*
题目：
给定一个二叉树和一个和sum，判断是否存在一个从根节点到叶子节点的路径，
使得路径上的每个节点值之和等于sum。

分析：
如果节点为空，则返回false；
如果左右子节点均为空并且节点值等于sum，则返回true；
否则递归判断其左右子树，新的sum值为sum减去节点的值。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) {
        return false;
    } else {
        if (root.left === null && root.right === null && root.val === sum) {
            return true;
        } else {
            return hasPathSum(root.left,sum-root.val) || hasPathSum(root.right,sum-root.val);
        }
    }
};
