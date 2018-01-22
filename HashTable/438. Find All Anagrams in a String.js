/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 */

/*
题目：
给定一个字符串s和一个非空字符串p，
找到p的重新颠倒排序字符在s中的所有起始索引。
字符串只包含小写英文字母，并且s和p的长度不大于20100。

分析：
最开始，我想到了242. Valid Anagram这一题，
然后写出了如下代码：
var findAnagrams = function(s, p) {
    var index = [];
    var isAnagrams = function (a, b) {
        return a.split("").sort().join("") === b.split("").sort().join("");
    };
    for (let i=0; i<s.length-p.length+1; i++) {
        let temp = s.substr(i,p.length);
        if (isAnagrams(temp,p)) {
            index.push(i);
        }
    }
    return index;
};
这时，显示错误信息：Time Limit Exceeded。

换一种思考方式：
用一个哈希表记录p中每一个字符出现的个数，用count记录字符的总数，
然后记录s中前p.length的字符个数，
如果该字符存在，就将其去掉，count减1，
重新遍历s字符串，如果count为0，则记录当前索引，
否则，当左边出现p中的字符时，则移除，count减1，
当右边出现p中的字符时，则添加，count加1，
当count为0时，则说明该段子字符是p颠倒排序后的字符。
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var index = [];
    var pMap = [],
    	sMap = [];
    for (let i=0; i<p.length; i++) {
    	if (pMap[p[i]] === undefined) {
    		pMap[p[i]] = 1;
    	} else {
    		pMap[p[i]]++;
    	}
    }

    var count = p.length;
    for (let i=0; i<p.length; i++) {
    	if (pMap[s[i]] !== undefined && pMap[s[i]]-- > 0) {
    		count--;
    	}
    }

    for (let i=0; i<s.length-p.length+1; i++) {
    	if (count === 0) {
    		index.push(i);
    	}
    	if (pMap[s[i]] !== undefined && pMap[s[i]]++ >= 0) {
    		count++;
    	}
    	if (pMap[s[i+p.length]] !== undefined && pMap[s[i+p.length]]-- > 0) {
    		count--;
    	}
    }
    return index;
};
