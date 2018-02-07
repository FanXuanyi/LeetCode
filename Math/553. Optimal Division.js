/*
Given a list of positive integers, the adjacent integers will perform the float division. For example, [2,3,4] -> 2 / 3 / 4.

However, you can add any number of parenthesis at any position to change the priority of operations. You should find out how to add parenthesis to get the maximum result, and return the corresponding expression in string format. Your expression should NOT contain redundant parenthesis.

Example:

Input: [1000,100,10,2]
Output: "1000/(100/10/2)"
Explanation:
1000/(100/10/2) = 1000/((100/10)/2) = 200
However, the bold parenthesis in "1000/((100/10)/2)" are redundant,
since they don't influence the operation priority. So you should return "1000/(100/10/2)". 

Other cases:
1000/(100/10)/2 = 50
1000/(100/(10/2)) = 50
1000/100/10/2 = 0.5
1000/100/(10/2) = 2

Note:
1. The length of the input array is [1, 10].
2. Elements in the given array will be in range [2, 1000].
3. There is only one optimal division for each test case.
 */

/*
题目：
给定一组正整数，相邻的整数将执行浮点除法。
然而，你可以添加括号来改变运算操作的优先级。
你需要添加括号后得到最大的结果，返回结果以字符串的形式输出。
你的表达式中不应该包含多余的括号。

分析：
除了第一个数，其他所有数都可以作为除数，
在第二个数存在的情况下，第二数一定是除数，
第二个数之后的数都可以转换为乘积。
考虑如下三种情况：
一是只有一个数时，转换为字符串形式返回即可；
二是两个数时，第一个数除以第二个数返回即可；
三是有三个或三个数以上时，第一个数乘以第二数之后的所有数后，再除以第二个数，
此时只会有一个括号括起除第一个数的所有数。
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    var len = nums.length;
    if (len === 1) {
        return nums.toString();
    }
    if (len === 2) {
        return nums[0] + "/" + nums[1];
    }
    var result = nums[0].toString();
    for (let i = 1; i < len; i++) {
        if (i === 1) {
            result += "/(" + nums[i];
        } else {
            result += "/" + nums[i];
        }
    }
    result += ")";
    return result;
};
