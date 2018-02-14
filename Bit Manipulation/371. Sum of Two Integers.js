/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.
 */

/*
题目：
计算两个整数a、b的和，不能使用操作符+和-。

分析：
在不能使用+和-的情况下，考虑位运算。
在不考虑进位的情况下，a异或b即为正确结果，
在只算进位的情况下，相同位上同时为1时才会向前进位，
所以先将a与b，再将进行与运算后的值左移一位，即为所得结果，
把上述两种情况产生的值相加，即为最终结果，
也就是说，一直重复这样的过程，直到进位值为0。
这里用到了半加法的思想。
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var sum = a;
    while (b !== 0) {
        sum = a ^ b;
        b = (a & b) << 1;
        a = sum;
    }
    return sum;
};
