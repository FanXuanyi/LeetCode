/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:
    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital if it has more than one letter, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way.

Example 1:
Input: "USA"
Output: True

Example 2:
Input: "FlaG"
Output: False

Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
 */

/*
题目：
给定一个单词，你需要判断大写字母的使用是否正确。
大写字母使用正确满足以下条件之一：
	单词中的所有字母都是大写，比如"USA"；
	单词中所有字母都不是大写，比如"leetcode"；
	单词中只有第一个字母是大写，并且字母个数大于1，比如"Google";
否则，我们认为这个单词的大写字母使用不正确。

分析：
遍历这个字符串，获取该字符串中大写字母出现的个数，记为count，
然后根据提目的满足条件依次判断，
如果count的值为0，则说明没有大写字母，满足条件二，返回true；
如果count的值为字符串的长度，则说明全为大写字母，满足条件一，返回true；
如果count的值为1，并且字符串的第一个字符为大写字母，满足条件三，返回true；
如果均不满足上述情况，则说明大写字母的使用不正确，返回false。
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var count = 0;
    for (let i=0; i<word.length; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            count++;
        }
    }
    if (count === word.length) {
        return true;
    }
    else if (count === 0) {
        return true;
    }
    else if (count === 1 && word[0] >= 'A' && word[0] <= 'Z') {
        return true;
    }
    else {
        return false;
    }
};
