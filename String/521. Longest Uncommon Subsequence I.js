/*
Given a group of two strings, you need to find the longest uncommon subsequence of this group of two strings.
The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.
A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements.
Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be two strings, and the output needs to be the length of the longest uncommon subsequence.
If the longest uncommon subsequence doesn't exist, return -1.

Example 1:
Input: "aba", "cdc"
Output: 3
Explanation: The longest uncommon subsequence is "aba" (or "cdc"),
because "aba" is a subsequence of "aba",
but not a subsequence of any other strings in the group of two strings.

Note:
1. Both strings' lengths will not exceed 100.
2. Only letters from a ~ z will appear in input strings.
 */

/*
题目：
给定两个字符串，你需要找到这两个字符串中最长不同子序列，
最长不同子序列被定义为是其中一个字符串的子序列但不是其他字符串的子序列，
字符串的子序列可以通过删除一些字符而不改变其余元素的顺序来从一个序列中派生出来，
一般来说，任何字符串都是它自身的子序列，
空字符串是任何字符串的子序列，
求最长子序列长度，如果最长的子序列不存在，则返回-1。

分析：
如果两个字符串不等长，那么长的那个字符串一定是最长子序列，
如果等长，就判断两个字符串是否相等，
如果完全相等，则说明最长子序列不存在，返回-1。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    var lenA = a.length,
        lenB = b.length;
    if (lenA !== lenB) {
        return lenA > lenB ? lenA : lenB;
    }
    else {
        if (a === b) {
            return -1;
        }
        else {
            return lenA;
        }
    }
};

/*
下面的代码写法与上述思想一致。
 */
var findLUSlength = function(a, b) {
    var lenA = a.length,
        lenB = b.length;
    if (a === b) {
        return -1;
    }
    else {
        return lenA >= lenB ? lenA : lenB;
    }
};
