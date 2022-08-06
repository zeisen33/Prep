/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
   // // let i = sentence.length - 1
   // // let j = sentence.length
   // // while (i >= 0) {
   // //    if (i === " ") {
   // //       console.log(i)
   // //    }
   // //    i--
   // for (i = sentence.length - 1; i >=0 ; i--)
   // }
   let words = sentence.split(' ')
   let newArr = []
   for (i = words.length - 1; i >= 0; i--) {        // can also do with looping forwards and unshift. method
      newArr.push(words[i])
   }
   let newSen = newArr.join(' ') 
   return newSen

}
// console.log(reverseSentence("Jump, jump for joy")) //=> "joy for jump Jump,"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
