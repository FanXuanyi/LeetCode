/*
Suppose you have a long flowerbed in which some of the plots are planted and some are not.
However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1,
where 0 means empty and 1 means not empty), and a number n,
return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: True

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: False

Note:
1. The input array won't violate no-adjacent-flowers rule.
2. The input array size is in the range of [1, 20000].
3. n is a non-negative integer which won't exceed the input array size.
 */

/*
题目：
假设你有一个花圃，有些地种了花，有些没有。
但是，这些花不能种在相邻的地上，种在相邻土地上的花将会因为竞争水源而死亡。
给定一个花圃由一个数组表示，这个数组包含0和1，
其中，0表示未种花，1表示种了花，
还给定了一个数n，返回这n朵新花是否可以种在花圃中。

分析：
从题目中可以得出，
数字为0的地方才可以种花，所以，我们需要获取到0连续的个数，
但是为了保证新种的花与已种的花没有影响，
我们需要考虑到边界条件，即左右两边是否有1，
特别的，当在数组的首端或末端出现0时，就不需要考虑左或右边界的问题，
为了方便，我们可以在首或末端出现0时，在首的前面或末的后面再添加一个0，
然后，遍历数组，统计连续的0的个数，
如果需要在某处种一朵花，则至少需要3个连续的0，
所以需要计算Math.floor((count-1)/2)的值，
用sum保存可以种花的个数，
最后比较sum与n的值就可以判断是否可以种花了。
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed === null)
        return false;
    if (n === 0)
        return true;
    if (flowerbed[0] === 0)
        flowerbed.unshift(0);
    if (flowerbed[flowerbed.length-1] === 0)
        flowerbed.push(0);
    var count = 0,
        sum = 0;
    var len = flowerbed.length;
    for (var i=0; i<=len; i++) {
        if (i < len && flowerbed[i] === 0) {
            count++;
        }
        else if (count !== 0){
            sum += Math.floor((count-1)/2);
            count = 0;
        }
    }
    return sum >= n;
};
