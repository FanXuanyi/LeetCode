/*
Given an integer array,
find three numbers whose product is maximum and output the maximum product.

Example 1:
Input: [1,2,3]
Output: 6

Example 2:
Input: [1,2,3,4]
Output: 24

Note:
1. The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
2. Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
 */

/*
题目：
假设有一个整数数组，
找到三个数，它们的乘积是最大值，输出最大值。

分析：
首先，我想到的是，
既然乘积要大，那么乘数也要大，
所以，用sort()方法将数组中的数按从小到大的顺序排列，
然后取最大的三个数相乘。
但是，这里忽略了两个负数相乘也是正数的情况，
接下来，对正负数进行判断分析，
如果整个数组的数都是正数或者都是负数，
那么，最大乘积一定是最后三个数相乘的结果，
如果只有最后一个数或最后两个数是正数，
那么，最大乘积可能是最后一个数和最前面两个数相乘的结果，
由此可以发现，
在这个按从小到大排序后的数组中，
我们只需要考虑三种可能：
一种是最前面的三个数相乘，
一种是最后面三个数相乘，
一种是最后面一个数和最前面两个数相乘，
比较三种可能得到的乘积结果，
其中的最大值即为所求。
 */

/**
 * @param {number[]} nums
 * @return {number} product
 */
var maximumProduct = function(nums) {
    nums.sort( (x,y) => (x-y) );
    var product = nums[0] * nums[1] * nums[2];
    product = Math.max(product, nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3]);
    product = Math.max(product, nums[nums.length-1] * nums[0] * nums[1]);
    return product;
};
