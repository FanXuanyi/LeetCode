/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?
 */

/*
题目：
给定一个未排序的整数数组，找到最长递增子序列的长度。

分析：
根据例子可以发现，该递增子序列可以是不连续的。
用一个数组dp来存取长度，
dp[i]表示在以nums[i]这个数为结尾的情况下的最长递增子序列的长度，
如果最长递增子序列以nums[i]为结尾，
那么，在nums[0...i-1]中所有比nums[i]小的数都可以作为该递增子序列的倒数第二个数，
所以，选择可以使递增子序列更长的那个数作为倒数第二个数，
即dp[i] = Math.max(dp[i], dp[j]+1)。
该算法时间复杂度为O(n)。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var dp = [];
    for (let i = 0; i< nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
    }
    dp.sort((x,y)=>(x-y));
    return dp[dp.length-1];
};

/*
时间复杂度O(NlogN)生成dp数组的过程是利用二分查找来进行的优化。
定义一个数组ends和一个变量limit，
ends[0...limit]为有效区，ends[limit+1...]为无效区，
如果ends[b]=c，该式表示遍历到目前为止，在所有长度为b+1的递增序列中，最小的结尾数是c。
无效区的位置则没有意义。
举个例子，比如nums=[2, 1, 5, 3, 6]，
初始时，dp[0]=1，ends[0]=2，limit=0，ends=[2]，
其中ends[0]=2是指在遍历过nums[0]之后，所有长度为1的递增序列中（此时只有[2]），最小的结尾数是2；
遍历到nums[1]=1时，有效区为[2]，在有效区找到最左边的大于或等于nums[1]的数，
此时2大于1，所以，以nums[1]结尾的最长递增子序列为[1]，
那么，dp[1]=1，ends[0]=1，ends=[1]；
遍历到nums[2]=5时，有效区为[1]，在有效区找到最左边的大于或等于nums[2]的数，
此时1小于5，所以，以nums[2]结尾的最长递增子序列为[1, 5]，
那么，dp[2]=2，ends[1]=5，ends=[1, 5];
遍历到nums[3]=3时，有效区为[1, 5]，在有效区找到最左边的大于或等于nums[3]的数，
此时5大于3，所以，以nums[3]结尾的最长递增子序列为[1, 3]，
那么，dp[3]=2，ends[1]=3，ends=[1, 3];
遍历到nums[4]=6时，有效区为[1, 3]，在有效区找到最左边的大于或等于nums[4]的数，
此时3小于6，所以，以nums[4]结尾的最长递增子序列为[1, 3, 6]，
那么，dp[4]=3，ends[2]=6，ends=[1, 3, 6]。
 */

var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var dp = [];
    dp[0] = 1;
    var ends = [];
    ends[0] = nums[0];
    var limit = 0;
    for (let i = 1; i< nums.length; i++) {
        let left = 0,
            right = limit;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[i] > ends[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        limit = Math.max(limit, left);
        ends[left] = nums[i];
        dp[i] = left + 1;
    }
    dp.sort((x,y)=>(x-y));
    return dp[dp.length-1];
};

/*
上面的代码中使用一个数组存储了所有递增子序列的长度，
下面这段代码中只保存了最长递增子序列的长度。
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var dp = 1;
    var ends = [];
    ends[0] = nums[0];
    var limit = 0;
    for (let i = 1; i< nums.length; i++) {
        let left = 0,
            right = limit;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[i] > ends[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        limit = Math.max(limit, left);
        ends[left] = nums[i];
        dp = Math.max(dp, left + 1);
    }
    return dp;
};
