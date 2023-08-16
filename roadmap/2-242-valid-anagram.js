/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // これだとパフォーマンスが良くない気がするので、もっといい答えを考える
    return s.split("").sort().join("")===t.split("").sort().join("")
};
