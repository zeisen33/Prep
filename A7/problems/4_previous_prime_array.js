/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
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

function previousPrimeArray(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (!isPrime(array[i])) {
      newArr.push(array[i])
    } else {
      if (array[i] <= 2) {
        newArr.push(null)
      } else {
        for (j = array[i] - 1; j >= 2; j--) {
        if (isPrime(j)) {
          newArr.push(j)
          break
        }
      }
      }
    }
  }
  return newArr
}
console.log(previousPrimeArray([10, 12, 11, 7, 16]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
