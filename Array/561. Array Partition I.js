/*
Given an array of 2n integers,
your task is to group these integers into n pairs of integer,
say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.


Input: [1,4,3,2]
Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

Note:
1. n is a positive integer, which is in the range of [1, 10000].
2. All the integers in the array will be in the range of [-10000, 10000].
 */

/*
题目：
假设有一个含有2n项的数组，将这个数组分为n组，两个数为一组，
将每组中的最小数相加，得出的和即为输出。

根据给出的例子分析得出：
首先，需要将数组以从小到大的顺序重新排列；
然后，我们需要将两个相邻的数划分为一组，并取其中较小的一个数，
因为这些数已经按照从小到大的顺序排列了，
所以，每组中的较小的那个数只能是每组的第一个，也就是数组索引为偶数的数，
故只需要将重新排列后的数组中索引为偶数的数相加即可。
 */

/**
 * @param {number[]} nums
 * @return {number} sum
 */
var arrayPairSum = function(nums) {
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len-1-i; j++) {
            if (nums[j] > nums[j+1]) {
                var temp  = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }
    var sum = 0;
    for (var k = 0; k < len; k += 2) {
        sum += nums[k];
    }
    return sum;
};

/*
在上面这段我实现的代码中，数组排序我采用的是冒泡排序，
考虑到最优性，可以采用数组的sort()方法来进行排序。
排序的代码如下：
nums.sort(function(a,b){
    return a-b;
});
或者使用箭头函数来表示：
nums.sort((x,y)=>x-y);
 */
