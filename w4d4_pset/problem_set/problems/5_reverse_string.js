/***********************************************************************
Write a function `reverseString(string)` that takes in a string as a parameter
and returns the string reversed. Do this recursively. You should not use
the array.reverse method.

Examples

reverseString('bootcamp'); // => 'pmactoob'
reverseString('app academy'); // => 'ymedaca ppa'
reverseString(''); // => ''
***********************************************************************/
function reverseString(string) {
    if (string === '') {            // base case
        return ''
    } 
    let firstChar = string[0]
    let restOfString = string.slice(1, string.length)
    return reverseString(restOfString) + firstChar
}
    

     
    // let remainingStr = string
    // let newStr = ''
    // if (remainingStr = '') {
    //     return newStr
    // } else {
    //     newStr += remainingStr.slice(-1)
    //     remainingStr = remainingStr.slice(0, -1)
    //     //return reverseString(remainingStr)
    //     return reverseString(remainingStr)
    // }

console.log(reverseString('bootcamp'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseString;
