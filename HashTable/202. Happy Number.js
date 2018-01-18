/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process:
Starting with any positive integer,
replace the number by the sum of the squares of its digits,
and repeat the process until the number equals 1 (where it will stay),
or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1
 */

/*
题目：
写一个算法，判断它是不是开心数。
开心数由以下过程定义：
从任意正整数开始，用它每一位上数字的平方和代表该数，
重复这个过程，直到这个数为1，或者在一个不包含1的情况下无线循环。
这个过程以1结尾的数为开心数。

分析：
首先，将一个数的每个位的平方相加，
然后，用一个集合统计每次相加后和出现的次数，
如果一个数出现的次数超过一次，则退出循环，
判断当前数是否为1，如果为1，返回true，否则返回false。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var count = {};
    while (true) {
        var sum = 0;
        while (n) {
            sum += (n%10) * (n%10);
            n = Math.floor(n/10);
        }
        n = sum;
        if (count[sum] === undefined) {
            count[sum] = 1;
        } else {
        	break;
        }
    }
    if (n === 1) {
    	return true;
    } else {
    	return false;
    }
};
