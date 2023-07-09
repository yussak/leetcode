// https://leetcode.com/problems/two-sum/description/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// これはとりあえず解くためのコードで、もっといい書き方はできる

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i = 0; i < nums.length-1; i++){
        for(j = i+1; j<nums.length; j++){
            // console.log("i=",i, "j=",j)
            if(nums[i]+nums[j]===target) {
                return [i,j];
            }
        }
    }
};

// ポイント

// 以下のようにしたい
// i= 0 j= 1
// i= 0 j= 2
// i= 0 j= 3
// i= 1 j= 1
// i= 1 j= 2
// i= 1 j= 3

// jはi以下の値にしないので、初期値はi+1にする

// i<nums.length-1でもi<=nums.lengthでも動作は同じだけど、コード量が少ないので前者の方が良さそう
// i<nums.lengthでもエラーが出ないことはあるけど、出る可能性はあるので-1の方にする

// return [i,j]で[0,1]のように返せるが、一個返した時点で終了する。なので複数ペアを返す必要があるなら他の方法を探す必要がある
