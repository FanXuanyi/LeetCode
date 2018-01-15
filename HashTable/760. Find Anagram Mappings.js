/*
Given two lists Aand B, and B is an anagram of A.
B is an anagram of A means B is made by randomizing the order of the elements in A.

We want to find an index mapping P, from A to B.
A mapping P[i] = j means the ith element in A appears in B at index j.

These lists A and B may contain duplicates.
If there are multiple answers, output any of them.

For example, given
A = [12, 28, 46, 32, 50]
B = [50, 12, 32, 46, 28]

We should return
[1, 4, 3, 2, 0]

as P[0] = 1 because the 0th element of A appears at B[1], and P[1] = 4 because the 1st element of A appears at B[4], and so on.

Note:
1. A, B have equal lengths in range [1, 100].
2. A[i], B[i] are integers in range [0, 10^5].
 */

/*
题目：
假定有两个列表A和B，B是由A重新排列得到的。
B是由A重新排列得到的指的是A中的元素以随机的顺序重新排列组成B。
我们想要找到一个从A到B的索引映射P。
P[i]=j指的是在A中的第i个元素在B中出现的索引是j。
列表A和B中可能包含重复的数字。
如果有多个结果，输出任一结果即可。

分析：
将A中的元素依次与B中元素进行比较，
如果找到相同的就记录其在B中的索引，并跳出内循环。
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    var pos = [];
    for (let i=0; i<A.length;i++) {
        for (let j=0; j<B.length; j++) {
            if (A[i] === B[j]) {
                pos.push(j);
                break;
            }
        }
    }
    return pos;
};
