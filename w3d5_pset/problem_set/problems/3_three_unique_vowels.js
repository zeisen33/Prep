/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/
let vowels = ['a', 'e', 'i', 'o', 'u']

function threeUniqueVowels(string) {
    let vowelCount = {a: 0, e: 0, i: 0, o: 0, u: 0}
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            vowelCount[string[i]]++
        }
    }
    let uniqueCount = 0
    for (let key in vowelCount) {
        if (vowelCount[key] > 0) {
            uniqueCount++
        }
    }
    return uniqueCount >= 3
}
// threeUniqueVowels('bootcamp')

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeUniqueVowels;
