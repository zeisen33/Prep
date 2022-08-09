/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/

function isPrime(max) {
  // A Prime Number is a number only divisible by itself and 1
  // check number divisble by every number less than it
  // for loop from 2 to number
  // check if number is divisible by every number in the loop
  if (max === 2) {
    return true
  }   
  if (max < 2) {
    return false
  }
  for (i = 2; i < max; i++) {
    if (max % i === 0) {
      return false
    } else {
      continue
    }
  }  
  return true  
}
  //max = 5

//console.log(isPrime(8))







//   if (number === 2) {
//     return true
//   } else if (number < 2) {
//     return false
//   }
//   for (i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false
//     }
//   }
//   return true
// }
//console.log(isPrime(51))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
