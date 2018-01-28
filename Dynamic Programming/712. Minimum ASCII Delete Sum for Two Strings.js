/*
Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

Example 1:

Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

Example 2:

Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.

Note:
	0 < s1.length, s2.length <= 1000.
	All elements of each string will have an ASCII value in [97, 122].
 */

/*
题目：
给定两个字符串s1，s2，删除一些字符使这两个字符串相等，
求这些删除的字符的最小的ASCII码值总和。

分析：
用一个二维数组dp[i][j]表示s1前i个字符和s2前j个字符满足条件的ASCII值，
考虑如下三种情况：
一是当字符串s1中多了一个字符，s2中字符不变时，
则需要删除s1中多的那一个字符，dp[i][j]=dp[i-1][j]+a，a为删除的那个字符的ASCII值;
二是当字符串s2中多了一个字符，s1中字符不变时，
则需要删除s2中多的那一个字符，dp[i][j]=dp[i][j-1]+a，a为删除的那个字符的ASCII值;
三是当字符串s1和s2中都多了一个字符时，dp[i][j]=dp[i-1][j-1]+value,
如果两个字符串多出的字符相等，则value=0，
否则value的值为这多出的两个字符的ASCII值之和，
每次取三种情况下的最小值保存。
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    var dp = [];
    for (let i = 0; i <= s1.length; i++) {
        dp[i] = [];
    }
    dp[0][0] = 0;
    for (let i = 1; i <= s1.length; i++) {
        dp[i][0] = dp[i-1][0] + s1.charCodeAt(i-1);
    }
    for (let j = 1; j <= s2.length; j++) {
        dp[0][j] = dp[0][j-1] + s2.charCodeAt(j-1);
    }
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            let value = s1[i-1] === s2[j-1] ? 0 : s1.charCodeAt(i-1) + s2.charCodeAt(j-1);
            dp[i][j] = Math.min(dp[i-1][j-1]+value, dp[i-1][j]+s1.charCodeAt(i-1), dp[i][j-1]+s2.charCodeAt(j-1));
        }
    }
    return dp[s1.length][s2.length];
};
