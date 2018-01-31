/*
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])
 */

/*
题目：
给定一个非负整数n，计算各个位上都不相同的所有数的个数，x的范围是0≤x<10^n。

分析：
一位数，即0~9，满足题目要求的个数是10个；
两位数，即10~99，满足题目要求的个数是9*9=81个；
三位数，即100~999，由数理统计的知识，
百位上可以或1~9之间任意一个数，即9种取法，
那么在十位上只能取非百位上的剩下9个数，即9种取法，
在个位上只能取除百位和十位之外的数，即8种取法，
所以满足题目要求的个数是9*9*8个；
由此可以发现，
k位数中满足题目要求的个数为9*9*8*...*(11-k)，
再根据n的大小，把各个区间位数满足题目要求的个数累加起来即可。
 */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) {
		return 1;
	}
    var res = 10;
    var count = 9;
    for (let i = 2; i <= n; i++) {
        count *= (11 - i);
        res += count;
    }
    return res;
};
