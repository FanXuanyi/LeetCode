/*
Given a 2D integer matrix M representing the gray scale of an image,
you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself.
If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:
Input:
	[[1,1,1],
	 [1,0,1],
	 [1,1,1]]
Output:
	[[0, 0, 0],
	 [0, 0, 0],
	 [0, 0, 0]]
Explanation:
	For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
	For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
	For the point (1,1): floor(8/9) = floor(0.88888889) = 0

Note:
1. The value in the given matrix is in the range of [0, 255].
2. The length and width of the given matrix are in the range of [1, 150].
 */

/*
题目：
假设有一个表示图像灰度的二维整数矩阵M，
你需要设计一个更平滑的方法，
使每一个单元格的灰度变为它和它周围8个单元格灰度的平均灰度（舍入），
如果一个单元格周围少于8个，那么它的周围有多少就是多少个。

分析：
整体思路是：
遍历这个二维数组，
依次判断每一个元素的上下左右以及斜对角上是否有元素，
然后，计算灰度的总值sum和单元格（元素）的个数count，
最后将Math.floor(sum/count)的值放在输出结果result对应的位置上。
 */

/**
 * @param {number[][]} M
 * @return {number[][]} result
 */
var imageSmoother = function(M) {
    var result = [];
    var sum = 0,
        count = 0;
    for (var i=0; i<M.length; i++) {
        result[i] = [];
        for (var j=0; j<M[i].length; j++) {
            sum = M[i][j];
            count = 1;
            if ( (i-1) >= 0 ) {
                sum += M[i-1][j];//左
                count++;
                if ( (j-1) >= 0 ) {
                    sum += M[i-1][j-1];//左上角
                    count++;
                }
                if ( (j+1) < M[i].length ) {
                    sum += M[i-1][j+1];//左下角
                    count++;
                }
            }
            if ( (i+1) < M.length ) {
                sum += M[i+1][j];//右
                count++;
                if ( (j-1) >= 0) {
                    sum += M[i+1][j-1];//右上角
                    count++;
                }
                if ( (j+1) < M[i].length ) {
                    sum += M[i+1][j+1];//右下角
                    count++;
                }
            }
            if ( (j-1) >= 0 ) {
                sum += M[i][j-1];//上
                count++;
            }
            if ( (j+1) < M[i].length ) {
                sum += M[i][j+1];//下
                count++;
            }
            result[i][j] = Math.floor(sum / count);
        }
    }
    return result;
};
