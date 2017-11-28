/*
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
 */

/*
题目：
写一个方法，实现字符串的反转输出。
 */

/*
分析：
最容易想到的就是，
将字符串从后往前遍历，
再按照从前往后的顺序，依次将值放在新的字符串中，
最后返回输出新的字符串即可。
 */

/**
 * @param {string} s
 * @return {string} newS
 */
var reverseString = function(s) {
    var newS = "";
    for (var i=s.length-1; i>=0; i--) {
        newS += s[i];
    }
    return newS;
};

/*
下面这种方法使用内置函数来实现，
使用了split()、reverse()、join()三个方法来实现。
split()：将一个字符串对象的每个字符拆出来，并且将每个字符串当成数组的每个元素；
reverse()：用来改变数组，反转数组中元素的顺序；
join()：把数组中的所有元素放入一个字符串。
 */

var reverseString = function(s) {
    return s.split("").reverse().join("");
};
