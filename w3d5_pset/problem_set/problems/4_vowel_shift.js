/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/
let vowels = ['a', 'e', 'i', 'o', 'u']

function vowelShift(sentence) {
    let vowelCipher = {a: 'e', e: 'i', i: 'o', o: 'u', u: 'a'}
    let newSen = ''
    for (let i = 0; i < sentence.length; i++) {
        if (vowelCipher[sentence[i]] !== undefined) {
            // console.log('vowel')
             newSen += vowelCipher[sentence[i]]
        } else {
            // console.log('cons')
             newSen += sentence[i]
        }
    }
    return newSen
}
vowelShift('on the hunt')

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = vowelShift;
