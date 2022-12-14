/*******************************************************************************
Write a function evenSumArray(array) that takes in an array of numbers and returns
a new array where each num is replaced with the sum of all even numbers less than
or equal to that num.

Examples:

evenSumArray([6, 7, 5]) => [ 12, 12, 6 ]
evenSumArray([2, 8, 3, 5]) => [ 2, 20, 2, 6 ]
*******************************************************************************/

function evenSumArray(array) {
  let newArr = []
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = 0
    for (let j = array[i]; j > 1; j--) {
      if (j % 2 === 0) {
        sum += j
      }
    }
    newArr.push(sum)
  }  
  return newArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenSumArray;
