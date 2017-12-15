/*
You are given a string representing an attendance record for a student.
The record only contains the following three characters:
    'A' : Absent.
    'L' : Late.
    'P' : Present.

A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True

Example 2:
Input: "PPALLL"
Output: False
 */

/*
题目：
给定一个字符串，它表示一个学生的出勤记录。
这个记录只包含下列三个字符：
	'A' : 缺勤
    'L' : 迟到
    'P' : 到场
如果一个学生的出勤记录中，
缺勤次数不多于1次，或是连续迟到次数不多于两次，
则该学生会得到奖励。
你需要根据这个出勤记录来判断学生是否能得到奖励。

分析：
最开始，我想到的是：
遍历这个字符串，统计'A'和'L'出现的次数，分别存在countA和countL中，
然后判断countA的值是否大于1，countL的值是否大于2，
如果有一个符合大于的条件就返回false，
这样做就忽略了'L'应是连续出现的问题，
所以，在遍历过程中，
如果出现不是'L'的情况时，应将countL置为0。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var countA = 0,
        countL = 0;
    for (let i=0; i< s.length; i++) {
        if (s[i] === 'A') {
            countA++;
            countL = 0;
            if (countA > 1) {
                return false;
            }
        }
        else if (s[i] === 'L') {
            countL++;
            if (countL > 2) {
                return false;
            }
        }
        else {
            countL = 0;
        }
    }
    return true;
};
