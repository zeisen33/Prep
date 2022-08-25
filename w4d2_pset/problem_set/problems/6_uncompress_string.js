/***********************************************************************
Write a function `uncompressString(str)` that takes in a "compressed"
string and returns the "uncompressed" version of the string. In the
input `str`, every letter is followed by a single digit number that
specifies how many times that character is repeated.

HINT: Use the built-in `Number` function to turn the string
representation of a number into a number
Number('42'); // => 42;

Examples:

uncompressString('a2b4c1'); // => 'aabbbbc'
uncompressString('b1o2t1'); // => 'boot'
uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'
***********************************************************************/
let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

function uncompressString(str) {
    let newStr = ''
    let number = null
    for (let i = 0; i < str.length; i++) {                          // would have to change this around for multi-digit numbers
        if (digits.includes(str[i])) {
            for (let j = 0; j < Number(str[i]); j++) { 
                newStr += str[i - 1]
            }
            //console.log(Number(str[i]))
        }
    }
    return newStr
}
console.log(uncompressString('x3y1x2z4'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = uncompressString;
