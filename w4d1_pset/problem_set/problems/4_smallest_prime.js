/***********************************************************************
Write a function `smallestPrime(array)` that takes in an array of
numbers and returns the smallest prime number in the array.

HINTS:
- start by creating an `isPrime` helper function
- the smallest prime number is 2

Examples:

var arr1 = [ 6, 7, 12, 11, 5, 4 ];
smallestPrime(arr1); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
smallestPrime(arr2); // => 7

var arr3 = [];
smallestPrime(arr3); // => null

var arr4 = [4, 6, 8, 10];
smallestPrime(arr4); // => null
***********************************************************************/
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

function smallestPrime(array) {
    let primes = []
    let minSoFar = null
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            primes.push(array[i])
        }
    }

    // for (let j = 0; j < primes.length - 1; j++) {
    //     minSoFar = Math.min(primes[j], primes[j + 1])       // commented also works
    // }
    // return minSoFar
    return Math.min(...primes)                                 // ... is destructuring
}
var arr2 = [11, -7, 7, 8, 6, 10];
// console.log(smallestPrime(arr2)); // => 7
// console.log(Math.min(arr2))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = smallestPrime;
