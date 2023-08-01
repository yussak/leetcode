// NeetCode roadmap 一問目
// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // console.log(nums)
    // console.log(new Set(nums).size)

    // const nl=nums.length
    // const ss=new Set(nums).size

    // // if (nl !== ss) {
    // //     return true
    // // }else {
    // //     return false
    // // }
    // console.log("nl,ns",nl!==ss)
    // console.log("nl,ns",nl===ss)

    return nums.length!==new Set(nums).size

};
