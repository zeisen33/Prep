/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/
function abbreviate(sentence) {
    let newArr = sentence.split(' ')
    // console.log(newArr)
    let i = 0
    let finalArr = []
    while (i < newArr.length) {
        // console.log(newArr[i])
        // console.log(typeof(newArr[i]))
        if (newArr[i].length > 4) {
            finalArr.push(removeVowels(newArr[i]))
            //console.log('> 4')
        }   else {
            finalArr.push(newArr[i])
            //console.log('<= 4')
        }
        i++
        
    }
    return finalArr.join(' ')
}    


function removeVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let finalArr = []
    for (i = 0; i < word.length; i++) 
        if (vowels.includes(word[i])) {
            continue
        } else {
            finalArr.push(word[i])
        }
    return finalArr.join("")
    // let len = vowels.length
    // let newArr = []
    // for (i = 0; i < len; i++) {
      
}
console.log(abbreviate('bootcamp prep is fun'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
