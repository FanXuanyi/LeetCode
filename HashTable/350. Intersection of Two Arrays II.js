/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.
 */

/*
题目：
给定两个数组，写一个方法计算它们的交集。
结果中的每个元素出现的次数应该和它们在两个数组中出现的次数一样。
结果可以按任意顺序排列。

分析：
这一题和349. Intersection of Two Arrays这一题很相似，
唯一不同的是，这里的交集包含的是两个数组相交出现的所有数字，
所以，在用set记录第一个数组中的数字时，要记录每个数字出现的次数。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var set = {};
    var result = [];
    for (let i=0; i<nums1.length; i++) {
        if (set[nums1[i]] === undefined) {
            set[nums1[i]] = 1;
        } else {
            set[nums1[i]]++;
        }
    }
    for (let i=0; i<nums2.length; i++) {
        if (set[nums2[i]] !== undefined) {
            result.push(nums2[i]);
            if (set[nums2[i]] === 1) {
                set[nums2[i]] = undefined;
            } else {
                set[nums2[i]]--;
            }
        }
    }
    return result;
};
