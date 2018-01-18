/*
Count the number of prime numbers less than a non-negative number, n.
 */

/*
题目：
统计小于非负数n的质数个数。
 */

/*
分析：
质数是指，一个整数在大于1的自然数中，除了1和此整数自身外，没法被其他自然数整除的数。
特别的，1不是质数。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count = 0,
        flagArr = [];
    for (let i=2; i<n; i++) {
        if (flagArr[i] === undefined) {
            flagArr[i] = true;
            count++;
            for (let j=2; i*j<n; j++) {
                flagArr[i*j] = false;
            }
        }
    }
    return count;
};
