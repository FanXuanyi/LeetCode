/*
Given an integer array,
you need to find one continuous subarray that if you only sort this subarray in ascending order,
then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Note:
1. Then length of the input array is in range [1, 10,000].
2. The input array may contain duplicates, so ascending order here means <=.
 */

/*
题目：
假设有一个整数数组，
如果你把一个连续子数组按从小到大的顺序排列，
那么，整个数组也将按从小到大的顺序排列，
你需要找到满足上述条件的最短子数组，并输出它的长度。

分析：
先将原数组复制一份，得到两个相同的数组origin和nums，
再将其中一个数组nums按从小到大的顺序排列，
然后，比较两个数组中对应处的数是否一样，
找到两个数组中第一次出现不一样和最后一次出现不一样的位置，
两个位置相减加1的值，即为所求。

在这里，我使用slice()方法复制了数组，
特别需要注意的是，
不能采用从一个变量向另一个变量复制的方法，
因为数组是引用类型，不是基本类型，
当一个变量向另一个变量复制引用类型的值时，
复制操作结束后，两个变量实际指向的是同一个对象，
所以，改变其中一个变量的值，也会影响另一个变量的值。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var origin = nums.slice();
    nums.sort((x,y)=>(x-y));
    var index = [];
    for (let i=0; i<nums.length; i++) {
        if (origin[i] !== nums[i]) {
            index.push(i);
        }
    }
    var len = index.length;
    if (len === 0)
        return 0;
    else
        return index[len-1]-index[0]+1;
};
