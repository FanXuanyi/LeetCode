/*
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.
 */

/*
题目：
写一个程序，判断一个数是否为丑数。
丑数是指只包含因子2、3、5的正数。
举个例子，6、8是丑数，但14不是，因为它包含另一个因子7。
1被认定为丑数。

分析：
根据丑数定义，需满足两点要求：
一是正数；
二是因子只能是2、3、5。
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0) {
        return false;
    }
    while (num%2 === 0) {
        num /= 2;
    }
    while (num%3 === 0) {
        num /= 3;
    }
    while (num%5 === 0) {
        num /= 5;
    }
    return num === 1;
};
