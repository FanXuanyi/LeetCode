/*
Given a non-empty array of non-negative integers nums,
the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums,
that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation:
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6

Note:
1. nums.length will be between 1 and 50,000.
2. nums[i] will be an integer between 0 and 49,999.
 */

/*
题目：
假设有一个非空数组，该数组由非负数组成，
数组的度指的是数组中出现次数最多元素的个数，
你的任务是找出与数组有相同度的最小连续子数组。

分析：
首先遍历数组，统计每个数出现的次数，
然后，找到数组中出现次数最多的元素个数，即数组的度，
接下来，用一个数组arr来保存出现次数最多的元素（因为可能不只有一个），
然后，嵌套循环遍历，用一个数组index保存数在nums中的索引，
这里，index[k+degree-1]-index[k]+1计算得到的结果就是子数组的长度，
取其中的最小值，即为所求。
 */

/**
* @param {number[]} nums
* @return {number} min
*/
var findShortestSubArray = function(nums) {
    var count = [];
    for (let i=0; i<nums.length; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 1;
        }
        else {
            count[nums[i]]++;
        }
    }
    var degree = 0;
    for (let j=0; j<count.length; j++) {
        if (degree < count[j]) {
            degree = count[j];
        }
    }
    var arr = [];
    for (let i=0; i<count.length; i++) {
        if (degree === count[i]) {
            arr.push(i);
        }
    }
    var index = [],
        min = nums.length;
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<nums.length; j++) {
            if (arr[i] === nums[j]) {
                index.push(j);
            }
        }
        for (let k=0; k<index.length-degree+1; k++) {
            min = Math.min(min,index[k+degree-1]-index[k]+1);
        }
        index = [];
    }
    return min;
};
