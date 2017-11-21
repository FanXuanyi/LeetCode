/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
find the one that is missing from the array.

For example:
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity.
Could you implement it using only constant extra space complexity?
 */

/*
题目：
假设有一个数组，包含n个不同的数，
这n个数从0, 1, 2, ..., n中选取，
找到其中缺失的一个数。

分析：
最简单的做法是：
将原来的n+1个数相加，再遍历数组将n个数相加，
最后将两个相加得到的和相减，即为所求。
但是，这里存在一个问题，即累加这些数可能会出现溢出的情况，
考虑到这种可能，可以换一种考虑方式，
在遍历数组时，将result值
一边加上数组的索引值（其实指的是0,1,2,..,n），
一边减去其对应的数值，
因为遍历数组的索引值只到n-1，
所以，在遍历结束后，需要将result加上n，其得到的结果为所求。
 */

/**
 * @param {number[]} nums
 * @return {number} result
 */
var missingNumber = function(nums) {
    var result = 0;
    for (var i=0; i<nums.length; i++) {
        result += i;
        result -= nums[i];
    }
    result += i;
    return result;
};

/*
另一种解法，采用位操作的方法。
原始数组是0,..,n，抽取之后的新数组相比原始数组而言，少了一个元素，
所以，将两个数组组合在一起，只有一个的就是缺失的那个元素，
那么，我们将两个数组中的所有数进行异或操作（相同为0，不同为1），
最后得到的结果即为所求。
 */
var missingNumber = function(nums) {
    var result = 0;
    for (var i=0; i<nums.length; i++) {
        result ^= nums[i];
    }
    for (var j=0; j<=nums.length; j++) {
        result ^= j;
    }
    return result;
};
