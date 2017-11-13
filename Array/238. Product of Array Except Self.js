/*
Given an array of n integers where n > 1, nums,
return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity?
(Note: The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/*
题目：
假设有一个含有n个整数的数组nums，
需要我们返回一个输出数组，
该输出数组中的每一项等于除了它自己之外的其他项的乘积。

解决方法不能使用除法，并且时间复杂度在O(n)内。

分析：
最开始，我首先想到了除法，
但是题目明确指出不可以用除法来解决，
除此之外，使用除法还存在一个问题，即遇见0的情况。
然后，换一种思路，
对于某个元素而言，
如果我们知道它左边相乘的结果和右边相乘结果，
那么，把两边相乘的结果再相乘，就可以得到我们想要的结果了，
所以，设置了两个变量left和right，
分别用来保存左边和右边的乘积，
然后，分别从数组的首端和尾端两个方向来遍历数组，
从而获取左右两边的乘积。
 */

/**
 * @param {number[]} nums
 * @return {number[]} result
 */
var productExceptSelf = function(nums) {
    var result = [],
        left = 1,
        right = 1;
    for (var i=0; i<nums.length; i++) {
        result[i] = left;
        left *= nums[i];
    }
    for (var j=nums.length-1; j>=0; j--) {
        result[j] *= right;
        right *= nums[j];
    }
    return result;
};
