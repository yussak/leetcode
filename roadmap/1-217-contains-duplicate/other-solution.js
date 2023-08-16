// https://www.youtube.com/watch?v=3OamzN90kPg&ab_channel=NeetCode
// => あまりパフォ上がってない気がする（runtime 40.63%, memory usage 62.98%）

// https://leetcode.com/problems/contains-duplicate/solutions/2459020/very-easy-100-fully-explained-c-java-python-javascript-python3-creating-set/

// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};

// =>違いはconst sしてるだけでパフォーマンスは逆に下がった気がする・・・なので自分の回答がベターな気がする
