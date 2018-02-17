/*
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var set = {};
	var result = [];
	var count = 0;
	for (var i = 0; i < nums.length; i++){
	    if (set[nums[i]] !== undefined) {
	        result[set[nums[i]]][1]++;
	    } else {
	        set[nums[i]] = count;
	        result.push([nums[i],0]);
	        count++;
	    }
	}
	result.sort((x, y)=>(x[1] - y[1]));
	var final = [];
	for (var i = result.length - k; i < result.length; i++) {
	    final.push(result[i][0]);
	}
	return final;
};
