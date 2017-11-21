/*
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
prove that at least one duplicate number must exist.
Assume that there is only one duplicate number, find the duplicate one.

Note:
1. You must not modify the array (assume the array is read only).
2. You must use only constant, O(1) extra space.
3. Your runtime complexity should be less than O(n2).
4. There is only one duplicate number in the array, but it could be repeated more than once.
 */

/*
题目：
假设有一个数组，包含n+1个数，其中每一个都是1到n中的一个数（包括1和n），
证明至少有一个重复的数字存在。
假设只有一个重复的数字，找到这个重复的数字。

分析：
使用sort()方法将数组按从小到大顺序重新排列，
然后遍历数组，将当前元素与下一个元素进行比较，
如果两个数相等，则说明这个数是重复的，即为所求。
 */

/**
 * @param {number[]} nums
 * @return {number} result
 */
var findDuplicate = function(nums) {
    var result = 0;
    nums.sort( (x,y)=>(x-y) );
    for (var i=0; i<nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
            result = nums[i];
            break;
        }
    }
    return result;
};
