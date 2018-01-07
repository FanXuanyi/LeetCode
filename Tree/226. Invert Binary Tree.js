/*
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9

to

     4
   /   \
  7     2
 / \   / \
9   6 3   1
 */

/*
题目：
翻转一个二叉树。

分析：
依次遍历树的每个节点，交换节点的左右子树。
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
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    var treeTemp = new TreeNode();
    treeTemp = root.left;
    root.left = root.right;
    root.right = treeTemp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
