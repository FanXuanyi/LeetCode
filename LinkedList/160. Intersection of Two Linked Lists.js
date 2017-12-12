/*
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:
A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
B:     b1 → b2 → b3
begin to intersect at node c1.

Notes:
1. If the two linked lists have no intersection at all, return null.
2. The linked lists must retain their original structure after the function returns.
3. You may assume there are no cycles anywhere in the entire linked structure.
4. Your code should preferably run in O(n) time and use only O(1) memory.
 */

/*
题目：
找到两个单链表开始相交的第一个节点。

分析：
根据题意，
如果两个链表不存在交集，就返回null；
在函数返回后，两个链表必须保持其原有的结构；
假定链表中没有环；
时间复杂度为O(n)，空间复杂度为O(1)。

既然题目已经说明是两个无环链表相交，
那么从相交节点开始，一直到两个链表终止的这一段，是两个链表共享的，
将两个链表分别从头开始遍历，记录链表的长度和链表的最后一个节点，
如果两个链表的最后一个节点不同，则说明两个链表不想交，返回null即可，
如果相同，比较两个链表的长度，
让较长的那个链表先走两个链表长度之差步，
然后让两个链表同时走，
返回两个链表第一次走到一起的那个节点，即为第一个相交的节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    var lenA = 0,
        lenB = 0,
        curA = headA,
        curB = headB;
    while (curA) {
        lenA++;
        curA = curA.next;
    }
    while (curB) {
        lenB++;
        curB = curB.next;
    }
    if (curA !== curB) {
        return null;
    }
    curA = lenA > lenB ? headA : headB;
    curB = curA === headA ? headB : headA;
    var len = Math.abs(lenA-lenB);
    while (len) {
        len--;
        curA = curA.next;
    }
    while (curA !== curB) {
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
};
