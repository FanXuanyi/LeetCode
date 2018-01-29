/*
You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.

Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.

Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.

Example 1:

Input: [[1,2], [2,3], [3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4]

Note:
1. The number of given pairs will be in the range [1, 1000].
 */

/*
题目：
给定n对数字。在每一对中，第一个数总是小于第二个数。
现在，我们定义只有当b＜c时，(c, d)对可以跟在另一个(a, b)对后面。
按照这样的方式形成对链。
给定一组对，找到最长链的长度。
你不需要用完所有给定的对。你可以按任意顺序选择对。

分析：
这一题和300. Longest Increasing Subsequence这一题很类似，
不同之处在于这里是一个个数对，并且可以打乱顺序，
所以，先对数对按从小到大的顺序排列，
然后再寻找最长对链的个数，
因为每一对中的第一个数总是小于第二个数，
所以需要比较前一对中的第二个数和后一对中第一个数的大小。
 */

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    if (pairs.length === 0) {
        return 0;
    }
    pairs.sort(function(x, y){
    	return x[0] !== y[0] ? x[0]-y[0] : x[1]-y[1];
    });
    var dp = [];
    for (let i = 0; i < pairs.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    dp.sort((x,y)=>(y-x));
    return dp[0];
};
