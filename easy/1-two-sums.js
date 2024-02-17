

// brute-forceの解答
// 以下だと計算量がO(N^2）で非効率
var twoSum = function(nums, target) {
    // 0,1 02,12,13...,23
    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++){
            if (nums[i]+nums[j]==target) {
                return [i,j]
            }
            // console.log("i,j",i,j)
        }
    }
};
