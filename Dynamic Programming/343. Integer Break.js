/*
Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: You may assume that n is not less than 2 and not larger than 58.
 */

/*
题目：
给定一个正整数n，将其分解为至少两个正数，分解的数相加的和为这个数n，
返回分解后的这些数的最大乘积。
假定n不小于2且不大于58。

分析：
用dp[n]表示n分解后的最大乘积。
先来给出一些数字看看其规律：
n=2时，2=1+1，dp[2]=1*1=1；
n=3时，3=1+1+1=1+2，dp[3]=1*2=2；
n=4时，4=1+1+1+1=1+3=2+2，dp[4]=2*2=4；
n=5时，5=2+3，dp[5]=2*3=6；
n=6时，6=3+3，dp[6]=3*3=9；
n=7时，7=3+4，dp[7]=3*4=12；
n=8时，8=2+3+3，dp[8]=2*3*3=2*dp[6]=18；
n=9时，9=2+3+4，dp[9]=2*3*4=4*dp[5]=24；
n=10时，10=2+2+3+3，dp[10]=2*2*3*3=2*dp[8]=36；
由此可以发现，任何一个大于1的正整数都是可以分解为两个数相加，
为了求得最大乘积，只要这两个数对应的最大乘积相乘即可，
那么可得如下规律：
dp[n]= max{i*(n-i), i*dp[n-i]}。
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    var dp = [];
    dp[1] = 1;
    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        dp[i] = 0;
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j*(i-j), j*dp[i-j]);
        }
    }
    return dp[n];
};

/*
由均值不等式可以知道，
将n分解为若干个相等的数时，乘积最大，
设最大乘积为f(x)，若干个相等的数为x，x的个数为(n/x)，
则有f(x)=x^(n/x)，
对f(x)求导可得，当x=e时，f(x)最大，
因为e=2.71828...，所以取3，
那么，将n拆解为尽量多个3时，乘积最大。
 */
var integerBreak = function(n) {
    if (n === 2)
        return 1;
    if (n === 3)
        return 2;
    var product = 1;
    while (n > 4) {
        product *= 3;
        n = n - 3;
    }
    return n * product;
};
