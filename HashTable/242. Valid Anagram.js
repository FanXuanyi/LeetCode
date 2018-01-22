/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.
 */

/*
题目：
给定两个字符串s和t，写一个方法判断t是否由s重新颠倒字母组成的。
你可以假定字符串只包含小写字母。

分析：
先用split()方法将字符串转换为字符数组，
然后用sort()方法对字符数组重新排列，
再用join()方法将字符数组转换为字符串，
最后比较字符串是否相等。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var arrS = s.split("");
    arrS.sort();
    var arrT = t.split("");
    arrT.sort();
    return arrS.join("") === arrT.join("");
};
