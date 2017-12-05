/*
 Write a function to delete a node (except the tail) in a singly linked list,
 given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.
 */

/*
题目：
写一个方法，删除单向链表的一个节点（最后一个节点除外）。

分析：
既然要移除当前节点，就是将前一个节点直接指向下一个节点，
所以，将节点的值赋为下一个节点的值，
将节点的指向next赋为下一个节点的指向，即node.next.next。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
