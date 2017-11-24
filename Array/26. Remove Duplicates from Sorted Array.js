/*
Given a sorted array,
remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array,
you must do this by modifying the input array in-place with O(1) extra memory.

Example:
Given nums = [1,1,2],
Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
 */

/*
题目：
假设有一个排序好了的数组，
移除数组中重复的数字，每个数字只出现一次，
返回新数组的长度。

分析：
这个题跟之前做的27. Remove Element这一题很相似，
不同的在于，这里是删除重复的数字，但思想是想通的，
将当前数与下一个数比较，
如果相同，则移除下一个数，
同样的，这里也不要忘了i减1。
 */

/**
 * @param {number[]} nums
 * @return {number} len
 */
var removeDuplicates = function(nums) {
    var len = nums.length;
    for (var i=0; i<nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1,1);
            len--;
            i--;
        }
    }
    return len;
};
