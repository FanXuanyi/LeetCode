/*
In MATLAB, there is a very useful function called 'reshape',
which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array,
and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal,
output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input:
nums =[[1,2],[3,4]]
r = 1, c = 4
Output:[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

Example 2:
Input:
nums = [[1,2],[3,4]]
r = 2, c = 4
Output:
[[1,2],[3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

Note:
1. The height and width of the given matrix is in range [1, 100].
2. The given r and c are all positive.
 */

/*
题目：
假设有一个二维数组，一个代表行数的正整数r和一个代表列数的正整数c，
然后重新构建一个新的矩阵。
如果重新构建的矩阵的参数是合法的，则输出新构建的矩阵；
如果参数不合法，则输出原始的矩阵。

分析：
首先，判断给定矩阵的行和列的积是否与重构后矩阵的行（r）和列（c）的积相等，
如果不相等，则返回原始的矩阵，
如果相等，则先遍历矩阵，将所有数存入在一个数组中，
然后，将数组中的数依次放入到重构的矩阵中。
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]} matrix
 */
var matrixReshape = function(nums, r, c) {
    var rows = nums.length,
        columns = nums[0].length,
        arr = [],
        matrix = [];
    if ((rows*columns) !== (r*c)) {
        return nums;
    }
    else {
        for (var i=0; i<rows; i++) {
            for (var j=0; j<columns; j++) {
                arr.push(nums[i][j]);
            }
        }
        var k = 0;
        for (var i=0; i<r; i++) {
            matrix[i] = [];
            for (var j=0; j<c; j++) {
                matrix[i][j] = arr[k++];
            }
        }
        return matrix;
    }
};
