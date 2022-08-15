/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/
let vowels = ['a', 'e', 'i', 'o', 'u']

function hipsterfy(sentence) {
    let words = sentence.split(' ')
    let hipsWords = []
    for (let i = 0; i < words.length; i++) {
        hipsWords.push(removeLastVowel(words[i]))
    }
    return hipsWords.join(' ')
}
console.log(hipsterfy("turtle cheeseburger fries"))

function removeLastVowel(word) {
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1, word.length + 1)
            // console.log(i)
        }
    }
}
// console.log(removeLastVowel("aklsjdfklejklj2lj32e23e0uasdfja98uas j4rj2lk399f je.lsfe fs"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
