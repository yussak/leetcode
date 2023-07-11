// https://leetcode.com/problems/defanging-an-ip-address/description/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split(".").join("[.]");
};

// ポイント

// replace()メソッドを使おうと思ったが、最初に一致するものしか置き換えられないのでNGだった
// address = "1.1.1.1"の時
// なので、split(".")で、"."で区切って[ '1', '1', '1', '1' ]にしてから、
// それをjoin("[.]")して1[.]1[.]1[.]1になった
