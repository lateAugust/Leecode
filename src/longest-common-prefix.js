/*
 * 题目:
 *       编写一个函数来查找字符串数组中的最长公共前缀。
 *       如果不存在公共前缀，返回空字符串 ""。
 *
 *       输入: ["flower","flow","flight"]
 *       输出: "fl"
 *       输入: ["dog","racecar","car"]
 *       输出: ""
 *
 *整体思路:
 *       使用正则匹配结合while循环, 每一次循环时候都要修改正则和当前的的字符数
 *       在每一次进入while里, 要修改reg和当前的公缀, 如果有不同, 走向下一个
 *       不能在正则最后面加入$, 否则会影响返回值, 因为是公缀数, 所以并不确定第一个就是公缀数
 *       str.length && !reg.test(item)
 *           str.length 如果为空, 则需要跳出循环, 因为没有公缀数
 *           reg.test(item) 如果为true, 则表示这两个部分相同, 不需要继续找了; 为false, 则完全不相同, 需要对返回值做裁剪(裁剪是最后一个做的, 减去不相同的部分)
 *           这个判断只能写在while里, 不可以直接用if, 因为不知道他的公倍数是多少, 需要这个条件来判断
 *小技巧:
 *       不要在for里写多个判断(特别是for->for里)这样是会速度变慢
 *       巧用while循环
 * */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    let str = strs.splice(0, 1)[0];
    if (!str) return "";
    let reg = new RegExp("^" + str);
    for (let i = 0; i < strs.length; i++) {
        let item = strs[i];
        while (str.length && !reg.test(item)) {
            str = str.slice(0, str.length - 1);
            reg = new RegExp("^" + str);
        }
    }
    return str;
};

console.log(longestCommonPrefix(["aca", "adb", "aca"]));
