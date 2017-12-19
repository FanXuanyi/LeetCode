/*
Given a string and an integer k,
you need to reverse the first k characters for every 2k characters counting from the start of the string.
If there are less than k characters left, reverse all of them.
If there are less than 2k but greater than or equal to k characters,
then reverse the first k characters and left the other as original.

Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Restrictions:
1. The string consists of lower English letters only.
2. Length of the given string and k will in the range [1, 10000]
 */

/*
题目：
给定一个字符串和整数k，
从字符串开始数起，每2k个字符中的前k个字符反转，
如果少于k个字符，反转所有字符，
如果大于或等于k个字符且少于2k个字符，反转前k个字符，其他字符保持不变。

分析：
首先，将字符串转为数组，
然后，每2k个元素为一组进行反转操作，
如果每一组的长度大于或等于k，则反转前k个元素，
如果长度小于k，则反转所有元素，
最后，将数组转为字符串返回即可。
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	let arrS = s.split("");
    for (let i=0; i<arrS.length; i+=2*k) {
        reverse(arrS, i, i+k-1);
    }
    return arrS.join("");
};

var reverse = function(arr,start,end) {
    if (end > arr.length-1) {
        end = arr.length - 1;
    }
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
};
