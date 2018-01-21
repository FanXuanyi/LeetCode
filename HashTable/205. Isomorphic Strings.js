/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.
Given "foo", "bar", return false.
Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.
 */

/*
题目：
给定两个字符串s和t，判断它们是否是同结构的。
如果s中的字符可以被替换得到t，那么两个字符串是同一结构。
所有字符的出现都必须被另一字符代替，并且保留字符的顺序。
没有两个字符可以映射到同一字符，但是一个字符可以映射到它自己。
你可以假定s和t有相同的长度。

分析：
遍历字符串，将字符串的映射关系存到一个map集合中，
从第一个字符开始，将第一个字符映射到"0"，
如果第二字符与前一个字符不相同，则将第二个字符映射到"1",
如果第二个字符与前一个字符相同，则此时，第一个字符映射到"01"，
像这样，依此类推，分别得到s和t的map集合，
然后，遍历map集合，获取map集合中的value值，
将所有的value值拼接起来，用一个字符串表示，分别的s1和s2，
最后，判断s1和s2是否相等，并且两个map集合的键值对个数是否相同，
如果两个判断中有一个不相等，返回false，
如果两个判断结果均为相等，返回true。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var dictS = new Map(),
        dictT = new Map();

    for (let i=0; i<s.length; i++) {
    	dictS.set(s[i], i.toString());
    }
    for (let i=0; i<t.length; i++) {
    	dictT.set(t[i], i.toString());
    }

    var s1 = "",
        s2 = "";
    var len1 = dictS.size,
        len2 = dictT.size;

    dictS.forEach(function(value,key) {
    	s1 += value;
    });
    dictT.forEach(function(value,key) {
    	s2 += value;
    });

    if (s1 !== s2 || len1 !== len2) {
        return false;
    } else {
    	return true;
    }
};
