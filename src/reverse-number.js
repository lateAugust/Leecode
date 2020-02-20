/*
* 题目:
*       假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0
*       123 => 321 120 => 21 -123 => -321
* 题注:
*       不管输入的值还是输出的值都要小于数值范围
* 整体思路:
*       ① 是否需要把返回变为负数
*       ② 是否需要进行数据颠倒
*       ③ 颠倒后的数据是否大于规定范围
*       ④ 返回并还原同符号的数
* */
const reverse = function (x) {
    let lessZero = x < 0;
    x = lessZero? -1*x: x;
    let returnVal = 0;
    let [max, min] = [Math.pow(2, 31)-1, Math.pow(-2, 31)];
    if (x < max && x > min) {
        let str = '';
        for (let item of x.toString()){
            str = item + str;
        }
        returnVal = Number(str);
    }
    if (!returnVal || returnVal < max || returnVal > min) return 0;
    return lessZero? returnVal*-1: returnVal;
};

console.log(reverse(2147483650));
