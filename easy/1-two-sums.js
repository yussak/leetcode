// 模範（chatgptに聞いた）
// Runtime 62ms Beats 66.40% of users with JavaScript
// Memory 51.42MB Beats 12.61% of users with JavaScript
var twoSum = function(nums, target) {
    // hashmapを使うとfor一回に減らせる
    const map = new Map();
    
    // ９−2=7で7は存在するので[0,1], 6-3=3=>3は他には存在しないので何もしない、6-2=4=4は存在するので[]1,2]
    // target-nums[i]の要素が存在しているかチェックし、あるなら[i, target-nums[i]のindex]が答えになる
    
    for (let i　=0; i<nums.length; i++) {
        const complement = target-nums[i];
        if (map.has(complement)) {
            // 答えは一つだけだからtrueの時点でreturnする
            return [i, map.get(complement)];
        }
        // ifチェックしてからsetの理由：すでにmapにある値を追加しないため
        // キーがnums[i]でバリューがiの理由：今回必要なのはindexだから
        map.set(nums[i], i);
    }
};

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
