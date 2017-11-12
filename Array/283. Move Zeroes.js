/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.
 */

/*
题目：
假设有一个数组nums，系一个方法，
将数组中所有的0都移到数组的尾部，同时保持其他非零数字的相对位置不变。

分析：
首先，遍历这个数组，获取该数组中0的个数num，
然后，再次遍历数组，
遇见0时就移除0，并且将0添加到数组的尾部，
同时还要将num的值减1，
这样就只会遍历到数组初始时的尾部，
而不会出现将新添加的0也删除的情况。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var num = 0;
    for (var i=0; i<nums.length; i++) {
        if (nums[i] === 0)
            num++;
    }
    for (var j=0; j<nums.length; j++){
        while(nums[j] === 0 && num>=0) {
            nums.splice(j,1);
            nums.push(0);
            num--;
        }
    }
};
