/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:
    It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
    Space complexity should be O(n).
    Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 */

/*
题目：
给定一个非负整数num。
对于每一个数i，i在0到num的范围内，
计算每一个数二进制形式下的1的个数，
并以数组的形式返回输出。
时间复杂度和空间复杂度应该都为O(n)。

分析：
先列出一串数字来看看规律：
	0	0000	0个
	1	0001	1个
	2	0010	1个
	3	0011	2个
	4	0100	1个
	5	0101	2个
	6	0110	2个
	7	0111	3个
	8	1000	1个
num=0时，结果为[0];
num=1时，结果为[0, 1]，该结果的第二个值为第一个的值加1;
num=2时，结果为[0, 1, 1];
num=3时，结果为[0, 1, 1, 2]，该结果的第三、四个值为前两个的值加1;
num=4时，结果为[0, 1, 1, 2, 1];
num=5时，结果为[0, 1, 1, 2, 1, 2];
num=6时，结果为[0, 1, 1, 2, 1, 2, 2];
num=7时，结果为[0, 1, 1, 2, 1, 2, 2, 3]，该结果的后四个的值为前四个的值加1;
num=8时，结果为[0, 1, 1, 2, 1, 2, 2, 3, 1];
可以发现，每一次加1都是以2的倍数为界限，
对于2^N个数而言，后2^(N-1)个数的重复规律，正好等于前2^(N-1)个数的重复规律再加1。
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = [];
    result[0] = 0;
    var N = 1;
    while (N <= num) {
        let next = 2 * N;
        for (let i = N; i < next && i <= num; i++) {
            result[i] = result[i-N] + 1;
        }
        N = next;
    }
    return result;
};
