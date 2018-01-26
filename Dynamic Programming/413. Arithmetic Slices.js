/*
A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9

The following sequence is not arithmetic.

1, 1, 2, 5, 7


A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.

Example:

A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
 */

/*
题目：
如果一个数列是由至少三个元素组成的，
并且两个连续元素之间的差是相同的，则称为等差数列。
给定一个零索引的数组A，它包含N个数。
写一个方法，返回这个数组中能够构成等差数列的子数组的个数。

分析：
先来给一些等差数列来看其规律：
数组元素个数小于3时，其等差数列子数组的个数为0；
数组[1, 2, 3]的等差数列子数组的个数为1，比数组元素小于3时多1个；
数组[1, 2, 3, 4]的等差数列子数组的个数为3，比数组为[1, 2, 3]时多2个；
数组[1, 2, 3, 4, 5]的等差数列子数组的个数为6，比数组为[1, 2, 3, 4]时多3个；
数组[1, 2, 3, 4, 5, 6]的等差数列子数组的个数为10，比数组为[1, 2, 3, 4, 5]时多4个；
可以发现，如果下一个数加到数组中仍可以构成等差数列时，
总数目的值就会依次增加1, 2, 3, 4, ...
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    if (A.length < 3) {
        return 0;
    }
    var count = 0,
        add = 0;
    for (let i = 0; i < A.length-2; i++) {
        let diff = A[i+1] - A[i];
        if ((A[i+2] - A[i+1]) === diff) {
            count += ++add;
        } else {
            add = 0;
        }
    }
    return count;
};
