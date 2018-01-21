/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:

    pattern = "abba", str = "dog cat cat dog" should return true.
    pattern = "abba", str = "dog cat cat fish" should return false.
    pattern = "aaaa", str = "dog cat cat dog" should return false.
    pattern = "abba", str = "dog dog dog dog" should return false.

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
 */

/*
题目：
给定一个模式和一个字符串str，判断这个字符串是否符合这个模式。
你可以假定pattern只包含小写字母，str包含被单个空格分隔的小写字母。

分析：
这一题的思路与205. Isomorphic Strings这一题十分相似，
唯一不同的是，从单个字符变成了单词。
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var arr = str.split(" ");
    var mapStr = new Map();
    for (let i=0; i<arr.length; i++) {
        mapStr.set(arr[i], i.toString());
    }
    var pMap = new Map();
    for (let i=0; i<pattern.length; i++) {
        pMap.set(pattern[i], i.toString());
    }
    var p = "",
        s = "";
    pMap.forEach(function(value, key) {
        p += value;
    });
    mapStr.forEach(function(value, key) {
        s += value;
    });
    var pLen = pMap.size,
        sLen = mapStr.size;
    if (pLen !== sLen || s !== p) {
        return false;
    } else {
        return true;
    }
};
