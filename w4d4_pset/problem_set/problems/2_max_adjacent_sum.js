/***********************************************************************
Write a function `maxAdjacentSum(array)` that takes in an array of
numbers and returns the maximum sum of adjacent numbers in the array.

HINT: First think how we can find adjacent elements in an array!

Examples:

var arr1 = [5, 6, 11, 3];
maxAdjacentSum(arr1); // => 17

var arr2 = [3, 2, 13, 5, 4, 7];
maxAdjacentSum(arr2); // => 18
***********************************************************************/

function maxAdjacentSum(array) {
    let max = array[0] + array[1]
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] + array[i + 1] > max) {
            max = array[i] + array[i + 1]
        }
    }
    return max
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = maxAdjacentSum;
