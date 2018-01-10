/*
Given a non-empty binary tree,
return the average value of the nodes on each level in the form of an array.

Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

Note: The range of node's value is in the range of 32-bit signed integer.
 */

/*
题目：
给定一个非空二叉树，以数组的形式返回每一层节点的平均值。

分析：
遍历这个二叉树，除了需要将树的每一层的节点值相加，还要统计每一层节点的个数。
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
var averageOfLevels = function(root) {
    var sumArr = [];
    var countArr = [];
    var sum = function(node, level) {
        if (!node) {
            return;
        }
        if (!sumArr[level]) {
            sumArr[level] = 0;
        }
        sumArr[level] += node.val;
        if (!countArr[level]) {
            countArr[level] = 0;
        }
        countArr[level]++;
        sum(node.left, level + 1);
        sum(node.right, level + 1);
    };
    sum(root, 0);
    var aveArr = sumArr.map((sum, level) => sum / countArr[level]);
    return aveArr;
};
