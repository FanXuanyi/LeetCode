/*
Given an array and a value,
remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array,
you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed.
It doesn't matter what you leave beyond the new length.

Example:
Given nums = [3,2,2,3], val = 3,
Your function should return length = 2, with the first two elements of nums being 2.
 */

/*
题目：
假设有一个数组和一个值，
移除数组中所有的这个值，并返回数组的新长度。

分析：
遍历数组，遇见与val相同的值就用splice()方法移除该值，
每次都是移除一个，
这时，后面的数的索引都会改变，
也就是说后面的数都向前移动了一位，
所以需要将i的值减1，
同时还要将总长减1，
这样才能确保遍历到了每一个数。
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number} len
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    for (var i=0; i<nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i,1);
            i--;
            len--;
        }
    }
    return len;
};
