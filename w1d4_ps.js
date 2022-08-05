// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

function logEach(array) {
    for (i = 0; i < array.length; i++) {
        // console.log(i + ': ' + array[i])
        console.log(`${i}: ${array[i]}`)
    }

}
// logEach(["Anthony", "John", "Carson"]); // prints



// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

function range(start, end) {
    let arr = []
    for (i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
}
// console.log(range(1,4))



// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

function sumArray(array) {
    let sum = 0
    let idx = 0
    while (idx < array.length) {
        sum += array[idx]
        idx++
    }
    return sum
}
// console.log(sumArray([5, 6, 10]))



// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']

function capWords(words) {
    let array = words
   for (let i = 0; i < array.length; i++) {
      array[i] = array[i].toUpperCase()
   } 
   return array
}
// console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']




// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

function wordPeriods(sentence) {
    newSentence = sentence.split(' ').join('. ')
    return newSentence
}
// console.log(wordPeriods('what is the weather today'))



// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43

function maxValue(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
// console.log(maxValue([-4, -10, 0.43])); // => 0.43




// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:
//
// myIndexOf([1,2,3,4],4) => 3
// myIndexOf([5,6,7,8],2) => -1

function myIndexOf(array, target) {
    let i = 0
    while (i < array.length) {
        if (array[i] === target) {
            return i
        }
    i++
    }
    return -1
}
// console.log(myIndexOf([5,6,7,8],8)) // => -1



// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//
// Examples:
//
// factorArray([2,3,4,5,6],20) => [2,4,5]
// factorArray([2,3,4,5,6],35) => [5]
// factorArray([10,15,20,25],5) => []

function factorArray(array, number) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (number % array[i] === 0) {
            newArr.push(array[i])
        }
    }
    return newArr
    // let newArr = []
    // let i = 0
    // while (i < array.length) {
    //     if (number % array[i] === 0) {
    //         newArr.push(array[i])
    //     }
    // i++    
    // }
    // return newArr
}

console.log( factorArray([2,3,4,5,6],35)) //=> [5]
console.log( factorArray([2,3,4,5,6],20)) // => [2,4,5]



// function printForwards(arr) {
//     for (var i = 0; i < arr.length; i++) {
//       var ele = arr[i];
//       console.log(ele);
//     }
//   }
  
//   var alphabet = ['a', 'b', 'c', 'd', 'e'];
//   printForwards(alphabet);

function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {
        var ele = arr[i]
        console.log(ele)
    }
}
// var alphabet = ['a', 'b', 'c', 'd', 'e'];
// printForwards(alphabet)



// function printBackwards(array) {
//     for (var i = array.length - 1; i >= 0; i--) {
//       var ele = array[i];
//       console.log(ele);
//     }
//   }
  
//   var names = ['kurstie', 'mike', 'alex', 'meagan'];
//   printBackwards(names);

function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var ele = array[i]
        console.log(ele)
    }
}

// var names = ['kursie', 'mike', 'alex', 'meagan']
// printBackwards(names)