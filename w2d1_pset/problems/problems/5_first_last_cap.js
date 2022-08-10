/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
    let newArr = sentence.split(' ')
    let finalStr = ''
    for (i = 0; i < newArr.length; i++) {
        let word = newArr[i]
        let firstChar = word[0].toUpperCase()
        let lastChar = word[word.length - 1].toUpperCase()
        let middleChars = ''
        for (j = 1; j < word.length - 1; j++) {
            middleChars += word[j].toLowerCase()    
        }
        // let middleChars = word.slice(1, word.length - 1).toLowerCase() works instead of lines 20-22
        if (i < newArr.length - 1) {
            finalStr += firstChar +  middleChars + lastChar + ' '
        } else {
            finalStr += firstChar +  middleChars + lastChar
        }
    }
    return finalStr
}    
console.log(firstLastCap('hello BOOTCAMP PrEp'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
