/*******************************************************************************
Write a function primeFactors(n) that takes in a number, `n`. The function should
return an array containing all factors of `n` that are prime. A factor is a number
that divides another.

Examples:

primeFactors(10) => [ 2, 5 ]
primeFactors(24) => [ 2, 3 ]
primeFactors(30) => [ 2, 3, 5 ]
primeFactors(11) => [11]
*******************************************************************************/
function isPrime(n) {
  if (n < 2) {
    return false
  } else if (n === 2) {
    return true
  } else {
    for (let i = 2; i < n ; i++) {
      if (n % i === 0) {
        return false
      }
    }
  }
  return true
}
// console.log(isPrime(-1))
// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(4))



function primeFactors(n) {
  let newArr = []
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
      newArr.push(i)
    }
  }
  return newArr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = primeFactors;
