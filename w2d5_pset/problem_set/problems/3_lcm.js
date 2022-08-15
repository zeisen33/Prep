/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.

Examples:

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/

function lcm(num1, num2) {
    let min = 0
    let max = 0
    if (num1 < num2) {
        min = num1
        max = num2
    } else {
        min = num2
        max = num1
    }
    for (let i = min; i <= max * min; i += min) {
        if (i % max === 0) {
            return i
        }
    }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = lcm;
