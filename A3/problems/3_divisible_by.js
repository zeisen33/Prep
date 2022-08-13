/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/

function divisibleByFivePairSum(array){
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i < j && (array[i] + array[j]) % 5 ===0 ) {
        newArr.push([i, j])
      }
    }
  }
  return newArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum;
