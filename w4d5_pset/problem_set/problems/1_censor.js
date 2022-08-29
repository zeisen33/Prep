/***********************************************************************
Write a function `censor(sentence, curseWords)` that censors
the given sentence by replacing the vowels in curse words with
"*". Assume no punctuation.

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
result1; //=> "D*rn you Harold you son of a g*n"

var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
result2; //=> "Schn*k*ys I dont give a d*ddly sq**t"
***********************************************************************/
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function match(word, arr) {
    let newWord = ''
    if (arr.includes(word.toLowerCase())) {
        for (let i = 0; i < word.length; i++) {
            if (vowels.includes(word[i])) {
                newWord += '*'
            } else {
                newWord += word[i]
            }
        }
    }
    return newWord
}
 console.log(match('Aarn',["aarn", "gun"]))

function censor(sentence, curseWords) {
    let newSen = ''
    let words = sentence.split(' ')
    for (let i = 0; i < words.length; i++) {
        newSen += match(words[i], curseWords)
    }
    return newSen
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = censor;
