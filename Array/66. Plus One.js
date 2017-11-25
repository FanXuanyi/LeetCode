/*
Given a non-negative integer represented as a non-empty array of digits,
plus one to the integer.

You may assume the integer do not contain any leading zero,
except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.
 */

/*
题目：
假设有一个非负整数，它由一个非空数组表示，
该数组是由它每一位的数字组成，
给这个整数加1。

分析：
由题意，数组中的第一个元素是该整数的最高位，
数组中的最后一个元素是该整数的个位数字，
这个题目需要我们将整数加1，再将每一位数字由数组表示输出，
那么，就需要我们从数组的末端开始向前遍历，
在这里，需要考虑到进位的问题，
将进位carry的初始值赋为1，
因为需要将这个数加1，也就是首先要在个位数上加1，
遍历过程中，将每一位与进位相加的和赋值为sum，
sum除以10，得到的余数为新数组当前位置上的数，
向下取整得到的整数为进位，
当数组遍历结束后，
如果进位为1，则需要在新数组的首位添加数1。
 */

/**
 * @param {number[]} digits
 * @return {number[]} newDigits
 */
var plusOne = function(digits) {
    var newDigits = [],
        carry = 1,
        sum = 0;
    for (var i=digits.length-1; i>=0; i--) {
        sum = digits[i] + carry;
        newDigits[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }
    if (carry === 1) {
        newDigits.unshift(1);
    }
    return newDigits;
};
