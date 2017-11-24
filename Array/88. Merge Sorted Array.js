/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
The number of elements initialized in nums1 and nums2 are m and n respectively.
 */

/*
题目：
假设有两个排序了的数组nums1和nums2，
将nums2合并到nums1中，成为一个排序了的数组。

分析：
最开始，我使用concat()方法将nums2合并到nums1上，
然后再用sort()方法将数组排序，
在这里，我忽略了新数组长度是m+n，
所以换一种思考方式，从数组的最后一个位置开始插入元素，
那么，nums1和nums2也要从后往前遍历，
如果出现下面两种情况，即：
nums1[i]存在，并且nums1[i]大于nums2[j]，
或者nums1[i]存在，并且nums[j]不存在，
就将nums1[i]添加进去，
否则将nums2[j]添加进去。
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var len = m+n-1;
    for (var i=m-1, j=n-1; len>=0; len--) {
        if ((nums1[i] > nums2[j] || j<0) && i>=0 ) {
            nums1[len] = nums1[i--];
        }
        else {
            nums1[len] = nums2[j--];
        }
    }
};
