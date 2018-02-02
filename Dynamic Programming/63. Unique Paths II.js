/*
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,

There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]

The total number of unique paths is 2.

Note: m and n will be at most 100.
 */

/*
题目：
接着Unique Paths这一题。
现在添加一些障碍物在网格中，问有多少种不同的路径？
有障碍物的地方和空的地方分别用1和0表示。

分析：
这一题其实就是在62. Unique Paths这一题的基础上添加了障碍物，
我们需要在有障碍物这个地方的路径设为0，
特别需要注意的是在第一行和第一列出现障碍物时，
我们要将其及其之后的所有值设为0，这是因为没有路径可以到达。
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length,
		n = obstacleGrid[0].length;
	if (m === 0 || n === 0) {
		return 0;
	}
	var dp = [];
	for (let i=0; i<m; i++) {
		dp[i] = [];
	}
	for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            for (let j = i; j < m; j++) {
                dp[j][0] = 0;
            }
            break;
        } else {
        	dp[i][0] = 1;
        }
    }
    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            for (let j = i; j < n; j++) {
                dp[0][j] = 0;
            }
            break;
        } else {
        	dp[0][i] = 1;
        }
    }
	for (let i=1; i<m; i++) {
		for (let j=1; j<n; j++) {
			if (obstacleGrid[i][j] === 1) {
				dp[i][j] = 0;
			} else {
				dp[i][j] = dp[i-1][j] + dp[i][j-1];
			}
		}
	}
	return dp[m-1][n-1];
};
