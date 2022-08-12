/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.

Examples:

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

twoDimensionalSize(arr1); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

twoDimensionalSize(arr2); // => 5
***********************************************************************/

function twoDimensionalSize(array) {            // this doesn't work if an element is blank
  let count = 0
 
  let i = 0
  while (i < array.length) {
    count += array[i].length
    i++
  }

  return count
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalSize;
