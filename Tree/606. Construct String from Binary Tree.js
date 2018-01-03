/*
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()".
And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

Example 1:
Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

Output: "1(2(4))(3)"
Explanation: Originallay it needs to be "1(2(4)())(3()())",
but you need to omit all the unnecessary empty parenthesis pairs.
And it will be "1(2(4))(3)".

Example 2:
Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

Output: "1(2()(4))(3)"
Explanation: Almost the same as the first example,
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
 */

/*
题目：
你需要构造一个由圆括号和整数组成的字符串，
整数的顺序是先序遍历二叉树的顺序。
空节点由"()"表示。

分析：
先序遍历的顺序是：父节点 → 左子节点 → 右子节点，
观察例子可以发现如下特点：
只有左子节点时，表示为(left)，
只有右子节点时，表示为(()(right))，
左右子节点同时存在时，表示为((left)(right))。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    var str = "";
    if (t === null) {
    	return str;
    }
    str += t.val;
    var left = tree2str(t.left);
    var right = tree2str(t.right);
    if (left === "" && right === "") {
    	return str;
    }
    else if (left === "") {
    	str += "()" + "(" + right + ")";
    }
    else if (right === "") {
    	str += "(" + left + ")";
    }
    else {
    	str += "(" + left + ")" + "(" + right + ")";
    }
    return str;
};
