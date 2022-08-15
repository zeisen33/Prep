/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function hipsterfy(sentence) {
  let words = sentence.split(' ')
  let newArr = []
  for (let i = 0; i < words.length; i++) {
    newArr.push(removeLastVowel(words[i]))
  }
  return newArr.join(' ')
}

function removeLastVowel(word) {
  for (let i = word.length; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1, word.length + 1)
    }
  }
  return word
}
console.log(removeLastVowel('abd'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
