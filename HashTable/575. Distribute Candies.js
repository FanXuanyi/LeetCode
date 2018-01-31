/*
Given an integer array with even length, where different numbers in this array represent different kinds of candies.
Each number means one candy of the corresponding kind.
You need to distribute these candies equally in number to brother and sister.
Return the maximum number of kinds of candies the sister could gain.

Example 1:

Input: candies = [1,1,2,2,3,3]
Output: 3
Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
The sister has three different kinds of candies.

Example 2:

Input: candies = [1,1,2,3]
Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
The sister has two different kinds of candies, the brother has only one kind of candies.

Note:
1. The length of the given array is in range [2, 10,000], and will be even.
2. The number in given array is in range [-100,000, 100,000].
 */

/*
题目：
给定一个偶数长度的整数数组，数组中不同的数字表示不同的糖果种类。
每一个数字意味着一个糖果。你需要将它们等量地分发给弟弟妹妹。
返回妹妹获得的最大糖果种类数。

分析：
遍历数组，记录糖果的种类及其对应的数量，用一个kind集合表示，
遍历这个集合，获取糖果的种类数count，
将count的值与数组长度的一半进行比较，
如果count的值较小，则说明妹妹手上最多只能获取到count种不同的糖果，返回count；
如果count的值较大，则说明妹妹手上最多只能获取到总糖果数的一半，返回数组长度的一般即可。
 */

/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var kind = {};
    var len = candies.length;
    for (let i = 0; i< len; i++) {
        if (kind[candies[i]] === undefined) {
            kind[candies[i]] = 1;
        } else {
            kind[candies[i]]++;
        }
    }
    var count = 0;
    for (let k in kind) {
        count++;
    }
    return count < len/2 ? count : len/2;
};
