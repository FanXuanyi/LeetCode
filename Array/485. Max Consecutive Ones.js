/*
Given a binary array, find the maximum number of consecutive 1s in this array.

Example:
Input: [1,1,0,1,1,1]
Output: 3
Explanation:
The first two digits or the last three digits are consecutive 1s.
The maximum number of consecutive 1s is 3.

Note:
1. The input array will only contain 0 and 1.
2. The length of input array is a positive integer and will not exceed 10,000
 */

/*
题目：
假设有一个二进制数组，找出这个数组中1连续的最大个数。

分析：
首先，设置一个变量count用于统计1连续的个数，一个数组arr用于存储1连续的所有个数，
然后，遍历这个二进制数组，遇见1就将count加1，遇见0就将count置0，
其中，在将count置0之前需要将count统计后的值放在一个变量num中，
再将num的值放在arr数组中，这样做是为了防止统计后的个数丢失，
接下来，遍历arr数组，找出其中的最大值，即为所求。
 */

/**
 * @param {number[]} nums
 * @return {number} maxNum
 */
var findMaxConsecutiveOnes = function(nums) {
    var arr = [],//用于存储1连续的所有个数
        count = 0,//用于统计1的个数
        num = 0,//每次遇到0之前，1连续的个数
        maxNum = 0;
    for (var i=0; i<nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            num = count;
        }
        else {
            num = count;
            count = 0;
        }
        arr.push(num);
    }
    for (var j=0;j<arr.length; j++) {
        if(maxNum < arr[j]) {
            maxNum = arr[j];
        }
    }
    return maxNum;
};
