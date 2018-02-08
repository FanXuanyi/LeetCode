/*
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S.
Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:

Input: nums is [1, 1, 1, 1, 1], S is 3.
Output: 5
Explanation:

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.

Note:
1. The length of the given array is positive and will not exceed 20.
2. The sum of elements in the given array will not exceed 1000.
3. Your output answer is guaranteed to be fitted in a 32-bit integer.
 */

/*
题目：
给定一组非负整数a1，a2，...，an，和一个目标S。
你有两个符号+和-。你可以给每一个整数添加一个+或-作为它的新符号。
找出有多少种方法指定符号使整数和等于目标数S。

分析：
假设给定数组为nums，目标值为S，
那么原数组可以分成两部分，一部分里面的元素前面添加+号，一部分添加-号，
然后将两部分添加符号后的值相加，即为S，
记添加+号的数组为P，添加-号的数组为Q，
那么可得如下两个式子：
S = sum(P) - sum(Q)，
sum(P) + sum(Q) = sum(nums)，
将上面两个式子相加化简可得，sum(P) = (S + sum(nums)) / 2，
可以发现，P序列中元素之和等于原序列之和与目标数的和的一半，
要找到满足题意的总个数，可以转换为找到符合P序列要求这样的子序列的总个数，
如果原序列之和与目标数的和为奇数或是原序列之和小于目标数，
则这样的子序列肯定不存在。
用dp[i]表示子序列元素之和等于当前目标值的方案个数。
 */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum < S || (sum+S)%2 !== 0) {
        return 0;
    }
    var target = (S + sum) / 2;
    var dp = [];
    for (let i = 0; i <= target; i++) {
        dp[i] = 0;
    }
    dp[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] += dp[j-nums[i]];
        }
    }
    return dp[target];
};

