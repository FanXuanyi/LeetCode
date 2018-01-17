/*
The set S originally contains numbers from 1 to n.
But unfortunately, due to the data error,
one of the numbers in the set got duplicated to another number in the set,
which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error.
Your task is to firstly find the number occurs twice and then find the number that is missing.
Return them in the form of an array.

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]

Note:
1. The given array size will in the range [2, 10000].
2. The given array's numbers won't have any order.
 */

/*
题目：
集合s包含一些数字，这些数字从1到n。
但不幸的是，由于数据的错误，集合中的一个数字被复制到集合的另一个数字中，
这导致了一个数字重复一个数字丢失。
给定一个数组nums，该数组表示错误后集合的数据状态。
你的任务是：首先找到出现两次的数字，然后找到缺失的数字。
结果以数组的形式返回。

分析：
首先将数组中的数字按从小到大的顺序排列，
然后遍历数组，将当前元素与下一个元素做判断，
如果相同，则保存当前元素，并移除它，
然后从1开始遍历，用indexOf()方法寻找数组的缺失的那个数字。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    var result = [];
    nums.sort((x,y)=>(x-y));
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
            result.push(nums[i]);
            break;
        }
    }
    for (let i=1; i<=nums.length; i++) {
        if (nums.indexOf(i) === -1) {
            result.push(i);
            break;
        }
    }
    return result;
};

/*
这一题还可以参考
442. Find All Duplicates in an Array和448. Find All Numbers Disappeared in an Array
这两题的思路。
 */

var findErrorNums = function(nums) {
    var result = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== nums[nums[i]-1]) {
            let temp = nums[nums[i]-1];
            nums[nums[i]-1] = nums[i];
            nums[i] = temp;
            i--;
        }
    }
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== i+1) {
            result.push(nums[i],i+1);
        }
    }
    return result;
};
