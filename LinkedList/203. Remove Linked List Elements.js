/*
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
 */

/*
题目：
移除一个整数链表中所有值为val的元素。

分析：
从链表头开始，找到第一个值不为val的节点，作为新的头节点，
然后继续往后遍历，假设当前节点为cur，
如果cur的值等于val，就将cur节点删除，
删除的方式是将当前节点的上一个值不为val的节点连接到cur的下一个节点，
即`prev.next = cur.next;`，
否则就更新上一个值不为val的节点，即`prev = cur;`。
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while (head) {
        if (head.val !== val) {
            break;
        }
        head = head.next;
    }
    var prev = head;
    var cur = head;
    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next;
        }
        else {
            prev = cur;
        }
        cur = cur.next;
    }
    return head;
};
