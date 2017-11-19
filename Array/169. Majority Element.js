/*
Given an array of size n, find the majority element.
The majority element is the element that appears more than n/2 times.

You may assume that the array is non-empty and the majority element always exist in the array.
 */

/*
题目：
假设有一个长度为n的数组，找出多数元素。
多数元素指的是出现次数超过n/2次的元素。
假设这个数组非空，并且多数元素总是存在。

分析：
遍历数组，记录数组中每一个数出现的次数，
然后找出次数大于n/2的那个数，即为所求。
 */

/**
 * @param {number[]} nums
 * @return {number} num
 */
/**
 * @param {number[]} nums
 * @return {number} num
 */
var majorityElement = function(nums) {
    var count = [],
        len = nums.length,
        num = 0;
    for (var i=0; i<len; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 1;
        }
        else {
            count[nums[i]]++;
        }
    }
    for (var k in count) {
        if (count[k] > Math.floor(len/2)) {
            num = parseInt(k);
        }
    }
    return num;
};


/*
另一种解法如下：
数组中有一个数字出现的次数超过数组长度的一半，
则说明它出现的次数比其他所有数字出现次数的和还要多，
接下来，遍历数组，
保存两个值：一个是数组中的一个数字，一个是次数，
当遍历到下一个数字时，
如果下一个数字和之前保存的数字相同，则次数加1，
如果下一个数字和之前保存的数字不同，则次数减1，
如果次数为0，则需要保存下一个数字，并把次数设为1。
 */
var majorityElement = function(nums) {
    var count = 1;
    var num = nums[0];
    for (var i=1; i<nums.length; i++) {
        if (count === 0) {
            num = nums[i];
            count = 1;
        }
        else if (num === nums[i]) {
            count++;
        }
        else {
            count--;
        }
    }
    return num;
};
