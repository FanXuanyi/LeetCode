/*
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
 */

/*
题目：
给定一个二叉树，求这个二叉树所有左子叶的和。

分析：
由于没有子元素的节点称为外部节点或叶节点，
那么，左子叶指的是该左子节点没有子节点。
然后，分情况考虑：
如果当前节点有左子节点，并且该左子节点为叶节点时，
将左子节点的值与遍历右子树后统计得到的结果相加；
否则，分别遍历左右两个子树，并将其统计得到的结果相加。
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
var sumOfLeftLeaves = function(root) {
    if (root === null) {
        return 0;
    }
    if (root.left !== null && root.left.left === null && root.left.right === null) {
    	return root.left.val + sumOfLeftLeaves(root.right);
    }
    else {
    	return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
    }
};
