/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less that or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
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

function numberPrimes(n) {
  let countPrimes = 0
  for (let i = n; i >= 2; i--) {
    if (isPrime(i)) {
      countPrimes++
    }
  }
  return countPrimes
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
