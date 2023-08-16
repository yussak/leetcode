// https://leetcode.com/problems/valid-anagram/submissions/
// Runtime
// 82ms
// Beats 55.07%of users with JavaScript
// Memory
// 48.12mb
// Beats 23.18%of users with JavaScript

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split("").sort().join("")===t.split("").sort().join("")
};
