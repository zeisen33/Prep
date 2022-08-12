/***********************************************************************
Write a function `countInnerElement(arr)` that takes in a 2-D array of elements.
Each element of 'arr' is a sub array that contains multiple elements. The number
of elements contained in each sub array are not the same. We can assume each sub
array contains at least one element. We should return an object that counts
how many times each element in each sub array repeats.

// Examples:
// var arr1 = [
//   [1,2,4,5],
//   [2,7,4],
//   [1,4,5,2,7]
// ]

// countInnerElement(arr1) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

// var arr2 = [
//   ['a','b','c','d'],
//   ['a','b'],
//   ['a','c','d','a']
// ]

// countInnerElement(arr2) // => {a: 4, b: 2, c: 2, d: 2}
***********************************************************************/


function countInnerElement(arr) {
    let finalCount = {}
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (finalCount[arr[i][j]] === undefined) {
                finalCount[arr[i][j]] = 1
            } else {
                finalCount[arr[i][j]] += 1
            }
        }

    }
    return finalCount
}
let arr2 = [
    ['a','b','c','d'], 
    ['a','b'], 
    ['a','c','d','a']
]
console.log(countInnerElement(arr2))
// countInnerElement(arr2) // => {a: 4, b: 2, c: 2, d: 2}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countInnerElement;
