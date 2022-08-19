/***********************************************************************
Write a function `commonPrimeFactors` that takes in two numbers as
arguments and returns an array of all prime factors that are common
between the two numbers. A factor is a number that divides another
number without resulting in a remainder.

Examples:

commonPrimeFactors(12, 50); // => [ 2 ]
commonPrimeFactors(6, 24); // => [ 2, 3 ]
commonPrimeFactors(11,22); // => [ 11 ]
commonPrimeFactors(45, 60); // => [ 3, 5 ]
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

function commonPrimeFactors(num1, num2) {
    let arr = []
    for (let n = 1; n <= Math.min(num1, num2); n++) {
        if (isPrime(n) && num1 % n === 0 && num2 % n === 0) {
            arr.push(n)
        }
    }
    return arr
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = commonPrimeFactors;
