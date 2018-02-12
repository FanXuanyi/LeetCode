/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

Example 1:

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: True
Explanation:
1234
5123
9512

In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", and in each diagonal all elements are the same, so the answer is True.

Example 2:

Input: matrix = [[1,2],[2,2]]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.

Note:
1. matrix will be a 2D array of integers.
2. matrix will have a number of rows and columns in range [1, 20].
3. matrix[i][j] will be integers in range [0, 99].
 */

/*
题目：
如果一个矩阵的每条自左上至右下的斜线上的元素相同，则该矩阵为托普利兹矩阵。
现在给定一个M×N的矩阵，判断它是否是托普利兹矩阵。

分析：
遍历二维数组，判断对角线上的数是否是否相等，
只要有一个不等就返回false。
 */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[i].length-1; j++) {
            if (matrix[i][j] !== matrix[i+1][j+1]) {
                return false;
            }
        }
    }
    return true;
};
