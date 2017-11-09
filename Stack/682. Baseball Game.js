/*
You're now a baseball game point recorder.

Given a list of strings, each string can be one of the 4 following types:

Integer (one round's score): Directly represents the number of points you get in this round.
"+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
"D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
"C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
Each round's operation is permanent and could have an impact on the round before and the round after.

You need to return the sum of the points you could get in all the rounds.

Example 1:
Input: ["5","2","C","D","+"]
Output: 30
Explanation:
Round 1: You could get 5 points. The sum is: 5.
Round 2: You could get 2 points. The sum is: 7.
Operation 1: The round 2's data was invalid. The sum is: 5.
Round 3: You could get 10 points (the round 2's data has been removed). The sum is: 15.
Round 4: You could get 5 + 10 = 15 points. The sum is: 30.

Example 2:
Input: ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
Round 1: You could get 5 points. The sum is: 5.
Round 2: You could get -2 points. The sum is: 3.
Round 3: You could get 4 points. The sum is: 7.
Operation 1: The round 3's data is invalid. The sum is: 3.
Round 4: You could get -4 points (the round 3's data has been removed). The sum is: -1.
Round 5: You could get 9 points. The sum is: 8.
Round 6: You could get -4 + 9 = 5 points. The sum is 13.
Round 7: You could get 9 + 5 = 14 points. The sum is 27.

Note:
1. The size of the input list will be between 1 and 1000.
2. Every integer represented in the list will be between -30000 and 30000.
 */

/*
题目：
假设有一个字符串列表，每一个字符串是下列四种类型之一：
整数（一轮的得分）：直接代表你在这轮的得分。
"+"（一轮的得分）：表示你在这轮的得分是上两轮有效得分之和。
"D"（一轮的得分）：表示你在这轮的得分是上一轮有效得分的两倍。
"C"（一个操作，不是一轮的得分）：表示你在上一轮的有效得分无效，应该移除。
每一轮的操作是永久的，会对上一轮和下一轮产生影响。
你需要返回在所有回合后的总得分。

分析：
创建一个result数组来保存所有有效分数，
遍历这个字符串数组，
如果值为"C"，则移除上一轮的有效分数。
如果值为"D"，则把上一轮的有效分*2再加入到result中，
如果值为"+"，则把上两轮的有效分相加之后再加入到result中，
如果值不是以上三种，即为整数，
因为这是一个由字符串组成的数组，
所以需要用parseInt()方法将字符串转换成数字之后，再加到result中，
最后，遍历result数组，
所有数相加之后的和，即为所求。

在这里，我采用的是shift()和unshift()方法，
在数组的首位实现元素的移除和添加，
这就实现了栈的功能，后进先出。
如果在数组末尾进行添加和删除，
那么，每次在获取上一轮分数时，都要先获取数组的长度才能得到分数值，
而在数组的首位进行操作，可以避免这一步操作。
 */

/**
 * @param {string[]} ops
 * @return {number} sum
 */
var calPoints = function(ops) {
    var sum = 0,
        result = [];
    for (var i=0; i<ops.length; i++) {
        if (ops[i] === 'C') {
            result.shift();
        }
        else if (ops[i] === 'D') {
            var score1 = result[0] * 2;
            result.unshift(score1);
        }
        else if (ops[i] === '+') {
            var score2 = result[0] + result[1];
            result.unshift(score2);
        }
        else {
            result.unshift(parseInt(ops[i]));
        }
    }
    for (var j=0; j<result.length; j++) {
        sum += result[j];
    }
    return sum;
};

/*
下面是我看见别人的一种解法：
var calPoints = function(ops) {
    const arr = [];
    const actions = {
        C: () => arr.pop(),
        D: () => arr.push(arr[arr.length - 1] * 2),
        '+': () => arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    };
    for (let a of ops) {
        a in actions ? actions[a]() : arr.push(+a);
    }
    return arr.reduce((sum, num) => sum + num);
};
 */
