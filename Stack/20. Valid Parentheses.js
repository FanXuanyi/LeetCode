/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

The brackets must close in the correct order,
"()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/*
题目：
给定一个字符串，该字符串只由'(', ')', '{', '}', '[' and ']'组成，
判断这个字符串输出是否有效。
括号必须是按正确的顺序关闭，
"()"和"()[]{}"都是有效的，但是"(]"和"([)]"是无效的。

分析：
最开始，我想到的是分别从头和尾遍历，
判断头和尾是不是一对括号，
但是，这只能考虑到括号嵌套的情况，
而忽略了单独成对的可能，比如"()[]{}"这一可能。

既然如此，换一种思考方式，使用栈这一数据结构的特点，
遍历这个字符串，
当出现左括号时，就入栈，
当出现右括号时，将其与栈顶元素作比较，
如果是一对，就将之前入栈的左括号进行出栈操作，
遍历结束后，判断栈是否为空，
如果为空，则有效，否则无效。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.unshift(s[i]);
        }
        else if ((stack[0]==='(' && s[i]===')') || (stack[0]==='{' && s[i]==='}') || (stack[0]==='[' && s[i]===']')) {
            stack.shift();
        }
        else {
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    }
    else {
        return false;
    }
};
