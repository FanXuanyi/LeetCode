/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
 */

/*
题目：
给定一个整数（阿拉伯数字），将它转化为罗马数字。
输入范围在1到3999。

分析：
这一题与13. Roman to Integer.js这一题刚好相反。
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var s = "";
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i = 0; num !== 0; i++) {
        while (num >= value[i]) {
            num -= value[i];
            s += roman[i];
        }
    }
    return s;
};
