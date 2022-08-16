/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/

function threeInARow(arr) {
    for (let i = 0; i < arr.length -2; i++) {
        if (arr[i + 1] === arr [i] && arr[i + 2] === arr[i]) {
            // console.log(i)
            // console.log(arr[i])
            // console.log(arr[i + 1])
            // console.log(arr[i + 2])
            return true
        } 
    }
    return false  
}
console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeInARow;
