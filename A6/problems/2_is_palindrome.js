/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  let i = 0
  let j = sentence.length - 1
  while (i <= j) {
    if (sentence[i] === ' ' || sentence[j] === ' ') {
      i++
      j--
      continue
    }
    if (sentence[i] !== sentence[j]) {
      return false
    }
   // console.log(i + ':' + sentence[i])
   // console.log((j) + ':' + sentence[j])
    i++
    j--
  }
  return true
}
//console.log(isPalindrome('racecar')); // => true
//console.log(isPalindrome('stella won no wallets'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
