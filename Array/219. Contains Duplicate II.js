/*
Given an array of integers and an integer k,
find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
 */

/*
题目：
假设有一个整数数组和一个整数k，
找出是否有两个不同索引i和j满足nums[i] = nums[j]，且|i-j|不超过k。

分析：
遍历数组，依次将第一个数与它后面的数进行比较，
如果找到了相等的两个数，
再判断j-i的值是否小于等于k的值，
如果j-i的值小于等于k，
则返回true，跳出循环。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean} flag
 */
var containsNearbyDuplicate = function(nums, k) {
    var flag = false;
    for (var i=0; i<nums.length; i++) {
        for (var j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j] && j-i <= k) {
                flag = true;
                break;
            }
        }
    }
    return flag;
};
