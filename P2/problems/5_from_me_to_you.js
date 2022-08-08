/*******************************************************************************
Write a function fromMeToYou(sentence) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

function fromMeToYou(sentence) {
  let newArr = sentence.split(' ')
  let i = 0
  while (i < newArr.length) {
    if (newArr[i] === "me") {
      newArr[i] = "you"
    }
    i++
  }
  return newArr.join(' ')
}
console.log(fromMeToYou('love me or hate me'))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
