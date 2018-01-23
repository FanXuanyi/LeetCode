/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output:  2
Explanation:  There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output:  3
Explanation:  There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

/*
题目：
你在爬楼梯。需要n步到达顶端。
每次你可以爬1步或2步。有多少种不同的方法爬到顶端？
给定的n是一个正数。

分析：
当n为1时，很显然，只需要爬1步就到了；
当n为2时，有两种方法，一是每次都爬1步，二是一次爬2步；
当n为3时，因为每次可以爬1步或2步，
所以，当再爬一次到顶端时，可以是1步或是2步，
如果是1步，则在n为2的情况下再爬1步，此时有两种方法，
如果是2步，则在n为1的情况下再爬2步，此时有一种方法，
那么，n为3时，有三种方法；
像这样依此类推，可以发现这是一个斐波那契数列问题，
第一项为1，第二项为2，第三项为3，每一项的值是前两项之和。

然后我采用递归的方法写出如下代码：
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    return climbStairs(n-1) + climbStairs(n-2);
};
此时，显示Time Limit Exceeded错误，
这是因为用递归方法会出现大量重复的计算，
其计算的时间复杂度是以n的指数的方式递增的，
为了避免重复计算，可以将已经得到的数列中间项保存在一个数组中。
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    var f = [1, 2];
    for (let i = 2; i < n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f[n-1];
};
