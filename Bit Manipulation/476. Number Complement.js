/*
Given a positive integer, output its complement number.
The complement strategy is to flip the bits of its binary representation.

Note:
1. The given integer is guaranteed to fit within the range of a 32-bit signed integer.
2. You could assume no leading zero bit in the integer’s binary representation.

Example 1:

Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

Example 2:

Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
 */

/*
题目：
给定一个正整数，输出它的补数。补充策略是指反转二进制中的每一位。

分析：
将数用二进制表示，遍历字符数组，遇见0就改成1，遇见1就改成0，
最后以十进制的形式输出即可。
 */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var bitNum = num.toString(2).split("");
    for (let i = 0; i < bitNum.length; i++) {
        if (bitNum[i] === '0') {
            bitNum[i] = '1';
        } else {
            bitNum[i] = '0';
        }
    }
    var res = bitNum.join("");
    return parseInt(res, 2);
};
