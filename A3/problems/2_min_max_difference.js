/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function minMaxDifference(array){
  let min = array[0]
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    } else if (array[i] > max) {
      max = array[i]
    }
  }
  return max - min
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
