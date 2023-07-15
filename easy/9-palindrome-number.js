// https://leetcode.com/problems/palindrome-number/submissions/

// Given an integer x, return true if x is a 
// palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xsign =Math.sign(x)
    
    if (xsign===-1){
        return false;
    }

    const xarr=x.toString().split("")
    const xrev=xarr.reverse()
    const newx=Number(xrev.join(""))

    if (x===newx){
        return true;
    } else {
        return false;
    }
};

// ポイント
// Math.sign()でプラスマイナスを判定できる
// マイナスなら-1が返るので、その時は早期falseリターンする

// プラスの時
// reverse()を使いたいが、与えられたのがnumberで、arrayではないと使えない。なので配列に変換した
// split()で配列に変換できるが、stringではないと使えないのでtoString()した
// それをreverseさせた後、再度join()で文字列にしてからNumber()で数値にした

// その値と元の値を比較した
