/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.

Use only `while` loops. No `for` loops.

Examples:

pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

function pairProduct(arr, num) {
    let newArr = []

    let i = 0
    let j = 1
    while (i < arr.length && j < arr.length && i < j) {
        if (arr[i] * arr[j] === num) {
            // console.log(i + ', ' + j)
            newArr.push([i, j])
        }
        j++
        if (j === arr.length) {
            i++
            j = i + 1
        }
    }

    return newArr         
}

function pairProduct2(arr, num) {
    let newArr = []

    let i = 0
    while (i < arr.length ) {                        
        let j = i + 1
        while (j < arr.length) {
            if (arr[i] * arr[j] === num) {
                newArr.push([i, j])
            }
            // console.log('i : ' + i + ' ... j : ' + j)
            j++
            }
        i++    
    }
    return newArr
}        
        // while (j < arr.length) {
        //     console.log(i + ', ' + j)
        //     // if (i < j && arr[i] * arr[j] === num) {
        //     //     console.log(i)
        //         // newArr.push([i, j])
        //     j++
        // }

console.log(pairProduct2([1, 2, 3, 12, 8], 24)) // [ [ 1, 3 ], [ 2, 4 ] ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = pairProduct;
