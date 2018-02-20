/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
 */

/*
题目：
给定一个罗马数字，将它转化为整数（阿拉伯数字）。
输入范围在1到3999。

分析：
罗马数字通过七个不同的符号重复或组合，能够表示出所有正整数，罗马数字没有0。
符号	值
  I     1
  V     5
  X     10
  L     50
  C     100
  D     500
  M     1000
计数规则如下：
若干相同字符连写，则将这些数字相加；
如果左边的字符表示的数字小于右边的，则用右边的数字减去左边的数字；
如果左边的字符表示的数字大于右边的，则用右边的数字加上左边的数字。
组合规则如下：
I、X、C中的任何一个，自身连用构成数目，或者放在大数的右边连用构成数目，都不能超过三个；放在大数的左边只能用一个；
不能把V、L、D中的任何一个作为小数放在大数的左边采用相减的方法构成数目；
放在大数的右边采用相加的方式构成数目，只能使用一个；
V和X左边的小数字只能用I；
L和C左边的小数字只能用X；
D和M左边的小数字只能用C。
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var set = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var result = 0;
    for (let i = 0; i < s.length; i++) {
        let cur = s[i],
            next = s[i+1];
        switch(cur) {
            case 'I':
                result += next === 'V' || next === 'X' ? -1 : set[cur];
                break;
            case 'X':
                result += next === 'L' || next === 'C' ? -10 : set[cur];
                break;
            case 'C':
                result += next === 'D' || next === 'M' ? -100 : set[cur];
                break;
            default:
                result += set[cur];
        }
    }
    return result;
};
