/*
Given a non-empty 2D array grid of 0's and 1's,
an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array.
(If there is no island, the maximum area is 0.)

Example 1:
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

Example 2:
[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.

Note: The length of each dimension in the given grid does not exceed 50.
 */

/*
假设有一个非空二维数组grid，它由0和1组成，
一个岛屿是由一组1（代表陆地）来表示，
而且1之间是相连的（四个方向，即水平或垂直），
假定grid的四边周围都是水。
找到这个二维数组中岛屿的最大面积。
如果没有岛，最大面积为0。

分析：
最先开始，我想到的是
遍历这个二维数组，找到值为1的位置，
然后，判断它周围八个方向是否有1，
这里的思想就很类似661. Image Smoother这一题，
但是，我将范围限制为了一个九宫格的区域，
这就会忽略在九宫格外出现1的情况，
因为题目说是四个方向，
所以该想法还多考虑了斜对角出现1的情况。

重新考虑，这里采用了图的深度优先遍历思想。
遍历数组，找到出现1的位置，
然后在它的四周在寻找是否有1的出现，
特别需要注意的是，如果找到了一个位置为1，
就需要将该处置为0，避免出现重复计数的问题。

深度优先搜索算法将会从第一个指定的顶点开始遍历图，
沿着路径直到这条路径最后一个顶点被访问了，
接着原路回退并探索下一条路径。
 */

/**
 * @param {number[][]} grid
 * @return {number} maxArea
 */
var maxAreaOfIsland = function(grid) {
    var maxArea = 0;
    var visited = function(grid,r,c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length)
            return 0;
        var count = 0;
        if (grid[r][c] === 1) {
            grid[r][c] = 0;
            count = 1 + visited(grid, r-1, c) + visited(grid, r+1, c) + visited(grid, r, c-1) + visited(grid, r, c+1);
        }
        return count;
    }
    for (var i=0; i<grid.length; i++) {
        for (var j=0; j<grid[i].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, visited(grid,i,j));
            }
        }
    }
    return maxArea;
};
