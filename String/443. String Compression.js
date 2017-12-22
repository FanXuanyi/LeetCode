/*
Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.

Follow up:
Could you solve it using only O(1) extra space?

Example 1:
Input:
["a","a","b","b","c","c","c"]
Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

Example 2:
Input:
["a"]
Output:
Return 1, and the first 1 characters of the input array should be: ["a"]
Explanation:
Nothing is replaced.

Example 3:
Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation:
Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.

Note:
1. All characters have an ASCII value in [35, 126].
2. 1 <= len(chars) <= 1000.
 */

/*
题目：
给定一个字符数组，压缩它。
压缩后的长度必须小于或等于原始长度。
数组中的每个元素应该是长度为1的字符（不是int）。
在你修改输入数组后，返回这个数组的新长度。

分析：
从例子分析可以得出，我们需要统计每个字符的个数，
用prevChar保存上一个字符，curChar保存当前字符，
将两者进行比较，
如果相等，就将count加1，
如果不相等，或是遍历到最后一个字符时，就将prevChar和count的值保存下来，
再将count置为0，
这里还有两点需要再做判断，
一是字符只有一个时，我们只需保存字符即可，也就是说不需要保存个数，
二是判断数组中最后两个字符是否相等，
如果不等，需要将最后一个字符保存下来。
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars.length === 1) {
        return 1;
    }
    let prevChar = chars[0],
        count = 0,
        res = "";
    for (let i=1; i<chars.length; i++) {
        let curChar = chars[i];
        if (curChar === prevChar) {
            count++;
        }
        if (curChar !== prevChar || i === chars.length-1) {
            if (count <= 0) {
                res += prevChar;
            }
            else {
                res += prevChar + (count + 1);
            }
            count = 0;
            prevChar = curChar;
        }
    }
    if (chars[chars.length-1] !== chars[chars.length-2]) {
        res += chars[chars.length-1];
    }
    res = res.split("");
    for(let i in res){
        chars[i] = res[i];
    }
    chars.length = res.length;
    return res.length;
};
