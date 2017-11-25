/*
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
 */

/*
题目：
给定一个索引k，返回第k行的帕斯卡尔三角形。

分析：
这一题可以基于118. Pascal's Triangle这一题，
我们只需要返回索引为rowIndex那一行的数组即可。

注意数组索引与行数的区别。
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var row = [],
        nums = [];
    for (var i=0; i<=rowIndex; i++) {
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
    return nums[rowIndex];
};
