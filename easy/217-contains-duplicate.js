// NeetCode roadmap 一問目
// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // console.log(nums)
    // console.log(new Set(nums).size)

    return nums.length!==new Set(nums).size
};

// ポイント

// 以下はもっとスマートに書ける
// if (nl !== ss) {
//     return true
// }else {
//     return false
// }

// こう書ける
// return nums.length!==new Set(nums).size

// !==なのは、両方が一致しない時にtrueにするため
