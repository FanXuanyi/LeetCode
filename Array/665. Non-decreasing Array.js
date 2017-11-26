/*
Given an array with n integers,
your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

Example 1:
Input: [4,2,3]
Output: True
Explanation: You could modify the first
4
 to
1
 to get a non-decreasing array.

Example 2:
Input: [4,2,1]
Output: False
Explanation: You can't get a non-decreasing array by modify at most one element.

Note: The n belongs to [1, 10,000].
 */

/*
题目：
假设有一个有n个整数的数组，你的任务是：
在最多可以改变一个数的情况下，判断这个数组是否是非递减的。
我们定义非递减的数组满足的条件是：
对每一个i而言，都满足array[i] <= array[i + 1]。

分析：
定义一个变量count来记录可能需要移动的次数，
遍历数组，判断当前数与下一个数的大小，
如果当前数大于下一个数，则需要将count加1，
然后判断前一个数与下一个数的大小，
如果前一个数存在，并且前一个数大于下一个数，
则需要将当前数的值赋给下一个数，
否则，将下一个数的值赋给当前数，
最后，通过判断count的值是否大于来返回结果，
如果大于1，返回false，否则返回true。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var count = 0;
    for (var i=0; i<nums.length-1; i++) {
        if (nums[i] > nums[i+1]) {
            count++;
            if (i > 0 && nums[i+1] < nums[i-1])
                nums[i+1] = nums[i];
            else
                nums[i] = nums[i+1];
            if (count > 1) {
                return false;
            }
        }
    }
    return true;
};
