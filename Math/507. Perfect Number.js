/*
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

Example:

Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14

Note: The input number n will not exceed 100,000,000. (1e8)
 */

/*
题目：
完美数是指一个正整数等于除了它本身的所有正约数的和。
现在，给定一个整数n，写一个方法判断一个数是否是完美数，如果是返回true，否则返回false。

分析：
根据完美数的定义，可以发现，
我们需要找出一个数除了它自身的其他所有约数，
然后将约数相加，判断相加后的结果是否等于该数即可，
这里需要注意数为0和1的情况。
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) {
        return false;
    }
    var sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return num === sum;
};
