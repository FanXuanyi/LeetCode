/*
Given a sorted linked list,
delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
 */

/*
题目：
给定一个排序后的链表，
删除所有的重复数，每个数只出现一次。

分析：
从头节点开始，依次检查之后的每个节点，
如果出现与头节点值相同的节点，则全部删除，
然后再看第二个节点，往后检查，删除所有与第二个节点值相同的节点，
像这样依此类推，直到检查到最后一个节点。
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var cur = head;
    var pre = null;
    var next = null;
    while (cur) {
    	pre = cur;
    	next = cur.next;
    	while (next) {
    		if (cur.val === next.val) {
    			pre.next = next.next;
    		}
    		else {
    			pre = next;
    		}
    		next = next.next;
    	}
    	cur = cur.next;
    }
    return head;
};
