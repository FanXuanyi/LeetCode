/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.
 */

/*
题目：
假设有一个整数数组，判断这个数组是否包含重复的数字。
在这个数组中，如果有任何值出现至少有两次的话，返回true，
如果每一个数字都是不同的，返回false。

分析：
最先开始，我想到的是用一个数组count在存储所有数出现的次数，
然后遍历count数组，如果有次数超过1次，则说明有重复的数字，返回true。
但是，这里存在一个问题，
我们无法判断索引的最小值是多少，
比如，如果整数数组中存在负数，
如果我们从0开始遍历count数组，
则会忽略索引为负数的情况。

然后，我换了一种思考方式，
遍历数组，依次将第一个数与它后面的数进行比较，
如果相等，就返回true，
否则，再将第二个数与它后面的数进行比较，
依次类推。
 */

/**
 * @param {number[]} nums
 * @return {boolean} flag
 */
var containsDuplicate = function(nums) {
    var count = [],
        flag = false;
    for (var i=0; i<nums.length; i++) {
        for (var j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) {
                flag = true;
                break;
            }
        }
    }
    return flag;
};
