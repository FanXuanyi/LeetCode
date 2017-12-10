/*
Merge two sorted linked lists and return it as a new list.
The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

/*
题目：
合并两个有序链表，返回合并后的新链表。

分析：
首先，判断两个链表中是否存在空链表，
如果有一个链表为空，则不需要合并过程，返回另一个链表的头节点即可。
如果两个链表都不为空，则继续如下操作：
比较l1和l2头节点的值，较小值的节点为合并后链表的头节点，记为head，
然后，将head为头节点的链表记为cur1，另一链表即为cur2，
将两个链表从头到尾开始比较，根据大小关系做出不同的调整，
同时用一个变量pre表示上次比较时较小的节点，
如果cur1小于cur2，不做调整，继续遍历下一个节点，
如果cur2小于cur1，让pre的next指针指向cur2，cur2的next指针指向cur1，
如果cur1这一链表先走完，pre就是该链表的最后一个节点，
将pre的next指针指向cur2这一链表的当前节点，
如果cur2这一链表先走完，则说明cur2的所有节点都已插入到cur1中。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null || l2 === null) {
        return l1 !== null ? l1 : l2;
    }
    var head = l1.val < l2.val ? l1 : l2;
    var cur1 = head === l1 ? l1 : l2;
    var cur2 = head === l1 ? l2 : l1;
    var pre = null,
        next = null;
    while (cur1 && cur2) {
        if (cur1.val <= cur2.val) {
            pre = cur1;
            cur1 = cur1.next;
        }
        else {
            next = cur2.next;
            pre.next = cur2;
            cur2.next = cur1;
            pre = cur2;
            cur2 = next;
        }
    }
    pre.next = cur1 === null ? cur2 : cur1;
    return head;
};
