/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/
function isPrime(n) {
  if (n < 2) {
    return false
  } else if (n === 2) {
    return true
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function laligatArray(array) {
  let newArr = []
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = 0
    for (let j = 0; j <= array[i]; j++) {
      if (isPrime(j)) {
        sum += j
        // console.log('i:' + i)
        // console.log('j:' + j)
        // console.log('sum:' + sum)
      }

    }
    newArr.push(sum)
  }
  return newArr
}
console.log(laligatArray([10, 11, 20, 15])); // => [ 17, 28, 77, 41 ]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = laligatArray;
