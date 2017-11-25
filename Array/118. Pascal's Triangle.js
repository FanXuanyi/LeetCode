/*
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

/*
题目：给定行数numRows，生成一个帕斯卡尔三角形（也就是杨辉三角）。

分析：
杨辉三角的特点是：
第n行有n个数，
每行的第一个和最后一个数为1，
每个数等于它上方两数之和。

分以下三种情况考虑：
一是i=0，即只有一行时，只需将1推入到row中，
二是i=1，即只有两行时，第二行只需推入两个1到row中，
三是i>=2，即至少有三行时，从第三行开始需要考虑求和的情况，
比如nums[i][j]这个位置上的数，
是由nums[i-1][j-1]和nums[i-1][j]这两个数（也就是nums[i][j]上方的两个数）求和得到的。

有一点需要注意，将每一行数组row加入到nums中后，
需要将row置为空数组，否则会累加之前行数组row的数。
 */

/**
 * @param {number} numRows
 * @return {number[][]} nums
 */
var generate = function(numRows) {
    var nums = [],
        row = [];
    for (var i=0; i<numRows; i++) {
        if (i === 0) {
            row.push(1);
        }
        if (i === 1) {
            row.push(1,1);
        }
        if (i >= 2) {
            for (var j=0; j<=i; j++) {
                if (j === 0 || j === i) {
                    row.push(1);
                }
                else {
                    row.push(nums[i-1][j-1]+nums[i-1][j]);
                }
            }
        }
        nums.push(row);
        row = [];
    }
    return nums;
};
