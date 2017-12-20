/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
 */

/*
题目：
写一个方法，实现字符串中元音字母的反转。

分析：
首先要知道元音字母有哪些，即"a"、"e"、"i"、"o"、"u",
这里不要忘了大写字母也符合要求，
然后，将字符串转为数组进行操作，
取两个指针left和right，
分别从头和尾开始遍历，
如果两边都是元音字母，就交换它们，
如果右边不是，将右指针继续向左移动，
如果左边不是，将左指针继续向右移动，
直到两个指针指向同一个元素时结束。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var arr = s.split('');
    var left = 0,
        right = arr.length - 1;
    while (left < right) {
        if (isVowels(arr[left]) && isVowels(arr[right])) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        else if (isVowels(arr[left])) {
            right--;
        }
        else {
            left++;
        }
    }
    return arr.join('');
};

var isVowels = function(char) {
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
     || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U';
};
