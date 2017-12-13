/*
Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's,
and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.

Example 1:
Input: "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

Example 2:
Input: "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.

Note:
1. s.length will be between 1 and 50,000.
2. s will only consist of "0" or "1" characters.
 */

/*
题目：
给定一个字符串s，计算由相同个数的0和1组成的非空连续子字符串的个数，
在这些子字符串中，所有的0和所有1都是连续的，
子字符串可以重复。

分析：
举个例子，字符串为"00110011"，
那么满足题目要求的子字符串有六个，即："0011"、"01"、"1100"、"10"、"00011"、"01"，
所以，我们首先需要计算0或1连续的个数，
遍历字符串，用cur表示当前连续的个数，初值为1（题目说明字符串的长度最小为1），
pre表示上一次连续的个数，
如果当前字符与下一个字符相等，则cur加1，
否则，将cur的值赋给pre后再将cur的值置为1，
然后判断pre与cur的大小，
如果pre大于或等于cur，则说明上一次连续的个数大于或等于当前的，
也就是说可以得到满足要求的子字符串，
那么就可以将count加1，
最后返回count即可。
 */

/**
 * @param {string} s
 * @return {number} count
 */
var countBinarySubstrings = function(s) {
    var pre = 0,
        cur = 1,
        count = 0;
    for (let i=0; i<s.length-1; i++) {
        if (s[i] === s[i+1]) {
            cur++;
        }
        else {
            pre = cur;
            cur = 1;
        }
        if (pre >= cur) {
            count++;
        }
    }
    return count;
};
