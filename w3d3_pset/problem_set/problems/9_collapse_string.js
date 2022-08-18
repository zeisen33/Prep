/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

function collapseString(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            continue
        } else {
            newStr = newStr.concat(str[i])
        }
    }
    return newStr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
