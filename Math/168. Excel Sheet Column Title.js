/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
 */

/*
题目：
给定一个正整数，返回它在表格中对应的列标题。

分析：
A~Z代表26进制数，该题正好与171. Excel Sheet Column Number这一题相反。
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var s = "";
    while (n) {
        s = String.fromCharCode((n-1) % 26 + 'A'.charCodeAt(0)) + s;
        n = Math.floor((n-1) / 26);
    }
    return s;
};
