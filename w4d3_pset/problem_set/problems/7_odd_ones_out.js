/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
oddOnesOut(arr2); // => [ 'fish' ]
***********************************************************************/

function oddOnesOut(array) {
    let eleCount = {}
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (eleCount[array[i]] === undefined) {
            eleCount[array[i]] = 1
        } else {
            eleCount[array[i]]++
        }
    }
    for (let key in eleCount) {
        if (eleCount[key] % 2 === 0) {
            newArr.push(key)
        }
    }
    return newArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddOnesOut;
