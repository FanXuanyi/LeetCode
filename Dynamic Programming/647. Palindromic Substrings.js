/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Note:
1. The input string length won't exceed 1000.
 */

/*
题目：
给定一个字符串，你的任务是计算该字符串中有多少个回文子字符串。
字符串有不同的开始或结束索引都视为不同的子字符串，即使它们包含相同的字符。

分析：
先写一个方法，判断字符串是否是回文字符串，
传入三个参数，即字符串，左端索引位置和右端索引位置，
如果左右两边字符相等，且没有超出字符串的索引，
则为回文，count加1，
然后继续比较左右两边字符，left减1，right加1，
如果回文字符串有奇数个字符，则以当前位置i为回文字符串的中心，
如果回文字符串有偶数个字符，则以当前位置i和i+1为回文字符串的中心。
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (s.length === 0) {
        return 0;
    }
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        count += countPalindromicSubstrings(s, i, i);
        count += countPalindromicSubstrings(s, i, i+1);
    }
    return count;
};

var countPalindromicSubstrings = function(str, left, right) {
    let count = 0;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        count++;
        left--;
        right++;
    }
    return count;
};
