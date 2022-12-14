// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false

function isInside(array, ele) {
    return array.indexOf(ele) !== -1
}
// console.log (isInside(['chase', 'phi', 'eliot'], 'eliot'))



// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'

function reverseStr(str) {
    let newArray = str.split('')
    let finalArray = []
    for (let i = 0; i < str.length; i++) {
        finalArray.unshift(str[i])
    }
    let finalStr = finalArray.join()
    return finalStr
}
// console.log(reverseStr('abcde'))



// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(max) {
    let i = 1
    let arr = []
    while (i <= max) {
        if (i % 7 === 0) {
            arr.push(i)
        }
    i++
    }
    return arr
}
// console.log(luckySevens(25))



// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function copyMachine(element, num) {
    let arr = []
    for (i = 0; i < num; i++) {
        arr.push(element)
    }
    return arr
}
// console.log(copyMachine('candy', 0))
// console.log(copyMachine('candy', 2))




// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

function everyOtherWord(sentence) {
    let arr = sentence.split(' ')
    let finalArr = []
    for (i = 0; i < arr.length; i += 2) {
        finalArr.push(arr[i])
    }
    return finalArr
}
// console.log(everyOtherWord('the weather is wonderful'))



// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true

function wordYeller(sentence) {
    let arr = sentence.split(' ')
    let newArr = []
    let punct = ['.', ',', '!', '?', ';', ':']
    for (i = 0; i < arr.length; i++) {
        if (punct.includes(arr[i][arr[i].length - 1])) {
            newArr.push(arr[i])
        // } else {newArr.concat(arr[i],["!"])}
           } else {newArr.push(arr[i] + "!") }
    }
    return newArr.join(' ')
}
// console.log(wordYeller("Stop it now! Please, wont you stop?"))

// wordYeller using concat instead of push
// the way to do what I'm trying to do actually is just to use push
// was trying to add "!" to end of an array element. concat creates new array elements
 function wordYeller2(sentence) {                          // this function intentionally won't work
    let arr = sentence.split(' ')
    let newArr = []
    let punct = ['.', ',', '!', '?', ';', ':']
    for (i = 0; i < arr.length; i++) {
        if (punct.includes(arr[i][arr[i].length - 1])) {
            newArr.push(arr[i])
        } else {
            newArr = newArr.concat(arr[i],["!"])
        }  // this isn't happening
        //{newArr.push(arr[i] + "!") }
    }
    return newArr.join(' ')
 }
 // console.log(wordYeller2("Stop it now! Please, wont you stop?"))
 

// let sen = 'at boy. cat! dare ex;'
// let arr = sen.split(' ')
// let arr1 = arr[1]
// console.log(arr1)
// console.log(arr[1][1])
// console.log(arr.length)
// console.log(arr[1][arr.length - 1]) // why can't i use arr.length as an index?
// console.log(arr1[arr.length - 1])



// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

function arraySubstring(words, str) {
    for (i = 0; i < words.length; i++) {
        words[i] = words[i].includes(str)
    }
    return words
}
// console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"))




// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"

function evenCaps(sentence) {
    let newSen = sentence.split('')
    let finalSen = ''
    for (i = 0; i <= newSen.length - 1; i += 2) {
        //console.log(newSen[i].toUpperCase())
        finalSen = finalSen + newSen[i].toUpperCase() + newSen[i + 1]
    }
        //console.log(finalSen)
        // newSen[i].toUpperCase()
    // }
    // return sentence
    return finalSen  
}
// console.log((evenCaps("Tom got a small piece of pie")))




// reverseSentence my way

// Write a function reverseSentence(sentence) that returns a string where all the
// words in the input sentence are reversed. Don't use Array#reverse.

// Examples:

// reverseSentence("Go to the store") => "store the to Go"
// reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
// *******************************************************************************/

function reverseSentence(sentence) {
    let j = sentence.length
    let arr = []
    for (i = j - 1; i >= 0; i--) {
        if (sentence[i] === ' ') {
            arr.push(sentence.substring(i + 1, j))
            // console.log(i)
            j = i
        } else if (i === 0) {
            arr.push(sentence.substring(i, j))
        }
    }
    return arr.join(' ')
}
// console.log(reverseSentence("Go to the store"))
// console.log(reverseSentence("Jump, jump for joy"))




// making variable number of arrays
// Given a sentence, return sen.length arrays, where each array has one word of the sentence

function createArray(sen) {
    let starterArray = sen.split(' ')
    let array = [] 
    for (i = 0; i < starterArray.length; i++) {
        array.push([starterArray[i]])
    }
    return array
}
console.log(createArray("The cow says 'Moo'"))