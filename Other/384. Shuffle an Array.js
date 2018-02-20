/*
Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
 */

/*
题目：
对一组不包含重复元素的数组进行随机重排（洗牌）。
reset()返回原始的数组，
shuffle()返回数组的一个随机排列，
并且使得获得数组的每一个排列的概率都是相同的。
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums || [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var arr = [];
    this.nums.forEach((val, key) => arr[key] = val);
    for (let i = 0; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * (arr.length - i)) + i;
        let temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
    return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */