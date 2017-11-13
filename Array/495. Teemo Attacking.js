/*
In LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition.
Now, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking,
you need to output the total time that Ashe is in poisoned condition.

You may assume that Teemo attacks at the very beginning of a specific time point,
and makes Ashe be in poisoned condition immediately.

Example 1:
Input: [1,4], 2
Output: 4
Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately.
This poisoned status will last 2 seconds until the end of time point 2.
And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds.
So you finally need to output 4.

Example 2:
Input: [1,2], 2
Output: 3
Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned.
This poisoned status will last 2 seconds until the end of time point 2.
However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status.
Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3.
So you finally need to output 3.

Note:
1. You may assume the length of given time series array won't exceed 10000.
2. You may assume the numbers in the Teemo's attacking time series and his poisoning time duration per attacking are non-negative integers, which won't exceed 10,000,000.
 */

/*
题目：
在LOL中，有一个名叫Teemo的英雄，他的攻击会让他的敌人Ashe处在中毒的状态。
现在，假设，Teemo对Ashe发起攻击的时间点是上升的，
并且给出了每次Teemo攻击之后的中毒持续时间，
你需要输出Ashe处于中毒状态的总时间。
假定Teemo在某个特定的时间点开始攻击，
并且可以让Ashe立刻处于中毒状态。

分析：
遍历这个数组，
将两个相邻时间点的差与中毒持续时间duration的大小作比较，
如果差大于duration，则直接将duration的值加在总时间上即可，
否则，就将两个时间点之差加到总时间上。
在这里，我的for循环只遍历到倒数第二项，
然后判断最后一项，
如果最后一项不为空，就把duration加到总时间上，
如果不做这个判断而直接将总时间与duration相加，
当数组为空时，就会出错。
 */

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number} time
 */
var findPoisonedDuration = function(timeSeries, duration) {
    var time = 0;
    for (var i=0; i<timeSeries.length-1; i++) {
        if (timeSeries[i+1]-timeSeries[i] > duration) {
            time += duration;
        }
        else {
            time += timeSeries[i+1] - timeSeries[i];
        }
    }
    if (timeSeries[timeSeries.length-1] != null) {
        time += duration;
    }
    return time;
};
