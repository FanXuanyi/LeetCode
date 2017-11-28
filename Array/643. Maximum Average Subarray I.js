/*
Given an array consisting of n integers,
find the contiguous subarray of given length k that has the maximum average value. 
And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

Note:
1. 1 <= k <= n <= 30,000.
2. Elements of the given array will be in the range [-10,000, 10,000].
 */

/*
题目：
假设有一个由整数组成的数组，
找到长度为k的连续子数组的最大平均值。
你需要输出这个最大平均值。

分析：
遍历数组，依次计算每k个数相加的和，
将得到的和除以k便得到每个子数组的平均值，
把这些平均值放在一个数组avg中，
再从avg中找到最大值，即为所求。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number} maxAvg
 */
var findMaxAverage = function(nums, k) {
    var sum = 0,
        avg = [];
    for (let i=0; i<nums.length-k+1; i++) {
        for (let j=i; j<k+i; j++) {
            sum += nums[j];
        }
        avg.push(sum/k);
        sum = 0;
    }
    var maxAvg = avg[0];
    for (let i=1; i<avg.length; i++) {
        if (maxAvg < avg[i]) {
            maxAvg = avg[i];
        }
    }
    return maxAvg;
};
