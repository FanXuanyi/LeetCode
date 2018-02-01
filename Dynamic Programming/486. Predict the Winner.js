/*
Given an array of scores that are non-negative integers.
Player 1 picks one of the numbers from either end of the array followed by the player 2 and then player 1 and so on.
Each time a player picks a number, that number will not be available for the next player.
This continues until all the scores have been chosen.
The player with the maximum score wins.

Given an array of scores, predict whether player 1 is the winner.
You can assume each player plays to maximize his score.

Example 1:

Input: [1, 5, 2]
Output: False
Explanation: Initially, player 1 can choose between 1 and 2.
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2).
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5.
Hence, player 1 will never be the winner and you need to return False.

Example 2:

Input: [1, 5, 233, 7]
Output: True
Explanation: Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.

Note:
1. 1 <= length of the array <= 20.
2. Any scores in the given array are non-negative integers and will not exceed 10,000,000.
3. If the scores of both players are equal, then player 1 is still the winner.
 */

/*
题目：
给定一个非负整数的分数数组。玩家1从数组的头部或尾部选择一个数，
然后玩家2从剩下的数的头部或尾部选择一个数，像这样交替进行。
玩家每一次只能选一个数，选过的数不能被下一个玩家选择。
直到所有分数选完为止。获得最大分数的玩家获胜。
给定一个分数数组，判断玩家1是否是获胜者。
你可以假定每一个玩家获得的是他的最大分数。

分析：
如果玩家1是胜者，那么他拿到的分数一定大于玩家2的，
也就是说玩家1的分数减去玩家2的一定大于等于0。
如果是玩家1拿到的数，则记为正值，
如果是玩家2拿到的数，则记为负值，
又根据规则，每一次都是取数组中的第一个或最后一个数，
所以在玩家1和玩家2各取完一次后有两种可能，
一是取头部的数，即nums[start]-choose(nums,start+1,end)，
二是取尾部的数，即nums[end]-choose(nums,start,end-1)，
则可得递推关系为Math.max(nums[start]-choose(nums,start+1,end), nums[end]-choose(nums,start,end-1))。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    return choose(nums, 0, nums.length-1) >= 0;
};

var choose = function(nums, start, end) {
    if (start === end) {
        return nums[start];
    } else {
        return Math.max(nums[start]-choose(nums,start+1,end), nums[end]-choose(nums,start,end-1));
    }
};
