/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.

Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)

- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice


var punctuation = [";", "!", ".", "?", ",", "-"];

Examples:

titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"

titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"

titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"

titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/

let punctuation = [";", "!", ".", "?", ",", "-"]

function removePunctuation(string) {
    let obj = {}
    let arrOfString = string.split('')
    let newArrOfString = []
    let newArrOfStringAndObj =[]
    for (let i = 0; i < arrOfString.length; i++) {
        if (punctuation.includes(arrOfString[i])) {
            newArrOfString.push('')
            obj[i] = arrOfString[i]
        } else {
            newArrOfString.push(arrOfString[i])
        }
    }
    newArrOfString = newArrOfString.join('')
    newArrOfStringAndObj = [newArrOfString, obj]
    return newArrOfStringAndObj
}

// console.log(removePunctuation("forest gump, the runner"))
//    console.log(removePunctuation('jwe;frlk23.r.;lkajds;fj34'))
//   console.log(removePunctuation("i LOVE; lover of mine"))

function isStopWord(word, stopWords) {
    for (let i = 0; i < stopWords.length; i++)
    if (stopWords[i].toLowerCase() === word.toLowerCase()) {
        return true
    }
    return false
}
stopWords1 = ["love", "of"]
word1 = "love"
word2 = "hate"
word3 = "of"
//  console.log(isStopWord(word2, stopWords1))


 function titleize(title, stopWords) {
    let titleArray = title.split(' ')
    let puncts = removePunctuation(title)[1]

    // console.log(titleArray)
    let removedPunc = []
    let upperLowerArr = []
    let finalArr = []
    for (let i = 0; i < titleArray.length; i++) {
        removedPunc.push(removePunctuation(titleArray[i])[0])
        // console.log(removedPunc[i])
         if (isStopWord(removedPunc[i], stopWords)) {
            //  console.log(removedPunc[i].toLowerCase())
            upperLowerArr.push(removedPunc[i].toLowerCase())
         }  else {
            upperLowerArr.push(removedPunc[i].toUpperCase())
         }
    }
    for (let j = 0; j < upperLowerArr.length; j++) {
        finalArr.push(ifCap(upperLowerArr[j]))
    }
    // let newSen = finalArr.join(' ')
    // let hopeFullyLastArr = []
    // for (let k = 0; k < newSen.length; k++) {
    //     if (puncts[k] === undefined) {
    //         hopeFullyLastArr.push(newSen[k])
    //     } else {
    //         hopeFullyLastArr.push(puncts[k])
    //     }
    // }

    // let idx = 0
    // for (let k = 0; k < finalArr.length; k++) {
    //     for (let l = 0; l < finalArr[k].length; l++) {
    //         console.log(idx)
    //         if (finalArr[k][l] === ' ') {
    //             continue
    //         }
    //         if (puncts[idx] === undefined) {
    //             idx++
    //             console.log(finalArr[k][l])
    //         } else {
    //             finalArr[k] = finalArr[k].concat(puncts[idx])
    //             console.log(finalArr[k][l])
    //         idx++
    //         }
    //     }
    // }

    // for (let k = 0; k < twoDimensionalSize(finalArr); k++) {
    //      if (puncts[k] === undefined) {
    //          continue
    //     }   else {
    //         console.log(puncts) }
    //         k++
    //     }
    let finalSen = finalArr.join(' ')
    let arrWithPuncts = []
    for (let k = 0; k < finalSen.length; k++) {
        if (puncts[k] === undefined) {
            arrWithPuncts.push(finalSen[k])
        } else {arrWithPuncts.push(puncts[k], ' ')
            }

    }
    // console.log(finalSen.length)
    // console.log(arrWithPuncts)
    // console.log(arrWithPuncts.join('').length)
    if (punctuation.includes(title[title.length - 1])) {
        arrWithPuncts.push(title[title.length - 1])
    }
    return arrWithPuncts.join('')
}

function twoDimensionalSize(array) {            // this doesn't work if an element is blank
    let count = 0
   
    let i = 0
    while (i < array.length) {
      count += array[i].length
      i++
    }
  
    return count
  }


function ifCap(arr) {
    let newArr = []
    if (arr.length === 1) {
        newArr.push(arr[0])
    } else if (arr === arr.toUpperCase()) {
        newArr.push(arr[0])
        newArr.push(arr.slice(1, arr.length).toLowerCase())
    }  else {
        newArr.push(arr.toLowerCase())
    } 
    return newArr.join('')
}


   console.log(titleize("i LOVE; lover of mine", ["love", "of"]))  // "I love; Lover of Mine"
  console.log(titleize("forest gump, the runner", ["the"]))
   console.log(titleize("shall we dance?", ["dance"]))
// console.log(removePunctuation("shall we dance?"))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
  module.exports = titleize;
