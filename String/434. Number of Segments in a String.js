/*
Count the number of segments in a string,
where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:
Input: "Hello, my name is John"
Output: 5
 */

/*
题目：
统计一个字符串的分段数量，一个连续没有空格的字符集为一个分段。

分析：
看到这一题很容易想到557. Reverse Words in a String III这一题，
不同的是，不需要反转单词，只需统计单词的数量，
这里特别需要注意的是连续空格的情况，
具体的做法是：
遍历字符串，遇到空格直接跳过，如果不是空格，则count加1，
然后用一个while循环找到下一个空格的位置，
这样就遍历完了一个单词，
再重复上面的操作直至结束。
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (s.length === 0) {
        return 0;
    }
    var count = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === ' ') {
            continue;
        }
        count++;
        while (i < s.length && s[i] !== ' ') {
            i++;
        }
    }
    return count;
};

/*
换一种方法，统计每个单词的第一个字符，
因为每一个单词的第一个字符不是空格，并且它前面的一个字符一个是空格，
或是它是第一个单词，
利用这一特点可以统计出单词的个数。
 */
var countSegments = function(s) {
    var count = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] !== " " && (i===0 || s[i-1]===' ')) {
            count++;
        }
    }
    return count;
};
