/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
	Each element in the result must be unique.
    The result can be in any order.
 */

/*
题目：
给定两个数组，写一个方法计算它们的交集。
结果中的每个元素是唯一的。
结果可以按任意顺序排列。

分析：
遍历第一个数组，将第一个数组中出现的元素记录下来，保存在set中，
然后遍历第二个数组，
如果第二个数组中出现了第一个数组中出现的元素，
则将该数保存在数组result中，
同时将该数从set中移除，
遍历结束返回result即可。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var set = {};
    var result = [];
    for (let i=0; i<nums1.length; i++) {
        if (set[nums1[i]] === undefined) {
            set[nums1[i]] = 1;
        }
    }
    for (let i=0; i<nums2.length; i++) {
        if (set[nums2[i]] !== undefined) {
            result.push(nums2[i]);
            set[nums2[i]] = undefined;
        }
    }
    return result;
};
