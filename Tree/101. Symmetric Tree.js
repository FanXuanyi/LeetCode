/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 */

/*
题目：
给定一个二叉树，检查它是不是对称的。

分析：
如果一个树是对称的，那么，以根节点为中心线，
最左边的节点应该与最右边的节点相等，
换句话说，先遍历父节点再遍历左子节点最后遍历右子节点的顺序，
应该与先遍历父节点再遍历右子节点最后遍历左子节点的顺序相同，
然后可以借鉴100. Same Tree这一题，新构造一个isSame()方法，
与该题不同的是，此处需要比较的是：
p的左子节点和p的右子节点是否相同以及p的右子节点和p的左子节点是否相同。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isSame(root,root);
};

var isSame = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSame(p.left,q.right) && isSame(p.right,q.left);
};
