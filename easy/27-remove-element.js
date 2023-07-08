// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // spliceすると値が詰められる
    // 削除しない時だけ次の値に進む（削除するときは自動で詰められるので）
    let i=0;
    while(i<nums.length) {
        if(nums[i]===val) {
          // splice(start, deleteCount)
          nums.splice(i,1)
        }
        else {
            i++
        }
    }
    // console.log(nums)
    return nums.length
};
