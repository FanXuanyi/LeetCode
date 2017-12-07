/*
Reverse a singly linked list.
 */

/*
题目：
反转单向链表。

分析：
假设有一个链表，1→2→3→4，
那么反转之后得到的链表应该是4→3→2→1，
这里，用pre来存取反转之后的节点，
首先，传入值为1的节点，
那么，1的下一个指向应该是null，
接着，传入值为2的节点，
那么，2的下一个指向就是1，
像这样，依次类推，直到遍历到最后一个节点，
`head.next = pre;pre = head;`这两行代码就是实现了上述反转的操作，
为了不断链并能继续访问下一个节点，
需要先用next保存下一个节点的值，即`next = head.next;`，
当反转操作结束后，再将该值赋给head，即`head = next;`。
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
var reverseList = function(head) {
    var pre = null,
        next = null;
    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
};
