/*
Given a binary search tree and the lowest and highest boundaries as L and R,
trim the tree so that all its elements lies in [L, R] (R >= L).
You might need to change the root of the tree,
so the result should return the new root of the trimmed binary search tree.

Example 1:
Input:
    1
   / \
  0   2

  L = 1
  R = 2
Output:
    1
      \
       2

Example 2:
Input:
    3
   / \
  0   4
   \
    2
   /
  1

  L = 1
  R = 3
Output:
      3
     /
   2
  /
 1
 */

/*
题目：
给定一个二叉搜索树，L和R表示最低和最高边界值，
修剪这个树，使其元素处于[L,R]区间范围内，
你可能需要改变这个树的根节点，
所以结果应该返回修剪后的二叉搜索树的新的根节点。

分析：
二叉搜索树的特点是：
对于任意一个节点，
它的左子节点的值不大于该节点的值，
它的右子节点的值不小于该节点的值，
根据这一特点，可以将root的值与L、R进行判断比较，
如果root的值大于L且小于R，
则说明L在root的左子树，R在root的右子树，
即把问题递归到它的左节点和右节点；
如果root的值比L小，
则说明修剪后的树在root的右子树上；
如果root的值比R大，
则说明修剪后的树在root的左子树上。
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if (root === null) {
        return null;
    }
    if (root.val >= L && root.val <= R) {
        root.left = trimBST(root.left,L,R);
        root.right = trimBST(root.right,L,R);
        return root;
    }
    if (root.val < L) {
        return trimBST(root.right,L,R);
    }
    if (root.val > R) {
        return trimBST(root.left,L,R);
    }
};
