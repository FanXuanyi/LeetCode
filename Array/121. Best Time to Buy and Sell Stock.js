/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock),
design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5
max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)

Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0
In this case, no transaction is done, i.e. max profit = 0.
 */

/*
题目：
假设有一个数组，第i个元素是第i天股票的价格。
如果你只能最多交易一次，比如，一次买入一次卖出，
设计一个算法来找到最大利润。

分析：
因为只有一次交易的机会，所以，我们需要找到其中的最大差值，
并且构成最大差值的两个数需满足小的数在前面，大的数在后面这一条件。
将min的值设为第一个数，
然后从第二个数开始遍历数组，
如果有比min更小的数，就将其赋给min，
如果没有，计算prices[i]与min的差值，
找到差值最大的值，即为所求。
 */

/**
 * @param {number[]} prices
 * @return {number} profit
 */
var maxProfit = function(prices) {
    var profit = 0,
        min = prices[0];
    for (var i=1; i<prices.length;i++) {
        if (min > prices[i]) {
            min = prices[i];
        }
        else {
            if (profit < (prices[i] - min)) {
                profit = prices[i] - min;
            }
        }
    }
    return profit;
};
