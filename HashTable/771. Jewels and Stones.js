/*
You're given strings J representing the types of stones that are jewels,
and S representing the stones you have.
Each character in S is a type of stone you have.
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:

Input: J = "z", S = "ZZ"
Output: 0

Note
    S and J will consist of letters and have length at most 50.
    The characters in J are distinct.
 */

/*
题目：
字符串J表示珠宝的类型，S表示你拥有的石头。
S中的每一个字符表示你拥有的石头类型。
你想要知道你的石头中有多少是珠宝。
J中的字母都是不相同的，J和S中所有字符都是字母。
字母的大小写也是有区别的，所以“a”不同于“A”。

分析：
遍历两个字符串，如果S中出现了J中的字母，则记录其个数。
 */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var count = 0;
    for (let i = 0; i < J.length; i++) {
        for (let j = 0; j < S.length; j++) {
            if (J[i] === S[j]) {
                count++;
            }
        }
    }
    return count;
};
