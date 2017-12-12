/*
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
 */

/*
题目：
给定一个链表，判断它是否有环。
不能使用多余的空间。

分析：
使用快慢指针来实现，
如果有环，则两个指针总会有相遇的时刻。
快慢指针的步长可以随意设置，
这里，我将快指针的步长设为2，慢指针的步长为1。
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
var hasCycle = function(head) {
    var fast = head,
        slow = head;
    while (fast && slow && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
