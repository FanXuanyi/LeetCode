/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
 */

/*
题目：
有一个m×n的网格，机器人位于该网格的左上角，
该机器人只能向下或向右移动，机器人正尝试到达网格的右下角。
问有多少种路径？

分析：
当网格是1×n和m×1时，只有一种路径；
当网格是2×2时，
如果第一步向右走，则进入一个2×1的网格，
如果第一步向下走，则进入一个1×2的网格，
所以总路径为1+1=2；
当网格是2×3时，
如果第一步向右走，则进入一个2×2的网格，
如果第一步向下走，则进入一个1×3的网格，
所以总路径为2+1=3；
由此可以发现如下规律：
用一个二维数组dp存储网格对应的路径，
那么，当网格是m×n时，其对应的路径dp[m][n] = dp[m][n-1] + dp[m-1][n]。
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = [];
    for (var i = 1; i <= m; i++) {
        dp[i] = [];
        for (let j = 1; j <= n; j++) {
            if (i === 1 || j === 1) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = [];
            }
        }
    }
    for (let i = 2; i <= m; i++) {
        for (let j = 2; j <= n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m][n];
};
