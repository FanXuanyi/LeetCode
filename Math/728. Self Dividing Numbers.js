/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:

Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

Note:
The boundaries of each input argument are 1 <= left <= right <= 10000.
 */

/*
题目：
自整除数是指它可以除尽所包含的每一个数字。
同时，自整除数中任何一位上的数都不能为0。
给定一个最小和最大的数边界，输出在这个边界中所有的自整除数。

分析：
遍历这个边界范围的所有数，依次判断是否是自整除数。
写一个方法来判断一个数是否是自整除数，
由自整除数的定义，
所以我们需要获取一个数的每一位，
并且判断每一位是否为0，以及是否可以被整除，
如果数中的一位为0，或不能被整除，则该数不是自整除数，返回false。
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var result = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) {
            result.push(i);
        }
    }
    return result;
};

var isSelfDividingNumber = function(num) {
	let temp = num;
    while (temp !== 0) {
        let remainder = temp % 10;
        let divide = Math.floor(temp / 10);
        if (remainder === 0 || num % remainder !== 0) {
            return false;
        } else {
            temp = divide;
        }
    }
    return true;
};
