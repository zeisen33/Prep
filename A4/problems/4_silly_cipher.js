/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/

function sillyCipher(sentence, cipher){   
  let chars = sentence.split('')
  let newChars = []                             // can be done with a string too. newChars = ''
  for (let i = 0; i < chars.length; i++) {
    if (cipher[chars[i]] === undefined) {
      newChars.push('.')                        // newChars += '.'
    } else {
      newChars.push(cipher[chars[i]])           // newChars += cipher[chars[i]]      Adding to a string does not count as trying to mutate a string
    }
  }
  return newChars.join('')
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
