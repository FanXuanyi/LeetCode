/*
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2.
Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.
If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

Note:
1. All elements in nums1 and nums2 are unique.
2. The length of both nums1 and nums2 would not exceed 1000.
 */

/*
题目：
假设有两个数组（不完全一样）nums1和nums2，
nums1的元素是nums2的子集。
找出nums1中对应nums2位置处的下一个较大的元素。

下一个较大的元素指的是，在nums2中，它的右边第一个较大的数。
如果不存在，输出-1。

分析：
遍历nums1数组中的每一个数字，在nums2中找到该数，
然后向右遍历，找到第一个较大的数即可，
如果没有，则输出-1。
 */

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]} result
 */
var nextGreaterElement = function(findNums, nums) {
    var result = [];
    for (var i=0; i<findNums.length; i++) {
        for (var j=0; j<nums.length; j++) {
            if (findNums[i] === nums[j]) {
                for (var k=j+1; k<nums.length; k++) {
                    if (findNums[i] < nums[k]) {
                        result.push(nums[k]);
                        break;
                    }
                }
                if (k === nums.length)
                    result.push(-1);
            }
        }
    }
    return result;
};
