/***********************************************************************
Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note 
can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Examples:
canConstruct("a", "b");               // => false
canConstruct("a", "aa");              // => true
canConstruct("ababc", "dbaccab");     // => true
canConstruct("aabbc", "aaaabbbdef");  // => false
***********************************************************************/

function canConstruct(ransomNote, magazine) {
    let ransomLetterCount = {}
    let magazineLetterCount = {}
    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomLetterCount[ransomNote[i]] === undefined) {
            ransomLetterCount[ransomNote[i]] = 1
        } else {
            ransomLetterCount[ransomNote[i]]++ 
        }
    }
    for (let j = 0; j < magazine.length; j++) {
        if (magazineLetterCount[magazine[j]] === undefined) {
            magazineLetterCount[magazine[j]] = 1
        } else {
            magazineLetterCount[magazine[j]]++
        }
    }
    console.log(ransomLetterCount)
    console.log(magazineLetterCount)
    for (let key in ransomLetterCount) {
        if (magazineLetterCount[key] < ransomLetterCount[key] || magazineLetterCount[key] === undefined) {
            return false
        }
    }
    return true
}
//console.log(canConstruct("a", "b"));               // => false
// console.log(canConstruct("a", "aa"));              // => true
// console.log(canConstruct("ababc", "dbaccab"));     // => true
// console.log(canConstruct("aabbc", "aaaabbbdef"));  // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
