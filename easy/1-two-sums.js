

// brute-forceの解答
// Runtime 105ms Beats 29.74% of users with JavaScript
// Memory 49.43MB Beats 36.54% of users with JavaScript

// 以下だと計算量がO(N^2）で非効率
// j=i+1としているので同じ計算を何回もすることはなくなる
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
