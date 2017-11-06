/*
We have two special characters. The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Now given a string represented by several bits.
Return whether the last character must be a one-bit character or not.
The given string will always end with a zero.

Example 1:
Input: bits = [1, 0, 0]
Output: True
Explanation:
The only way to decode it is two-bit character and one-bit character.
So the last character is one-bit character.

Example 2:
Input: bits = [1, 1, 1, 0]
Output: False
Explanation:
The only way to decode it is two-bit character and two-bit character.
So the last character is NOT one-bit character.

Note:
1. 1 <= len(bits) <= 1000.
2. bits[i] is always 0 or 1.
 */

/*
题目：
有两种特殊的字符。一种是一位字符，由0表示，另一种是两位字符，由10或11表示。
现在假设有一个由几个特殊字符组成的数组，来判断最后一位是否为一位字符。
并且最后一位始终是0。

分析：
遍历这个数组，并设置一个变量i来记录当前遍历到的位置，
根据题意和例子可以发现，
遍历到1时，一定是两位字符，遍历到0时，一定是一位字符，
所以，在遍历数组时，遇见1就让i加2，遇见0就让i加1，
因为题目说最后一位一定是0，所以就不需要再判断最后一位了，只需要判断到倒数第二位，
当循环结束后，i的值正好与数组长度减1的值相等，则为true，即最后一位是一位字符。
 */

/**
 * @param {number[]} bits
 * @return {boolean} flag
 */
var isOneBitCharacter = function(bits) {
    var flag = false;
    var i = 0,
        len = bits.length;
    while (i < len-1) {
        if (bits[i] === 0) {
            i++;
        }
        if (bits[i] === 1) {
            i += 2;
        }
    }
    if (i === len-1) {
        flag = true;
    }
    return flag;
};
