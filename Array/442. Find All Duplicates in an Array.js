/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.
Find all the elements that appear twice in this array.
Could you do it without extra space and in O(n) runtime?

Example:
Input: [4,3,2,7,8,2,3,1]
Output: [2,3]
 */

/*
题目：
假设有一个整数数组，范围是从1到n，n为数组的长度，
一些元素可能出现两次也可能出现一次。
找出这个数组中所有出现两次的数。
不能占用多余的空间，并且时间复杂度要在O(n)内完成。

分析：
这一个题跟之前做的448. Find All Numbers Disappeared in an Array（寻找数组中消失的数字）很相似，
也可以采用三种解法来实现。
 */

/*
解法一：
首先，将数组中的数字移到正确的位置上去，
也就是将nums[i]放在其对应的位置nums[nums[i]-1]上去，
具体做法是将nums[i]与nums[nums[i]-1]的值进行比较，
如果相等，则将i加1，继续比较下一位，
如果不相等，则将两个数进行交换，直到相等再比较下一位，
然后，在对应位置进行检验，
如果nums[i]与i+1不相等，则nums[i]为重复的数字。
 */

/**
 * @param {number[]} nums
 * @return {number[]} result
 */
var findDuplicates = function(nums) {
    var result = [];
    for (var i=0; i<nums.length; i++) {
        if (nums[i] !== nums[nums[i]-1]) {
            var temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
            i--;
        }
    }
    for (var j=0; j<nums.length; j++) {
        if (nums[j] !== j+1) {
            result.push(nums[j]);
        }
    }
    return result;
};

/*
解法二：
nums[i]应该出现在其对应位置nums[nums[i]-1]上，
现在不移动元素的位置，
而是将其对应位置nums[nums[i]-1]的值加上数组长度的值len，
因为nums[i]的值会被累加，
所以nums[i]-1的值可能会出现大于len的情况，
这时，我们需要对nums[i]-1的值取余数，
然后，将遍历后的新数组的每一项与长度len进行比较，
如果出现大于两倍长度len（即len*2）的数，
则其位置i+1为所求。
 */
var findDuplicates = function(nums) {
    var result = [],
        len = nums.length;
    for (var i=0; i<len; i++) {
        nums[(nums[i]-1) % len] += len;
    }
    for (var j=0; j<len; j++) {
        if (nums[j] > 2*len) {
            result.push(j+1);
        }
    }
    return result;
};

/*
解法三：
遍历数组，如果nums[i]对应位置nums[nums[i]-1]上的值为正数，则取其相反数，
如果已经是负数了，则说明这个数之前存在过，那么该数为所求，
如果nums[i]为负值，则取其正值之后再操作其对应位置上的值。
 */
var findDuplicates = function(nums) {
    var result = [];
    for (var i=0; i<nums.length; i++) {
        var index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            result.push(index+1);
        }
        nums[index] = -nums[index];
    }
    return result;
};
