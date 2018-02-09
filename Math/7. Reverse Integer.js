/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/*
题目：
给定一个32位有符号整数，反转这个整数的位。

分析：
将数字转为字符数组，反转字符数组后再转为数字返回即可。
这里有几点需要注意：
一是有负号的时候；
二是数字末尾有0时；
三是32位有符号整数的范围。
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var max32BitInteger = 2147483647;
    if (Math.abs(x) > max32BitInteger || x === 0) {
        return 0;
    }
    var res = 0;
    var nums = x.toString().split("");
    if (nums[0] === '-') {
        nums.shift();
        nums.reverse();
        while (nums[0] === '0') {
            nums.shift();
        }
        nums.unshift('-');
        res = parseInt(nums.join(""));
        return Math.abs(res) > max32BitInteger ? 0 : res;
    } else {
        nums.reverse();
        while (nums[0] === '0') {
            nums.shift();
        }
        res = parseInt(nums.join(""));
        return Math.abs(res) > max32BitInteger ? 0 : res;
    }
};
