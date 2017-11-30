/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 */

/*
题目：
将数组向右移动k位再旋转。

分析：
该题目的意思就是，将数组末端的k个数移到数组的首端，
所以，我们可以将数组分割为两部分，
然后，将后面一部分子数组添加到另一子数组的前面即可。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    var arr = nums.splice(len-k,k);
    Array.prototype.unshift.apply(nums,arr);
};
