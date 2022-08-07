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
    console.log(newArray)
    let finalArray = []
    console.log(finalArray)
    for (let i = 0; i < str.length; i++) {
        finalArray = finalArray.unshift(str[0])

    }
    console.log(finalArray)

//     for (let i = 0; i < str.length; i++) {
//         finalArray = finalArray.unshift(str[i])

//     }
//     let finalStr = finalArray.join('')
//     return finalStr 
// }
// console.log(reverseStr("abcde"))
}
return reverseStr('abcde')