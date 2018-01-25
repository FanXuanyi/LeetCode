/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:

Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

Note:
1. You may assume that the array does not change.
2. There are many calls to sumRange function.
 */

/*
题目：
给定一个整数数组，找到从索引i到j所有元素的和。

分析：
索引i到j的值就是前j个数的和减去前i-1个数的和，
即this.sum[j]-this.sum[i-1]；
如果i=0，则返回this.sum[j]即可。
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum = [];
    if (nums.length === 0) {
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            this.sum.push(nums[0]);
        } else {
            this.sum.push(this.sum[i-1]+nums[i]);
        }
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i === 0 ? this.sum[j] : this.sum[j]-this.sum[i-1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
