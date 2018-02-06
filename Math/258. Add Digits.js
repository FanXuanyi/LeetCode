/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
 */

/*
题目：
给定一个非负整数num，重复相加每一位上的数，直到结果只有一位数。

分析：
由题意，获取数中的每一位，将这些位相加，递归或循环直到结果只有一位数。
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    var sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return addDigits(sum);
};

/*
下面方法不用递归，只用循环。
 */
var addDigits = function(num) {
    while (num >= 10) {
        num = (num % 10) + Math.floor(num / 10);
    }
    return num;
};

/*
不使用循环和递归，时间复杂度为O(1)。
 */
var addDigits = function(num) {
    if (num === 0) {
        return 0;
    }
    return (num - 1) % 9 + 1;
};

/*
当num小于10时，所得结果为num；
num=10时，结果为1；
num=11时，结果为2；
...
num=18时，结果为9；
num=19时，结果为1；
num=20时，结果为2；
...
num=27时，结果为9；
num=28时，结果为1；
...
由此可以发现，每9个数为一个循环，
当num可以被9整除时，结果为9,；
当num不能被9整除时，结果为num%9。
 */
var addDigits = function(num) {
    if (num === 0) {
        return 0;
    }
    return num % 9 === 0 ? 9 : num % 9;
};
