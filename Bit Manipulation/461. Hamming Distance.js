/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 2^31.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
 */

/*
题目：
两个整数的汉明距离是指其对应位不同的数量。
给定两个整数x和y，计算它们的汉明距离。

分析：
这一题需要我们计算两个二进制数对应位不同的个数，
我想到了异或的概念，相同为0，不同为1，
先将两个数进行异或操作，
然后表示成二进制数的形式，
最后统计1的个数，即为所求。
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var count = 0;
    var res = (x ^ y).toString(2);
    for (let i =0; i < res.length; i++) {
        if (res[i] === '1') {
            count++;
        }
    }
    return count;
};
