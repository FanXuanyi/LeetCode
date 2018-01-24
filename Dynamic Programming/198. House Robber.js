/*
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed,
the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 */

/*
题目：
你是一个专业的抢劫犯，计划沿着一条街抢劫房子。
每个房子里藏匿着一定数量的金钱，相邻的房子之间连接着安全系统，
只有当你在同一个晚上抢劫两个相邻房子时，才会报警。

给定一个非负整数列表，该列表代表每个房子中的金额，
求出你在当晚不惊动警察的情况下获得的最大金额。

分析：
由题意，不能连续相加两个相邻的数，要至少间隔一个数相加，
如果给定列表为[A1, A2]，那么，所求为A1、A2中的最大值；
如果给定列表为[A1, A2, A3]，那么，所求为A1+A3、A2中的最大值；
如果给定列表为[A1, A2, A3, A4]，那么，所求为A1+A3、A2、A1+A4、A2+A4中的最大值，
其中，A1+A3、A2中的最大值为列表为[A1, A2, A3]时的结果，
A1+A4、A2+A4中的最大值是列表为[A1, A2]时的结果再加上A4的值；
由此可以得出如下规律：
记由n个数组成的列表中所求的最大值为f(n)，
则可得，f(n) = max{ f(n-1), f(n-2)+An }。
因为可能出现没有抢劫最后一间房子就达到最大值的情况，
所以需要取数组中最后两项的最大值作为返回结果。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length;
    if (len === 0)
        return 0;
    if (len === 1)
        return nums[0];
    if (len === 2)
        return Math.max(nums[0], nums[1]);
    var f = [];
    for (let i = 0; i < len; i++) {
        if (i === 0) {
            f[i] = nums[i];
        } else {
            if (i === 1) {
                f[i] = Math.max(nums[i-1], nums[i]);
            } else {
                f[i] = Math.max(f[i-1], f[i-2]+nums[i]);
            }
        }
    }
    return Math.max(f[len-1], f[len-2]);
};
