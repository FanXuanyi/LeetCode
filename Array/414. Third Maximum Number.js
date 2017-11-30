/*
Given a non-empty array of integers,
return the third maximum number in this array.
If it does not exist, return the maximum number.
The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]
Output: 1
Explanation: The third maximum is 1.

Example 2:
Input: [1, 2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: [2, 2, 3, 1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 */

/*
题目：
假设有一个非空整数数组，返回这个数组中第三大的数。
如果这个数不存在，就返回最大值。
时间复杂度必须在O(n)内。

分析：
既然要找到第三大的数，
我首先想到的是将数组按照从大到小的顺序重新排列，
然后，判断第三个数是否存在，
如果存在，即为所求，
如果不存在，返回第一个数即可，
但是，这里我忽略了会有重复数字的问题，
所以，在做判断之前，我将重复的数字删除，
此处的思想可以参考26. Remove Duplicates from Sorted Array这一题。
 */

/**
 * @param {number[]} nums
 * @return {number} result
 */
var thirdMax = function(nums) {
    var result = 0;
    nums.sort((x,y)=>(y-x));
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1,1);
            i--;
        }
    }
    if (nums.length >= 3)
        result = nums[2];
    else
        result = nums[0];
    return result;
};
