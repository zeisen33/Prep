/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.

Hint: Don't forget that strings are immutable!

Examples:

capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

function capVowels(string) {
    let newArr = []
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            newArr.push((string[i].toUpperCase()))
            // newArr.push(string[i].toUpperCase())
        } else {
            newArr.push((string[i].toLowerCase()))
        }
    }

    return newArr.join('')
}
console.log(capVowels('boOtCamP PreP'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
