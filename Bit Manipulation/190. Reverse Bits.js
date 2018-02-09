/*
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).
 */

/*
题目：
给定一个32位无符号数，反转它。

分析：
将给定数用二进制表示，然后反转，再转为十进制数返回即可。
这里需要注意的是，使用toString()方法将十进制转为二进制时，
二进制形式下不一定是32位，这时需要自己将高位用0补齐。
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = n.toString(2).split("").reverse();
    while (res.length < 32) {
        res.push('0');
    }
    var num = res.join("");
    return parseInt(num, 2);
};
