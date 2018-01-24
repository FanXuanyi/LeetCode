/*
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

Example 1:

Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.

Example 2:

Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

Note:
1. cost will have a length in the range [2, 1000].
2. Every cost[i] will be an integer in the range [0, 999].
 */

/*
题目：
在楼梯上，每一层所需要花费的值（非负数）存储在一个cost数组中。
一旦你付了钱，你可以爬一步或两步。
你需要找到爬到顶端的最小花费，你可以从索引为0或索引为1处开始爬。

分析：
用一个数组c存储爬到每一层时花费的值，
因为可以从索引为0和索引为1处开始，所以c[0]=0，c[1]=0，
当到达第i层时，可以是由第i-1层爬一步到达，也可以是由第i-2层爬两步到达，
为了取得最小值，需要取两种可能的最小cost，
即`c[i] = Math.min(c[i-1] + cost[i-1], c[i-2] + cost[i-2]);`。
该算法的空间复杂度为O(n)，时间复杂度为O(n)。
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    var len = cost.length + 1;
    var c = [0, 0];
    for (let i = 2; i < len; i++) {
        c[i] = Math.min(c[i-1] + cost[i-1], c[i-2] + cost[i-2]);
    }
    return c[len-1];
};
