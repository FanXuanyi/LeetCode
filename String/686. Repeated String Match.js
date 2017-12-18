/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it.
If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.
 */

/*
题目：
给定两个字符串A和B，找到A重复多少次可以包含B的最小重复次数，
如果没有，返回-1。

分析：
根据题意，这里有两点：
一是字符串的重复，
二是一个字符串是否包含另一字符串，
关于第一点，ES6提供了一个repeat()方法，
该方法接受一个number类型的参数，表示该字符串的重复次数，
返回当前字符串重复一定次数后的新字符串，
关于第二点，ES6提供了一个includes()方法，
如果在字符串中检测到指定文本则返回true，否则返回false，
那么，判断字符串A重复多少次可以包含字符串B，
就是要不断重复A直到长度大于B，重复一次time就加1，
然后判断重复后的字符串是否包含B，
如果包含，则返回time的值，
否则就再重复一次进行判断，
这是因为有可能有半截在后边，比如A = "abababaaba"和B = "aabaaba"，
而对于重复何时停止的判断条件为什么是A重复之后的长度大于B的解释是，
在此长度下都不能包含B，repeat的次数再大也没有用了。
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    var time = 0;
    do {
        var s = A.repeat(++time);
        if (s.includes(B)) {
            return time;
        }
    }
    while(s.length <= B.length);
    if (A.repeat(++time).includes(B)) {
    	return time;
    }
    return -1;
};
