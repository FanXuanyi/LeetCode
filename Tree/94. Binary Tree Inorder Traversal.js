/*
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],

   1
    \
     2
    /
   3

return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?
 */

/*
题目：
给定一个二叉树，按中序遍历返回节点的值。

分析：
中序遍历的顺序是先左子节点再根节点最后右子节点。
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var list = [];
    if (root !== null) {
        inOrder(root,list);
    }
    return list;
};

var inOrder = function(node, list) {
    if (node == null) {
        return;
    }
    if (node.left !== null) {
        inOrder(node.left,list);
    }
    list.push(node.val);
    if (node.right !== null) {
        inOrder(node.right,list);
    }
};
