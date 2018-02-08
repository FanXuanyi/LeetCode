/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
 */

/*
题目：
给定一个无符号整数，返回该整数二进制表达中1的个数（即汉明重量）。

分析：
这一题与461. Hamming Distance这一题很类似，
只是这里不需要进行异或操作，只需找出1的个数即可。
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    var res = n.toString(2);
    for (let i =0; i < res.length; i++) {
        if (res[i] === '1') {
            count++;
        }
    }
    return count;
};
