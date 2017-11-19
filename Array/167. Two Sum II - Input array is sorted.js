/*
Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target,
where index1 must be less than index2.
Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
 */

/*
题目：
假设有一个整数数组，并且该数组的排列是按从小到大的顺序，
找到两个数，它们相加等于一个特殊的目标数。

函数twoSum将会返回这两个数的索引（假如它们相加等于目标数），
并且index1必须小于index2。
返回的结果（index1和index2）不是从0开始的。

假定每一个输入只有一种解法，不能使用相同的元素两次。


分析：
由题意，两个数相加的和为目标数，
那么，遍历数组，先取数组中的第一个数，
再嵌套循环遍历数组，从第二个数开始，
将数组的数依次与target减去第一个数的差值作比较，
如果相等，则返回索引，
否则，再取第二个数，然后从第三个数开始与差值比较，
就像这样，依次类推，直到找到满足要求的数。

注意一点，因为返回的索引不是从0开始的，
所以需要将数对应的索引加1。
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} index
 */
var twoSum = function(numbers, target) {
    var index = [];
    for (var i=0; i<numbers.length; i++) {
        for (var j= i+1; j<numbers.length; j++) {
            if (numbers[j] === (target-numbers[i]) ) {
                index = [i+1, j+1];
                break;
            }
        }
    }
    return index;
};
