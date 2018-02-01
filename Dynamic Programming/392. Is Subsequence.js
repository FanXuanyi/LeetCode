/*
Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.
 */

/*
题目：
给定一个字符串s和一个字符串t，判断s是否是t的子序列。
假定s和t中只有小写的英语字母，t是一个很长的字符串，s是一个很短的字符串。
字符串的子序列是指通过删除原字符串中一些字符（可以一个都不删除）并不改变其他字符的相对位置而得到的一个新字符串。

分析：
遍历s字符串，依次判断s中的字符是否在t中存在，
如果存在，用indexOf()方法返回其在t中的索引，
再从该索引处继续向后查找下一个字符的位置，
如果字符不存在，则返回false。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var index = 0;
    for (let i = 0; i < s.length; i++) {
        index = t.indexOf(s[i], index);
        if (index === -1) {
            return false;
        }
        index++;
    }
    return true;
};
