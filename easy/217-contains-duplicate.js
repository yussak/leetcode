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
// new Set(array)で重複したものを除いて返せる
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set#%E9%85%8D%E5%88%97%E3%81%8B%E3%82%89%E9%87%8D%E8%A4%87%E3%81%97%E3%81%9F%E8%A6%81%E7%B4%A0%E3%82%92%E5%8F%96%E3%82%8A%E9%99%A4%E3%81%8F

// Set.prototype.size でSetオブジェクト内の値の数を返せる（lengthではない）

// 以下はもっとスマートに書ける
// if (nl !== ss) {
//     return true
// }else {
//     return false
// }

// こう書ける
// return nums.length!==new Set(nums).size

// !==なのは、両方が一致しない時にtrueにするため
