/*
Given an array of integers and an integer k,
you need to find the number of unique k-diff pairs in the array.
Here a k-diff pair is defined as an integer pair (i, j),
where i and j are both numbers in the array and their absolute difference is k.

Example 1:
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.

Example 2:
Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).

Example 3:
Input: [1, 3, 1, 5, 4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).

Note:
1. The pairs (i, j) and (j, i) count as the same pair.
2. The length of the array won't exceed 10,000.
3. All the integers in the given input belong to the range: [-1e7, 1e7].
 */

/*
题目：
假设有一个整数数组和一个整数k，
你需要找到这个数组中唯一的k-diff pair，
k-diff pair被定义为是一个整数对(i,j)，
这里的i,j都是这个数组中的数，并且它们的差值为k。

分析：
首先，用sort()方法把数组按从小到大的顺序重新排列，
然后，嵌套循环遍历数组，
如果找到其中差值为k的数对，就将计数个数count加1。

这里需要注意两点：
一是数组中会有重复的数字，我们需要跳过重复的数字，
二是一旦一个数字找到可以与之配对的数字对之后，一定要跳出内循环。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number} count
 */
var findPairs = function(nums, k) {
    var count = 0;
    nums.sort((x,y)=>(x-y));
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[j]-nums[i] === k) {
                count++;
                break;
            }
        }
        while (nums[i] === nums[i+1]) {
            i++;
        }
    }
    return count;
};
