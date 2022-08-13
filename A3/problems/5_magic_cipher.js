/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function magicCipher(sentence, cipher){
  let arrOfSent = sentence.split('')
  let finalArr = []

  for (let i = 0; i < arrOfSent.length; i++) {
    if (cipher[arrOfSent[i]] === undefined) {
      finalArr.push(arrOfSent[i])
    } else {
      finalArr.push(cipher[arrOfSent[i]])
    }
  }
  
  return finalArr.join('')
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
