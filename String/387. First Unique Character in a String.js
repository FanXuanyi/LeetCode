/*
Given a string, find the first non-repeating character in it and return it's index.
If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.
 */

/*
题目：
给定一个字符串，找到第一个不重复的字符，返回它的索引，
如果不存在，返回-1。

分析：
用数组的indexOf()和lastIndexOf()方法，
如果两个方法返回的索引值一样，则说明该字符只出现过一次，
否则出现多次。
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i=0; i<s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i]))
            return i;
    }
    return -1;
};
