/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

/*
题目：
求一个数组中的连续子数组的和的最大值。

分析：
最直观的方法就是，遍历这个数组，获取所有子数组并求出它们的和，
然后找出其中的最大值，这个方法最快也要O(n^2)的时间，并不是最优的解法。

换一种考虑方式：
先来分析数组的规律，从头到尾开始累加例子中的数，初始化和为0，
首先，加上第一个数字-2，此时和为-2，
然后加上1，此时和为-1，得到的这个和比1本身还要小，
也就是说，从第一个数开始的子数组的和会小于从第二个开始的子数组，
所以，我们不需要考虑从第一个数开始的子数组，之前累加的和也舍弃，
然后我们从第二个数开始累加，此时和为1，
然后加上-3，此时和为-2，
再加上4，此时和为2,2比4要小，
所以舍弃之前累加的和，从第四个数4开始，依次类推，
同时，设置一个变量max，初始化为第一个数的值，
将每次获取的子数组的和sum与max比较，
将较大值存在max中，
最后输出返回max即可。
 */

/**
 * @param {number[]} nums
 * @return {number} max
 */
var maxSubArray = function(nums) {
    var sum = 0,
        max = nums[0];
    for (var i=0; i<nums.length; i++) {
        sum += nums[i];
        if (sum <= nums[i]) {
            sum = nums[i];
        }
        max = Math.max(max,sum);
    }
    return max;
};
