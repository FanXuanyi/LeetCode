/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 */

/*
题目：
给定一个单词列表返回只能用一行字母的美国键盘输入的单词。

分析：
用一个集合存取每一行的字母，
然后依次判断字符数组的每个单词的每个字母是否在同一行。
为了方便，将所有字母转换为小写字母判断。
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var str = [];
    var rows = {
        'q': 1, 'w': 1, 'e': 1, 'r': 1, 't': 1, 'y': 1, 'u': 1, 'i': 1, 'o': 1, 'p': 1,
        'a': 2, 's': 2, 'd': 2, 'f': 2, 'g': 2, 'h': 2, 'j': 2, 'k': 2, 'l': 2,
        'z': 3, 'x': 3, 'c': 3, 'v': 3, 'b': 3, 'n': 3, 'm': 3
    };
    var flag = new Array(words.length);
    for (let i=0; i<words.length; i++) {
        var temp = words[i].toLowerCase();
        var word = temp.split("");
        var row = rows[word[0]];
        for (let j=1; j<word.length; j++) {
            if (rows[word[j]] !== row) {
                flag[i] = false;
                break;
            }
        }
    }
    for (let i=0; i<flag.length; i++) {
        if (flag[i] !== false) {
            str.push(words[i]);
        }
    }
    return str;
};

/*
下面两段代码是借鉴网上别人写的代码。
 */

/*
filter()方法创建一个新数组，
新数组中的元素是通过检查指定数组中符合条件的所有元素。
filter()不会对空数组进行检测。
filter()不会改变原始数组。
 */
var findWords = function(words) {
    var rows = {
        'q': 1, 'w': 1, 'e': 1, 'r': 1, 't': 1, 'y': 1, 'u': 1, 'i': 1, 'o': 1, 'p': 1,
        'a': 2, 's': 2, 'd': 2, 'f': 2, 'g': 2, 'h': 2, 'j': 2, 'k': 2, 'l': 2,
        'z': 3, 'x': 3, 'c': 3, 'v': 3, 'b': 3, 'n': 3, 'm': 3
    };
    var isOneRow = function(word) {
        if (word.length < 2) {
            return true;
        }
        word = word.toLowerCase();
        var row = rows[word[0]];
        return word.split('').every(c => rows[c] === row);
    };
    return words.filter(isOneRow);
};

/*
使用正则表达式
 */
var findWords = function(words) {
    return words.filter(function(word) {
        return /^([qwertyuiop]*|[asdfghjkl]*|[zxcvbnm]*)$/.test(word.toLowerCase());
    });
};
