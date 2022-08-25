/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function reverseHipsterfy(sentence) {
    let newStr = ''
    let vowelCounter = 0
    for (let i = sentence.length - 1; i >= 0; i--) {
        if (!vowels.includes(sentence[i])) {
            newStr = sentence[i] + newStr
        } else if (vowelCounter === 0) {
            newStr = sentence [i] + newStr
            vowelCounter = 1
        }
        if (sentence[i] === ' ') {
            vowelCounter = 0
        }
    }
    return newStr
}
console.log(reverseHipsterfy("turtle cheeseburger fries"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
