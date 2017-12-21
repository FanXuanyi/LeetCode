/*
Given an arbitrary ransom note string and another string containing letters from all the magazines,
write a function that will return true if the ransom note can be constructed from the magazines;
otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
 */

/*
题目：
给定一个任意的赎金字符串和一个包含字母的杂志字符串，
写一个方法，判断赎金字符串是否由杂志字符串中的字符组成，
如果是，返回true，否则返回false。
杂志中的每个字母在你的赎金字符串中只能用一次。
假定字符串只有小写字母组成。

分析：
一开始，我将题目错误地理解为只要magazine这一字符串包含ransomNote即可，
但题目是说，判断使用magazine中的字母是否可以组成ransomNote字符串，
然后，重新思考，
分别遍历两个字符串，
统计每个字符串中每个字母出现的次数，
再将第一个字符串中每个字母出现的次数与第二个字符串中对应字母出现的次数进行比较，
如果前者大于后者，或是后者不存在，则返回false。
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    var r = [],
        m = [];
    for (let i=0; i<ransomNote.length; i++) {
        let index = ransomNote[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (!r[index]) {
            r[index] = 1;
        }
        else {
            r[index]++;
        }
    }
    for (let i=0; i<magazine.length; i++) {
        let index = magazine[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (!m[index]) {
            m[index] = 1;
        }
        else {
            m[index]++;
        }
    }
    for (let i=0; i<r.length; i++) {
        if (r[i] > m[i] || (r[i] && !m[i])) {
            return false;
        }
    }
    return true;
};
