/*
Given an unsorted array of integers,
find the length of longest continuous increasing subsequence.

Example 1:
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.

Example 2:
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1.

Note: Length of the array will not exceed 10,000.
 */

/*
题目：
假设有一个未排序的数组，找出最长连续增长子数组的长度。

分析：
这一个题目让我想起了之前做的485. Max Consecutive Ones这一道题，
两道题有相通的地方，但也有所不同。
首先，用一个变量count用来统计连续增长的个数，
用len记录连续的长度
然后遍历数组，判断当前元素与下一个元素的大小，
如果当前元素小于下一个元素的值，则count加1，
并将len的值与count比较，取最大值存在len中，
否则将count置为1，在置为1之前，需要将当前count的值与len比较取最大值，
最后，返回len，即为所求。
这里有几点需要注意，
一是count的初始值应该设为1，
因为不管之后的数的大小如何，当前子数组中都已经包含该数，即为1，
二是需要考虑到数组长度为0和为1时的情况。
 */

/**
 * @param {number[]} nums
 * @return {number} len
 */
var findLengthOfLCIS = function(nums) {
    var len = 0;
    if (nums.length === 0) {
        len = 0;
    }
    if (nums.length === 1) {
        len = 1;
    }
    var count = 1;
    for (var i=0; i<nums.length-1; i++) {
        if (nums[i] < nums[i+1]) {
            count++;
            len = Math.max(len, count);
        }
        else {
            len = Math.max(len, count);
            count = 1;
        }
    }
    return len;
};
