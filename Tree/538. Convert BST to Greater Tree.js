/*
Given a Binary Search Tree (BST),
convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:
Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13
Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
 */

/*
题目：
给定一个二叉搜索树，将它转换为一个更大的树，
原来的二叉树的每一个节点值变为原有节点值加上所有比它大的节点值的和。

分析：
由题意，节点值=原节点值+比它大的所有节点值的和，
那么，可以按照先右子节点再根节点最后左子节点的顺序遍历，
也就是一个从大到小的顺序，
此时，右节点上不需要再加任何值，因为它最大，
根节点上需要加上原右子节点的值，
左子节点需要加上原右子节点的值和根节点的值。
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    var sum = 0;
    var convert = function(node) {
	    if (node === null)
	        return;
	    convert(node.right);
	    node.val += sum;
	    sum = node.val;
	    convert(node.left);
	};
    convert(root);
    return root;
};
