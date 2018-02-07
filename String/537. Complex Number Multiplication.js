/*
Given two strings representing two complex numbers.

You need to return a string representing their multiplication.
Note i^2 = -1 according to the definition.

Example 1:

Input: "1+1i", "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.

Example 2:

Input: "1+-1i", "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.

Note:
1. The input strings will not have extra blank.
2. The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.
 */

/*
题目：
给定两个字符串表示两个复数。
你需要返回一个表示它们乘积的字符串。

分析：
写一个方法，返回一个数组，
该数组中存储复数的实部和虚部，
然后将计算的结果拼接成字符串返回输出即可。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    let x = divideNum(a);
    let y = divideNum(b);
    return (x[0]*y[0] - x[1]*y[1]) + "+" + (x[0]*y[1] + x[1]*y[0]) + "i";
};

var divideNum = function(num) {
    let real = num.split("+");
    let imaginary = real[1].slice(0, real[1].length-1);
    let res = [];
    res[0] = real[0];
    res[1] = imaginary;
    return res;
};
