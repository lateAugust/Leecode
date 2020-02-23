/*
* 题目:
*       字符          数值
*       I             1
*       V             5
*       X             10
*       L             50
*       C             100
*       D             500
*       M             1000
*       例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II
*       通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，
*       所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
*           I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
*           X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
*           C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
* 整体思路:
*       每次读取到当前和下一次的数值来比较, 然后判断要加还是减
*       存数据的时候不要存IV之类的数据, 因为没必要, 这样写性能会很差O(n^2)
* 缺点:
*       就是每次会多获取(访问)一个数据, 有点没必要
*       不过有种方法可以破, 就是使用当前和上一次的来判断(就是判断不知道怎么写, 有时间来研究研究)
* 技巧:
*       不要使用s[xxx]这样的方式读取字符串, 性能会很慢, 要使用charAt这个方法, 性能会提升很多
*       使用方法(内部switch)或者是对象形式来返回数据, 性能差不多, 几乎相同
* */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const getVal = item => {
        switch (item) {
            case "I":
                return 1;
            case "V":
                return 5;
            case "X":
                return 10;
            case "L":
                return 50;
            case "C":
                return 100;
            case "D":
                return 500;
            case "M":
                return 1000;
            default:
                return 0;
        }
    };
    let total = 0;
    for (let i = 0; i<s.length; i++) {
        let currentNum = getVal(s.charAt(i));
        let nextNum = getVal(s.charAt(i+1));
        if (currentNum >= nextNum) {
            total += currentNum;
        } else {
            total -= currentNum;
        }
    }
    return total;
};

console.log(romanToInt('MCMXCIV'));
