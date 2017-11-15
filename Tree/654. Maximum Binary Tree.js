/*
Given an integer array with no duplicates.
A maximum tree building on this array is defined as follow:
1. The root is the maximum number in the array.
2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    /
     2  0
       \
        1

Note:
1. The size of the given array will be in the range [1,1000].
 */

/*
题目：
假设有一个没有重复数字的整数数组。
由这个数组构成的最大树的定义如下：
1. 根是这个数组的最大数。
2. 左子树是由最大数左边的子数组构成。
3. 右子树是由最大数右边的子数组构成。

根据给出的数组构造最大树，并输出这个树的根节点。

分析：
1）构造findMaxIdx()获取根节点
由题意，遍历数组，找出数组中最大数的索引，即可得到最大数。
2）构造递归函数createBinaryTree来创建这个树
传入三个参数：数组nums，起始位置，终点位置。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (!nums || nums.length === 0)
        return null;
    return createBinaryTree(nums,0,nums.length-1);
};

var findMaxIdx = function(nums,begin,end) {
    var max = begin;
    for (var i=begin+1; i<=end; i++) {
        if (nums[max] < nums[i])
            max = i;
    }
    return max;
};

var createBinaryTree = function(nums,begin,end) {
    if (begin > end)
        return null;
    var maxIdx = findMaxIdx(nums,begin,end);
    var root = new TreeNode(nums[maxIdx]);
    root.left = createBinaryTree(nums,begin,maxIdx-1);//左子树
    root.right = createBinaryTree(nums,maxIdx+1,end);//右子树
    return root;
};
