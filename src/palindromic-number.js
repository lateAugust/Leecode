/*
 * 题目:
 *       判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数
 *       123 => true -121 => false 10 => false
 * 整体思路:
 *       用取%和每次除10来缩小数字
 *       y = y*10 + s%10 这里是把数字给颠倒过来
 *       s = Math.floor(s/10) 每次循环缩小
 *       尽量不要用toString方法来写, 这样会是导致速度慢和内存过高
 * */

const isPalindrome = function (x) {
    if (x < 0) return false;
    if (x >= 1 && x < 10) return true;
    let y = 0;
    let s = x;
    while (s !== 0) {
        y = y * 10 + (s % 10);
        s = Math.floor(s / 10);
    }
    return x === y;
};

console.log(isPalindrome(121));
