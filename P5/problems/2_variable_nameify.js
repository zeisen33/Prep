/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/
function variableNameify(words) {
  let newArr = []
  for (let i = 0; i < words.length; i++) {
    newArr.push(words[i][0].toUpperCase() + words[i].slice(1).toLowerCase())
  }
  newArr[0] = newArr[0].toLowerCase()
  return newArr.join('')
}


// function variableNameify(words) {                        // why does this time out?
//   let newArr = [words[0][0].toLowerCase()]
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i]
//     if (i = 0) {
//       newArr.push(word.slice(1, ).toLowerCase())
//     } else {
//       newArr.push(word[0].toUpperCase() + word.slice(1, ))
//     }

//   }
//    return newArr
// }
console.log(variableNameify(['is', 'prime'])) //=> 'isPrime'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
