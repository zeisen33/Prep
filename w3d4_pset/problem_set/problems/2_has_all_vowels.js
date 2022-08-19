/***********************************************************************
Write a function `hasAllVowels(str)` that takes in a string and returns
true if the string contains every vowel (a, e, i, o, u) and false
otherwise.

Examples:

hasAllVowels('have you gone biking?'); // => true
hasAllVowels('get out of the way, silly'); // => true
hasAllVowels('bootcamp prep'); // => false
hasAllVowels('hello world'); // => false
***********************************************************************/

function hasAllVowels(str) {
    let vowels = {a : 0, e : 0, i : 0, o : 0, u : 0}
    for (let i = 0; i < str.length; i++) {
        if (vowels[str[i]] === 0) {
            vowels[str[i]]++
        }
    }
    // for (let key in vowels) {
    //     if (vowels[key] === 0) {
    //         return false
    //     }
    // }
    // return true
    // return for (let key in vowels) {                is there a way to loop in a return statement? would make line 23 easier 
    //     vowels[key] > 0 }
    return vowels.a > 0 && vowels.e > 0 && vowels.i > 0 && vowels.o > 0 && vowels.u > 0
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hasAllVowels;
