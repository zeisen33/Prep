// isPrime
// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.

function isPrime(num) {
    if (num === 2) {return true}
    if (num <2) {return false}
    for (let i = 2; i < num; i++) {
        if (num % i === 0){
            return false
        } else {continue}
    }
    return true
}
// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(51))
// console.log(isPrime(17))
// console.log(isPrime(6572738589))



// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6

function logBetween(start, end) {
    for (i = start; i <= end; i++) {
        console.log(i)
    }
}

// logBetween(-3, 7)



// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15

function logBetweenStepper(min, max, step) {
    let i = min
    while (i <= max) {
        console.log(i)
        i += step
    } 
}

// logBetweenStepper(4, 17, 3)



// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15

function printFives(max) {
    for (let i = 0; i <= max; i += 5) {
        console.log(i)
    }
}

function printFives2(max) {
    for (let i = 0; i <= max; i++) {
        if (i % 5 === 0) {
            console.log(i)
        } else {continue}
    }
}

// printFives(47)
// printFives2(32)




// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

function printReverse(min, max) {
    let i = max
    while (i >= min) {
        console.log(i)
        i--
    } 
}

// printReverse(-3, 4)



// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795

function sumNums(max) {
    sum = 0
    for (let i = 1; i <= max; i++) {
        sum += i
    }
    return sum
}

// console.log(sumNums(365))



// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false

function isFactorOf(number, factor) {
    return number % factor === 0
}

// console.log(isFactorOf(22,7))
// console.log(isFactorOf(5,0))
// console.log(isFactorOf(-6,2))



// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

function fizzBuzz(max) {
    i = 0
    while (i < max) {
       if (i % 3 === 0 && i % 5 === 0) {
          i++
       } else if (i % 3 === 0 || i % 5 === 0) {
          console.log(i)
          i++
       } else {i++}
    }
}       

// fizzBuzz(20)



// function printForwards(start, end) {
//   for (var counter = start; counter <= end; counter++) {
//     console.log(counter);
//   }
// }

function printForwards(start, end) {
    for (var counter = start; counter <= end; counter++) {
        console.log(counter)
    }
}

// printForwards(1,17)




// function printBackwards(start, end) {
//   var i = end;
//   while (i >= start) {
//     console.log(i);
//     i--;
//   }
// }

// printBackwards(-5, 6); // feel free to change the numbers being passed

function printBackwards(start, end) {
    var i = end;
    while (i >= start) {
        console.log(i)
        i--
    }
}

// printBackwards(-5, 6)



function func1(num) {
    return num + 50;
  }
  
  function func2(num) {
    return num + " bottles of beer on the wall";
  }
  
  function func3(num) {
    var x = func1(num);
    return func2(x);
  }
  
  var result = func3(5);
//   console.log(result); // '55 bottles of beer on the wall'





  var foo = function(name) {
    return "Dance " + name + ", dance! "
  }
  
  var bar = function() {
    var str = "";
  
    for (var i = 0; i < 3; i += 1) {
      str += foo("Anthony");
      str += foo("Haseeb");
      str += foo("Winnie");
      str += " | ";
    }
  
    return str;
  }
  
  var result = bar();
//   console.log(result); // 'Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance! | Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance! | Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance! | '



function sayHiNTimes(n) {
    var i = 0;
  
    while (i < n) {
      console.log("Hi");
    }
  }
// does not increment i

function isFive(n) {
    if (n = 5) {
      return true;
    } else {
      return false;
    }
  }
// need to use === instead of =



// x	  y	      z	    x && y || z	   x && (y || z)
// true	 true	false		true           true  
// true	 false	false		false          false
// false true	false		false          false 
// false false	false		false          false



// x	    y	    z	   x || y && z	   x || (y && z)
// true	  true	  false		   false           true
// true	  false	  false		   false           true
// false  true	  false		   false           false
// false  false	  false		   false           false