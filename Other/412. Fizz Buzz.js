/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 */

/*
题目：
写一个方法输出一个字符串，该字符串由1到n表示。
但是，3的倍数应该输出"Fizz"，5的倍数应该输出"Buzz"，当一个数既是3的倍数又是5的倍数时，输出"FizzBuzz"。

分析：
创建一个字符数组，长度为n，
从数字1开始判断，是否能被3整除，是否能被5整除，
如果满足相应条件，就用相应的字符表示，
否则就是该数字，特别注意，数字要以字符的形式表示。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var strArr = [];
    for (let i = 0; i < n; i++) {
        let num = i + 1;
        if ((num % 3 === 0) && (num % 5 === 0)) {
            strArr[i] = "FizzBuzz";
        } else {
            if ((num % 3 === 0) && (num % 5 !== 0)) {
                strArr[i] = "Fizz";
            } else {
                if ((num % 3 !== 0) && (num % 5 === 0)) {
                    strArr[i] = "Buzz";
                } else {
                    strArr[i] = num.toString();
                }
            }
        }
    }
    return strArr;
};
