/*
Given an array of integers, every element appears twice except for one.
Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 */

/*
题目：
给定一个整数数组，除了一个元素外，每个元素出现两次。
找到这个单个的元素。

分析：
遍历整数数组，统计每个元素出现的次数，
找到其中出现次数为1所对应的元素，即为所求。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var count = {};
    for (let i=0; i<nums.length; i++) {
        if (count[nums[i]] === undefined) {
            count[nums[i]] = 1;
        } else {
            count[nums[i]]++;
        }
    }
    for (let c in count) {
        if (count[c] === 1) {
            return parseInt(c);
        }
    }
};
