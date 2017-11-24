/*
Given a sorted array and a target value,
return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0
 */

/*
题目：
假设有一个排序了的数组，和一个目标值，
如果目标数存在，返回它的索引。
如果不存在，返回它在不改变顺序下将插入的位置的索引。
假设这个数组中没有重复的数字。

分析：
这里，我采用的二分查找的思想。
选取数组的中间值，
将目标数与数组的中间值进行比较，
如果目标数小于中间值，则重复上述操作在中间值左边子数组中继续寻找，
如果目标数大于中间值，则重复上述操作在中间值右边子数组中继续寻找，
如果刚好相等，则返回中间值的索引即可，
如果搜索结束都没有找到目标数，
则需要判断nums[low]与target的关系。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var low = 0,
        high = nums.length - 1;
    while (low <= high) {
        var mid = Math.floor( (low+high)/2 );
        if (target < nums[mid]) {
            high = mid - 1;
        }
        else if (target > nums[mid]) {
            low = mid + 1;
        }
        else {
            return mid;
        }
    }
    if (target > nums[low]) {
        return low + 1;
    }
    else {
        return low;
    }
};
