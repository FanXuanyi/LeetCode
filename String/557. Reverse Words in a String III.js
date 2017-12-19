/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 */

/*
题目：
给定一个字符串，你需要反转一句话中每一个单词中的字符顺序，并且保留空格和原始单词的顺序。

分析：
首先，我们需要依据空格将每个单词划分出来，
然后，将划分出来的每个单词进行字符串的反转操作，
此处可以借鉴344. Reverse String这一题的思想，
最后，将反转后的字符串单词以空格相连合为一个新的字符串即可。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ");
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
    	let temp = arr[i].split("").reverse().join("");
        newArr.push(temp);
    }
    return newArr.join(" ");
};
