/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.

Example:

splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
***********************************************************************/

function splitHalfArray(array) {
    let firstArr = []
    let secondArr = []
     if (array.length % 2 === 1) {
        for (let i = 0; i < array.length; i++) {
            if (i < Math.floor(array.length / 2)) {
                firstArr.push(array[i])
            } else if (i > array.length / 2) {
                secondArr.push(array[i])
            }
        }
     } else if (array.length % 2 === 0) {
        for (let i = 0; i < array.length; i++) {
            if (i < Math.floor(array.length / 2)) {
                firstArr.push(array[i])
            } else if (i >= array.length / 2) {
                secondArr.push(array[i])
            }
        }
     }

    return [firstArr, secondArr]
}
splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = splitHalfArray;
