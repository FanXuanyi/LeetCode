/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

/*
题目：
给定两个非空链表，分别代表两个非负整数。
位以相反的顺序存储，每一个节点包含一个位。
相加这两个数，以链表的形式返回。

分析：
最容易想到的实现方式是：
先将两个链表表示成各自所代表的整数，
然后求出这两个整数的和，
最后转换成链表的形式输出，
但是，这种方法存在一个很大的问题，
即链表的长度很长时，所代表的整数也就越大，此时可能会溢出。

下面换一种方式思考：
依次获取两个链表的节点，将获取的节点值相加，
如果相加的值大于10，则表示产生进位，并将该位上的值减去10，然后记为新链表的节点，
如果不大于10，则直接将和记为新链表的节点，
再进行下一位操作之前，需将进位值保存在sum中，并将进位清0，
一直重复上述操作，直至链表遍历结束。
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
var addTwoNumbers = function(l1, l2) {
    var node = new ListNode();
    var prev = node;
    var sum = 0,
        c = 0;
    while(l1 !== null || l2 !== null || sum > 0 ) {
        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if(sum >= 10){
            c = 1;
            sum -= 10;
        }
        prev.next = new ListNode(sum);
        prev = prev.next;
        sum = c;
        c = 0;
    }
    return node.next;
};
