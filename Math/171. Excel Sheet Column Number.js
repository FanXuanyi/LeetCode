/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
 */

/*
题目：
给定一个表格中的列标题，返回其对应的数字。

分析：
A~Z代表26进制数，该题的意思是将26进制数转换为其对应的十进制数。
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0;
    for (let i = 0; i < s.length; i++) {
        result = result * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }
    return result;
};
