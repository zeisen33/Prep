/***********************************************************************
Write a function isUniqueAnagram(word1, word2) that takes in two strings.
The function should return true if the strings are anagrams of each
other, false otherwise. Anagrams are strings that contain the same
characters, but not necessarily in the same order. Assume there will be
no repeated characters in each input string.

Examples:

isUniqueAnagram('iceman', 'cinema'); // => true
isUniqueAnagram('abcd', 'adcb'); // => true
isUniqueAnagram('abcd', 'adxb'); // => false
isUniqueAnagram('abcd', 'abcdx'); // => false
***********************************************************************/

function isUniqueAnagram(word1, word2) {
   first = {}
   second = {}
    for (let i = 0; i < word1.length; i++) {
     first[word1[i]] = 1
    }
   // console.log(first)

    for (let j = 0; j < word2.length; j++) {
     second[word2[j]] = 1
    }
   // console.log(second)
    for (let key in first) {
   //     console.log(first[key], second[key])
    
     if (first[key] !== second[key]) {
         return false
    }
    for (let key in second) {
        if (first[key] !== second[key]) {
            return false
        }
    }
    }
   return true
}
// console.log(isUniqueAnagram('iceman', 'cinema'))
// console.log(isUniqueAnagram('abcd', 'adxb'))
// console.log(isUniqueAnagram('abcd', 'adcb'))
// console.log(isUniqueAnagram('abcd', 'abcdx'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isUniqueAnagram;
