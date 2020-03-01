/*
* 题目:
*       给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
*           有效字符串需满足：
*           左括号必须用相同类型的右括号闭合。
*           左括号必须以正确的顺序闭合。
*           注意空字符串可被认为是有效字符串(这里就是 "" => true)
*
*整体思路:
*       使用一定在() [] {}在靠中间必有一个的思想, 如果匹配到, 那么可以把这对括号删了(字符串方法)
*       第二个思路和第一个差不多, 但是不用操作字符串思想, 使用栈, 只要数组最后一个和当前的右括号不匹配, 直接返回false, 否则为true
*
* 技巧:
*       操作字符串性能很差, replace或者slice都很差
*       还有字符串不可以像数组那样, 有splice方法, 所以要两次slice
*       使用栈的方法相比操作字符串可以提升20%以上的速度
*
* */



/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (!s) return true;
    const RULES = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    let stack = [];
    for (let item of s) {
        if (RULES[item]) {
            stack.push(item);
        } else if (item !== RULES[stack.pop()]){
            return false
        }
    }
    return !stack.length;
};

console.log(isValid("[({(())}[()])]"));// ([{}]) ({()[]}) ()[]{} ([]([{[()]()}()][]{}()[])) [({(())}[()])] (([]){})
