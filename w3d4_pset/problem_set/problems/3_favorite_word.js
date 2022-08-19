/***********************************************************************
Write a function favoriteWord(favoriteLetter, sentence) that takes in a
single letter and a sentence string. The function should return the word
in the sentence that contains `favoriteLetter` the most. If there are
ties, return the word that appears first in the sentence.

Examples

favoriteWord('p', 'sinful caesar sipped his snifter') // => 'sipped'
favoriteWord('a', 'sinful caesar sipped his snifter') //=> 'caesar'
favoriteWord('s', 'sinful caesar sipped his snifter') //=> 'sinful'
favoriteWord('x', 'sinful caesar sipped his snifter') //=> ''
***********************************************************************/

function favoriteWord(favoriteLetter, sentence) {
    let words = sentence.split(' ') 
    let word0Count = 0
    let favWordSoFar = words[0]
    for (let k = 0; k < words[0].length; k++) {
        if (words[0][k] === favoriteLetter) {
            word0Count++
        }
    }    

    for (let i = 1; i < words.length; i++) {
        let word = words[i]
        let count = 0
        for (let j = 0; j < word.length; j++) {
            if (word[j] === favoriteLetter) {
                count++
            }

        }
        if (count > word0Count) {
            favWordSoFar = words[i]
        }
    }
    if (word0Count === 0 && favWordSoFar === words[0]) {
        return ''
    } else {
        return favWordSoFar
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = favoriteWord;
