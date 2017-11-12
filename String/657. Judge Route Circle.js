/*
Initially, there is a Robot at position (0, 0).
Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string.
And each move is represent by a character.
The valid robot moves are R (Right), L (Left), U (Up) and D (down).
The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true

Example 2:
Input: "LL"
Output: false
 */

/*
题目：
这里有一个机器人在(0,0)的位置上。
假设有一条移动的序列，判断机器人是否走的是一个圆，也就是说它是否回到了原位置。
这条移动的序列由一个字符串表示。
每一次移动由一个字符表示。
机器人的有效移动是R（右）、L（左）、U（上）和D（下）。
输出结果只能是true或false来表示机器人走的是否是一个圆。

分析：
首先，设置变量x和y分别表示机器人的横、纵坐标，并且初值都为0，
然后，遍历这个字符串，
用if或switch做判断，
如果值为R，表示向右移动，x++，
如果值为L，表示向左移动，x--，
如果值为U，表示向上移动，y++，
如果值为D，表示向下移动，y--，
遍历结束后，将x、y的值与0比较，
如果都为0，则为true，表示回到了原点，否则为false。
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var x = 0,
		y = 0;
    for (var i=0; i<moves.length; i++) {
        switch(moves[i]){
            case 'R': x++;
                break;
            case 'L': x--;
                break;
            case 'U': y++;
                break;
            case 'D': y--;
                break;
        }
    }
    if (x === 0 && y === 0) {
        return true;
    }
    else{
        return false;
    }
};
