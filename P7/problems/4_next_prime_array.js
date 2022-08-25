/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/
function isPrime(n) {
  if (n < 2) {
    return false
  } else if (n === 2) {
    return true
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false
      }
    }
  }
  return true
}

function nextPrimeArray(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (!isPrime(array[i])) {
      newArr.push(array[i])
    } else {
      for (j = array[i] + 1; ; j++) {
        if (isPrime(j)) {
          newArr.push(j)
          break
        }
      }
    }
  }
  return newArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = nextPrimeArray;
