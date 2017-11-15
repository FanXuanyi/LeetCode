/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit.
You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times).
However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */

/*
题目：
假设有一个数组，第i个元素是第i天股票的价格。
设计一个算法找到最大利润。
你可以进行多次交易，比如买入和卖出多次。
但是，你不能同时进行多次交易，比如在你再次买入之前必须先卖出。

分析：
想获取利润就需要我们低价买入高价卖出，
在这里，遍历数组，比较相邻来相邻两天的价格，
如果今天的价格小于明天的价格，则今天买入，明天卖出，
那么这一次交易获得的利润为两天的差价。
依此类推，遍历完整个数组，将所有差价相加即可得到总利润。
 */

/**
 * @param {number[]} prices
 * @return {number} profit
 */
var maxProfit = function(prices) {
    var profit = 0;
    for (var i=0; i<prices.length-1; i++) {
        if (prices[i] < prices[i+1])
            profit += prices[i+1] - prices[i];
    }
    return profit;
};
