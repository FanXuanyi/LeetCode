/*
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
 */

/*
题目：
给定一个单链表，判断它是否为回文结构。

分析：
从头遍历链表，将每个节点压入栈中，
其实也就是利用数组的push()和pop()方法来实现栈的先进后出这一特点，
从栈顶到栈底的节点值的顺序就刚好与原链表的顺序相反，
再将原链表的值从头到尾依次与从栈顶到栈底的值进行比较，
如果出现不等，就不是回文结构。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var stack = [];
    var cur = head;
    while (cur) {
        stack.push(cur);
        cur = cur.next;
    }
    while (head) {
        if (head.val !== stack.pop().val) {
            return false;
        }
        head = head.next;
    }
    return true;
};
