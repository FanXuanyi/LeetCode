/*
Given two non-empty binary trees s and t,
check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.

Example 2:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
 */

/*
题目：
给定两个非空二叉树s和t，判断t是否是具有相同结构和相同节点值的一个s的子树。
s的子树是由一个节点和这个节点的所有后代组成的树。
树s也可以看作是它自身的一个子树。

分析：
遍历树，将树的结构以字符串的形式表示出来，即sStr和tStr，
再判断sStr是否包含tStr即可。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    var sStr = treeStr(s);
    var tStr = treeStr(t);
    return sStr.includes(tStr);
};

var treeStr = function(node) {
    if (node === null) {
        return "";
    }
    return "(" + node.val + "," + treeStr(node.left) + "," + treeStr(node.right) + ")";
};
