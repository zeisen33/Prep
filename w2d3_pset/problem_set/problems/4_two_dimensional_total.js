/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2); // => 15
***********************************************************************/

function twoDimensionalTotal(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) (
      sum += array[i][j]
    )
  }
  return sum
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalTotal;
