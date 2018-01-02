/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
 */

/*
题目：
给定两个二进制字符串，返回它们的和（也是一个二进制字符串）。

分析：
因为是两个数相加，所以需要从字符串的尾端开始遍历计算，
因为是二进制字符串，所以只有0和1，
这里用变量c保存进位的值。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var s = "";
    var c = 0;
    var i = a.length - 1,
        j = b.length - 1;
    while (i >= 0 || j >= 0 || c === 1) {
        c += i>=0 ? parseInt(a[i--]) : 0;
        c += j>=0 ? parseInt(b[j--]) : 0;
        s = c%2 + s;
        c = parseInt(c/2);
    }
    return s;
};
