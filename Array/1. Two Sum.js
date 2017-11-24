/*
Given an array of integers,
return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/*
题目：
假设有一个整数数组，
如果它们中有两个数相加等于目标数，
返回这两个数的索引。

分析：
嵌套两个循环遍历数组，
外层遍历从第i个数开始，内层遍历从j=i+1个数开始，
判断nums[i]与nums[j]的和是否等于target，
如果等于，则返回该索引数组即可。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} index
 */
var twoSum = function(nums, target) {
    var index = [];
    for (var i=0; i<nums.length; i++) {
        for (var j=i+1; j<nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                index = [i,j];
                break;
            }
        }
    }
    return index;
};
