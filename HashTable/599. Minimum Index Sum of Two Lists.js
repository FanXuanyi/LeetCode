/*
Suppose Andy and Doris want to choose a restaurant for dinner,
and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum.
If there is a choice tie between answers,
output all of them with no order requirement.
You could assume there always exists an answer.

Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

Note:
1. The length of both lists will be in the range of [1, 1000].
2. The length of strings in both lists will be in the range of [1, 30].
3. The index is starting from 0 to the list length minus 1.
4. No duplicates in both lists.
 */

/*
题目：
假定Andy和Doris想要选择一家餐厅吃晚餐，他们各自喜欢的餐厅列表用字符串表示。
你需要帮助他们找出他们共同喜欢的一家，并且加起来的索引和最小。
如果在这些答案中有一个选择，输出所有的可能。
你可以假定总是存在一个答案。

分析：
这一题有点类似于760. Find Anagram Mappings这一题，但是又比该题复杂一点。
将Andy的选择依次与Doris的选择进行比较，
如果两人选择相同，则记录该餐厅的名字和其对应的索引值之和，
这里需要做一个判断，
如果在该索引上不存在元素，则直接保存在该索引上，
如果该索引上存在元素，那么既要保存之前的还要存取新的，
最后遍历str（保存有索引值之和及餐厅名的对象），要用for-in循环，
找到第一个不为undefined的元素，
将其先转为字符串再转为字符数组，然后返回输出即可。
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var str = {};
    for (let i=0; i<list1.length; i++) {
        for (let j=0; j<list2.length; j++) {
        	if (list1[i] === list2[j]) {
        		if (str[i+j] === undefined) {
	                str[i+j] = list1[i];
	                break;
	            } else {
	                str[i+j] += "," + list1[i];
	                break;
	            }
        	}
        }
    }
    var result = [];
    for (let k in str) {
    	if (str[k] !== undefined) {
            result.push(str[k]);
            return result.toString().split(",");
    	}
    }
};
